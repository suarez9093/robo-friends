import React from 'react';
import CardList from './components/CardList';
import SearchBar from './components/SearchBar';
import Scroll from './components/Scroll/index';

function App() {
  return (
    <div className="tc">
      <h1 className="title">RoboFriends</h1>
      <SearchBar />
      <Scroll>
        <CardList />

      </Scroll>
    </div>
  );
}

export default App;
