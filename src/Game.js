import { useMemo, useState } from 'react';
import { outputHeading } from './overshoot';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import DirectionIndicator from './DirectionIndicator';
import Compass from './Compass';
import GameInputs from './GameInputs';

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
    setChosenHeading(undefined);
    setResultHeading(undefined);

    return;
  };

  // initial directions on game load
  const { current, desired } = useMemo(() => {
    return initializeDirections();
  }, []);

  const [currentHeading, setCurrentHeading] = useState(current);
  const [desiredHeading, setDesiredHeading] = useState(desired);

  // the direction chosen to turn, and the resulting direction after compass lag
  const [chosenHeading, setChosenHeading] = useState(undefined);
  const [resultHeading, setResultHeading] = useState(undefined);

  const correct = outputHeading(currentHeading, desiredHeading);
  console.log("correct heading to turn:" + correct);

  const handleHeadingSelect = (inputHeading) => {
    setChosenHeading(inputHeading);
    setResultHeading(desiredHeading);
  };

  return(
    <div>
      <div className="instrumentsWrapper">
        <DirectionIndicator
          heading={currentHeading}
          buggedHeading={desiredHeading}
          chosenHeading={chosenHeading}
          />

        <Compass
          heading={currentHeading}
          chosenHeading={chosenHeading}
          resultHeading={resultHeading}
          rotateTime={4}
        />
      </div>

      <Row>
        <Col>
          <GameInputs
            handleHeadingSelect={handleHeadingSelect}
            currentHeading={currentHeading}
            desiredHeading={desiredHeading}
          />
          <button onClick={resetGame}>Generate New Headings</button>
        </Col>
        <Col>
          TODO: settings go here
        </Col>
      </Row>
    </div>
  );
};

export default Game;
