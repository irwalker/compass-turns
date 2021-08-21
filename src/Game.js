import { useMemo, useState } from 'react';
import { outputHeading } from './overshoot';
import DirectionIndicator from './DirectionIndicator';
import Compass from './Compass';

const Game = () => {
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
    setInputHeading(undefined);
    setChosenHeading(undefined);
    setResultHeading(undefined);
    setFail(false);
    setSuccess(false);

    return;
  };

  // initial directions on game load
  const { current, desired } = useMemo(() => {
    return initializeDirections();
  }, []);

  const [currentHeading, setCurrentHeading] = useState(current);
  const [desiredHeading, setDesiredHeading] = useState(desired);

  const [inputHeading, setInputHeading] = useState(undefined);

  // the direction chosen to turn, and the resulting direction after compass lag
  const [chosenHeading, setChosenHeading] = useState(undefined);
  const [resultHeading, setResultHeading] = useState(undefined);

  const [fail, setFail] = useState(false);
  const [success, setSuccess] = useState(false);

  const correct = outputHeading(currentHeading, desiredHeading);
  console.log("correct heading to turn:" + correct);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    setChosenHeading(inputHeading);
    setResultHeading(desiredHeading);

    // TODO: set fail/success after x time
    if (inputHeading == correct) {
      // setFail(false);
      // setSuccess(true);
    } else {
      // setSuccess(false);
      // setFail(true);
    }
  };

  return(
    <div>
      <Compass
        heading={currentHeading}
        chosenHeading={chosenHeading}
        resultHeading={resultHeading}
        rotateTime={4}
      />

      <DirectionIndicator
        heading={currentHeading}
        buggedHeading={desiredHeading}
        chosenHeading={chosenHeading}
        success={success}
        fail={fail}
        />

      <div className="setup">
        <p>Current Heading: {(currentHeading + '').padStart(3, '0')}</p>
        <p>Desired Heading: {(desiredHeading + '').padStart(3, '0')}</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="answer">
          <label>Turn to:</label>
          <input
            type="text"
            value={inputHeading}
            onChange={e => setInputHeading(e.target.value)}
          />
          <input type="submit" value="Turn this heading" />
        </div>
      </form>
      <button onClick={resetGame}>Generate New Headings</button>
    </div>
  );
};

export default Game;
