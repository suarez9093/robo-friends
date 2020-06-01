import React from 'react';
import CardList from './components/CardList';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="tc">
      <h1>RoboFriends</h1>
      <SearchBar />
      <CardList />
    </div>
  );
}

export default App;
