import React from 'react';

const GradientStrokeRectangle = () => {
  const rectangleStyle = {
    position: 'absolute',
    left: '13.32%',
    right: '52.72%',
    top: '37.61%',
    bottom: '26.57%',
    borderImage: 'linear-gradient(0deg, rgba(253, 83, 146, 0.996) 0%, #F86F64 100%) 1',
    borderStyle: 'solid',
    borderWidth: '2px',
    borderRadius: '10px'
    
  };

  return <div style={rectangleStyle}></div>;
};

export default GradientStrokeRectangle;
