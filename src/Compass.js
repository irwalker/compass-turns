const Compass = props => {
  const calculateOvershoot = (desiredHeading) => {
    if (desiredHeading > 270) {
      return Math.ceil(30 - ((360 - desiredHeading) * 1/3));
    } else {
      return Math.ceil(30 - (desiredHeading * 1/3));
    }
  };

  const calculateUndershoot = (desiredHeading) => {
    if (desiredHeading < 180) {
      return Math.ceil(30 - ((180 - desiredHeading) * 1/3));
    } else {
      return Math.ceil(30 - ((desiredHeading - 180) * 1/3));
    }
  };

  const compassAdd = (desiredHeading, missBy) => {
    const sum = desiredHeading + missBy;
    if (sum > 360) {
      return 360 - sum;
    }

    return sum;
  };

  const compassSubtract = (desiredHeading, missBy) => {
    const result = desiredHeading - missBy;
    if (result < 0) {
      return 360 + result;
    }

    return result;
  };

  const correctHeading = (currentHeading, desiredHeading) => {
    const turnLeftDegrees = (currentHeading - desiredHeading < 0) ? (currentHeading - desiredHeading + 360) : currentHeading - desiredHeading;
    const turnRightDegrees = (desiredHeading - currentHeading < 0) ? (desiredHeading - currentHeading + 360) : desiredHeading - currentHeading;

    const leftTurn = turnLeftDegrees < turnRightDegrees;
    
    console.log("turn left:" + leftTurn);

    if (desiredHeading < 90 || desiredHeading > 270) {
      const overshoot = calculateOvershoot(desiredHeading);
      console.log("overshoot by:" + overshoot);

      if (leftTurn) {
        // left turn = desired heading - overshoot
        return compassSubtract(desiredHeading, overshoot);
      } else {
        // right turn = desired heading + overshoot
        return compassAdd(desiredHeading, overshoot);
      }
    } else {
      const undershoot = calculateUndershoot(desiredHeading);
      console.log("undershoot by:" + undershoot);

      if (leftTurn) {
        // left turn = desired heading + undershoot
        return compassAdd(desiredHeading, undershoot)
      } else {
        // right turn = desired heading - undershoot
        return compassSubtract(desiredHeading, undershoot);
      }
    }
  };

  const correct = correctHeading(props.currentHeading, props.desiredHeading);
  console.log("correct heading to turn:" + correct);

  return(
    <div>
      <div className="setup">
        <p>Current Heading: {props.currentHeading}</p>
        <p>Desired Heading: {props.desiredHeading}</p>
      </div>
      <div className="answer">
        <label>Turn to:</label>
        <input></input>
        <button>Turn this heading</button>
      </div>
    </div>
  );
};

export default Compass;
