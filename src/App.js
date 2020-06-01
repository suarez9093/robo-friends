import React, { useState, useEffect } from 'react';
import CardList from './components/CardList';
import SearchBar from './components/SearchBar';
import Scroll from './components/Scroll/index';
import ErrorBoundry from './components/ErrorBoundry';
import { connect } from "react-redux"
import { setSearchField, requestRobots } from './actions'


const mapStateToProps = state => {
  console.log("state: ", state)
  return {
    searchField: state.searchRobots.searchField,
    isPending: state.requestRobots.isPending,
    robots: state.requestRobots.robots,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

    searchRobot: (e) => dispatch(setSearchField(e.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

function App(props) {
  // const [robot, setRobot] = useState([]);

  const { searchField, searchRobot, robots, isPending } = props

  const filteredRobot = robots.filter(robot => robot.username.toLowerCase().includes(searchField.toLowerCase()))

  useEffect(() => props.onRequestRobots(), [])

  return isPending ? <h1>Loading...</h1> :
    (
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
