import React from 'react';
import styleNormalizer from 'react-style-normalizer';

const Compass = props => {
  return(
    <div className="compass">
      <div className="compass__inner">
        <div className="compass__ticker"></div>
        <div className="compass_centre"></div>
      </div>
    </div>
  )
};

export default Compass;