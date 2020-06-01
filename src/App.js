import React from 'react';
import CardList from './components/CardList';
import SearchBar from './components/SearchBar';
import Scroll from './components/Scroll/index';
import ErrorBoundry from './components/ErrorBoundry';

function App() {
  return (
    <div className="tc">
      <h1 className="title">RoboFriends</h1>
      <SearchBar />
      <Scroll>
        <ErrorBoundry>
          <CardList />
        </ErrorBoundry>
      </Scroll>
    </div>
  );
}

export default App;
