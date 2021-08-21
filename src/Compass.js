import React from 'react';
import styleNormalizer from 'react-style-normalizer';

const Compass = props => {
  return(
    <div className="compass">
      <div className="compass__inner">
        <div
          className="compass__ticker"
          style={styleNormalizer({ transform: `rotate(-${props.heading}deg)`})}
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