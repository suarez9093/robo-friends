import React, { useState, useEffect } from 'react';
import CardList from './components/CardList';
import SearchBar from './components/SearchBar';
import Scroll from './components/Scroll/index';
import ErrorBoundry from './components/ErrorBoundry';
import { connect } from "react-redux"
// import { searchRobots } from './reducers';
import { setSearchField } from './actions'


const mapStateToProps = state => {
  console.log("state: ", state)
  return {
    searchField: state.searchField
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

    searchRobot: (e) => dispatch(setSearchField(e.target.value))
  }
}

function App(props) {
  const [robot, setRobot] = useState([]);

  const { searchField, searchRobot } = props

  const filteredRobot = robot.filter(robot => robot.username.toLowerCase().includes(searchField.toLowerCase()))
  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(data => setRobot(data))
  }, [])
  return (
    <div className="tc">
      <h1 className="title">RoboFriends</h1>
      <SearchBar searchRobot={searchRobot} />
      <Scroll>
        <ErrorBoundry>
          <CardList robots={filteredRobot} />
        </ErrorBoundry>
      </Scroll>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
