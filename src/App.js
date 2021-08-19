import { useState } from 'react';
import './App.css';
import Compass from './Compass';

const App = () => {
  const initializeDirections = () => {
    const min = 0;
    const max = 360;
    const current = Math.floor(Math.random() * (max - min));
    const desired = Math.floor(Math.random() * (max - min));

    return { current, desired };
  };

  const resetCompass = () => {
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
        <Compass currentHeading={currentHeading} desiredHeading={desiredHeading}/>
        <button onClick={resetCompass}>Generate New Headings</button>
      </header>
    </div>
  );
};

export default App;
