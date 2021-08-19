import Canvas from './Canvas';

const CompassCanvas = props => {
  const height = 300;
  const width = 400;

  const draw = context => {
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = 70;

    context.beginPath();
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    context.fillStyle = 'white';
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = '#003300';
    context.stroke();
  };

  return(
    <Canvas draw={draw} height={height} width={width} />
  );
};

CompassCanvas.propTypes = {
  
};

export default CompassCanvas;
