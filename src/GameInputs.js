import { useState } from 'react';
import { Col, Button, Form } from 'react-bootstrap';

const GameInputs = props => {
  const [inputHeading, setInputHeading] = useState(undefined);

  const handleHeadingSelect = (evt) => {
    evt.preventDefault();

    props.handleHeadingSelect(inputHeading);
  };

  return(
    <>
      <p>Current Heading: {(props.currentHeading + '').padStart(3, '0')}</p>
      <p>Desired Heading: {(props.desiredHeading + '').padStart(3, '0')}</p>
      <form onSubmit={handleHeadingSelect}>
        <label>Turn to:</label>
        <input
          type="text"
          value={inputHeading}
          onChange={e => setInputHeading(e.target.value)}
        />
        <Button variant="primary">Turn this heading</Button>
      </form>
    </>
  )
};

export default GameInputs;
