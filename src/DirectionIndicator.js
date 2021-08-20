import React from 'react';
import styleNormalizer from 'react-style-normalizer';

const DirectionIndicator = props => {
  const computeBugHeading = (heading, buggedHeading) => {
    if (heading > buggedHeading) {
      return heading - buggedHeading;
    } else {
      return 360 + heading - buggedHeading;
    }
  };

  // TODO: reuse scss colours
  const checkArrowColour = () => {
    if (props.fail) {
      return "#BE4D45";
    }
    if (props.success) {
      return "#4fd128";
    }
    return "#e0841b";
  };

  const arrowColour = checkArrowColour();
  const arrowStyle = {
    backgroundColor: arrowColour
  };

  const buggedHeadingRotation = computeBugHeading(props.heading, props.buggedHeading);
  console.log("rotate bug" + buggedHeadingRotation);

  return(
    <div className="di">
      <div
        className="di__windrose"
        style={styleNormalizer({ transform: `rotate(-${props.heading}deg)` })}>
        <div>
          { [...Array(18)].map((_key, i) => <div className="di__mark--lg" key={i + 1}></div>) }
        </div>
        <div>
          { [...Array(18)].map((_key, j) => <div className="di__mark--sm" key={j + 1}></div>) }
        </div>
        <div>
          {
            ["N", "3", "6", "E", "12", "15", "S", "21", "24", "W", "30", "33"].map((value, index) =>
              <div className="di__mark--tag">{value}</div>
            )
          }
        </div>
      </div>

      <div className="di__arrow-container">
        <div className="di__arrow" style={arrowStyle}></div>
      </div>

      <div className="di__bug-container"
        style={styleNormalizer({ transform: `rotate(-${buggedHeadingRotation}deg)` })}>
        <div className="di__bug"></div>
      </div>
    </div>
  );
};

export default DirectionIndicator;
