import './App.css';
import Compass from './Compass';

const App = () => {
  const min = 0;
  const max = 360;
  const currentHeading = Math.floor(Math.random() * (max - min));
  const desiredHeading = Math.floor(Math.random() * (max - min));

  return (
    <div className="App">
      hodor
      <header className="App-header">
        <Compass currentHeading={currentHeading} desiredHeading={desiredHeading}/>
      </header>
    </div>
  );
};

export default App;
