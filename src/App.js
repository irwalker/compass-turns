import { useState } from 'react';
import './App.scss';
import Game from './Game';

const App = () => {
  const initializeDirections = () => {
    const min = 0;
    const max = 360;
    const current = Math.floor(Math.random() * (max - min));
    const desired = Math.floor(Math.random() * (max - min));

    return { current, desired };
  };

  const resetGame = () => {
    const { current, desired } = initializeDirections();

    setCurrentHeading(current);
    setDesiredHeading(desired);

    return;
  };

  const { current, desired } = initializeDirections();
  const [currentHeading, setCurrentHeading] = useState(current);
  const [desiredHeading, setDesiredHeading] = useState(desired);

  return (
    <div className="App">
      <header className="App-header">
        <Game currentHeading={currentHeading} desiredHeading={desiredHeading}/>
        <button onClick={resetGame}>Generate New Headings</button>
      </header>
    </div>
  );
};

export default App;
