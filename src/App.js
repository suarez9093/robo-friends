import React from 'react';
import Card from './components/Card';
import { robots } from './robots';


function App() {
  return (
    <div >
      {robots.map(robot => <Card robot={robot} />)}

    </div>
  );
}

export default App;
