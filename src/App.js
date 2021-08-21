import { useState } from 'react';
import './App.scss';
import Game from './Game';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Game />
      </header>
    </div>
  );
};

export default App;
