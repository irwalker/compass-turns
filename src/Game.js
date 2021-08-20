import { useState } from 'react';
import { outputHeading } from './overshoot';
import DirectionIndicator from './DirectionIndicator';
import Compass from './Compass';

const Game = props => {
  const correct = outputHeading(props.currentHeading, props.desiredHeading);
  console.log("correct heading to turn:" + correct);

  const [inputHeading, setInputHeading] = useState(null);
  const [chosenHeading, setChosenHeading] = useState(null);
  const [fail, setFail] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setChosenHeading(inputHeading);

    if (inputHeading == correct) {
      setFail(false);
      setSuccess(true);
    } else {
      setSuccess(false);
      setFail(true);
    }
  };

  return(
    <div>
      <DirectionIndicator
        heading={props.currentHeading}
        buggedHeading={props.desiredHeading}
        chosenHeading={chosenHeading}
        success={success}
        fail={fail}
        />
      <Compass />

      <div className="setup">
        <p>Current Heading: {(props.currentHeading + '').padStart(3, '0')}</p>
        <p>Desired Heading: {(props.desiredHeading + '').padStart(3, '0')}</p>
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

    </div>
  );
};

export default Game;
