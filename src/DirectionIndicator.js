import React from 'react';

const DirectionIndicator = props => {

  return(
    <div className="di">
      <div className="di__windrose">
        { [...Array(10)].map((_key, i) => <div className="di__mark" key={i + 1}></div>) }
      </div>

      <div className="di__arrow-container">
        <div className="di__arrow"></div>
      </div>
    </div>
  );
};

export default DirectionIndicator;
