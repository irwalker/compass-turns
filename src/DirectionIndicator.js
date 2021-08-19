import React from 'react';

const DirectionIndicator = props => {

  return(
    <div className="di">
      <div className="di__windrose">
        <div>
          { [...Array(18)].map((_key, i) => <div className="di__mark--lg" key={i + 1}></div>) }
        </div>
        <div>
          { [...Array(18)].map((_key, j) => <div className="di__mark--sm" key={j + 1}></div>) }
        </div>
        <div>

        </div>
      </div>

      <div className="di__arrow-container">
        <div className="di__arrow"></div>
      </div>
    </div>
  );
};

export default DirectionIndicator;
