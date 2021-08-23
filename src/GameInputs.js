import { useState } from 'react';
import { Col, Button, Form, Row } from 'react-bootstrap';

const GameInputs = props => {
  const [inputHeading, setInputHeading] = useState(undefined);

  const handleHeadingSelect = (evt) => {
    evt.preventDefault();

    props.handleHeadingSelect(inputHeading);
  };

  return(
    <>
      <Form onSubmit={handleHeadingSelect}>
        <Row className="mb-3">
          <Form.Group className="mb-3">
            <Form.Label column="lg" lg={2}>Heading</Form.Label>
            <Form.Control
              size="md"
              type="text"
              value={inputHeading}
              onChange={e => setInputHeading(e.target.value)}
            />
            <Form.Text>
              Calculate compass lag induced overshoot or undershoot, and enter a heading to turn to
            </Form.Text>
          </Form.Group>
        </Row>
        <Button variant="outline-primary" type="submit">Turn this heading</Button>
        <Button variant="outline-secondary" onClick={props.resetGame}>Generate New Headings</Button>
      </Form>
    </>
  )
};

export default GameInputs;
