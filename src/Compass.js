import React, { useEffect, useState } from 'react';
import styleNormalizer from 'react-style-normalizer';

import { delay } from './delay';
import { standardRateTurnTime } from './overshoot';

import { Button } from 'react-bootstrap';

const Compass = props => {
  const [heading, setHeading] = useState(props.heading);
  const [rotateTime, setRotateTime] = useState(props.rotateTime); // how long the compass takes to rotate

  useEffect(() => {
    setHeading(props.heading);
  }, [props.heading]);

  useEffect(() => {
    console.log('reset rotate time:' + props.rotateTime);
    setRotateTime(props.rotateTime);
  }, [props.rotateTime]);

  // when a heading is chosen, rotate to the under/overflow, then to the result heading
  useEffect(() => {
    const applyHeading = async () => {
      if (props.chosenHeading && props.resultHeading) {
        const turnTime = Math.ceil(standardRateTurnTime(props.heading, props.resultHeading) / 3);
        console.log('Turn time of:' + turnTime + ' seconds');
        setRotateTime(turnTime);

        console.log('Set heading to chosen heading' + props.chosenHeading);
        setHeading(props.chosenHeading);

        console.log('Should be waiting for' + turnTime + ' seconds');

        await delay(turnTime * 1000);

        console.log('Set heading to result heading ' + props.resultHeading);
        setRotateTime(props.rotateTime);
        setHeading(props.resultHeading);

        console.log('Set heading to result heading:' + props.resultHeading);
      }
    };

    applyHeading();
  }, [props.chosenHeading, props.resultHeading]);

  return(
    <div className="compass">
      <div className="compass__inner">
        <div
          className="compass__ticker"
          style={styleNormalizer(
            {
              transform: `rotate(-${heading}deg)`,
              transition: `transform ${rotateTime}.0s ease`
            }
          )}
        >
          <div>
            { [...Array(18)].map((_key, i) => <div className="compass__mark--lg" key={`compass-lg${i + 1}`}></div>) }
          </div>
          <div>
            { [...Array(18)].map((_key, i) => <div className="compass__mark--sm" key={`compass-sm${i + 1}`}></div>) }
          </div>
          <div>
            {
              ["S", "21", "24", "W", "30", "33", "N", "3", "6", "E", "12", "15"].map((value, index) =>
                <div className="compass__mark--tag" key={`compass-tag${index + 1}`}>
                  <div className="compass__mark--tag-inner">
                    {value}
                  </div>
                </div>
              )
            }
          </div>
        </div>
        <div className="compass_centre"></div>
      </div>
    </div>
  )
};

export default Compass;