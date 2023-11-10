import React from 'react';
import { Typography, Grid } from '@mui/material';

const shadowStyle = {
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
};

function ScoreBoard({vtScore, vtCount, color, varCode}) {
  let colorCode = '';

  switch (color) {
    case '1':
      colorCode = '#00ff00';
      break;
    case '2':
      colorCode = '#55ff00';
      break;
    case '3':
      colorCode = '#aaff00';
      break;
    case '4':
      colorCode = '#ffff00';
      break;
    case '5':
      colorCode = '#ffaa00';
      break;
    case '6':
      colorCode = '#ff5500';
      break;
    case '7':
      colorCode = '#ff0000';
      break;
    case '8':
      colorCode = '#ff0000';
      break;
    default:
      colorCode = 'black';
      break;
  }

  return (
    <>
      <Typography variant={varCode} color={colorCode} style={shadowStyle}>
        {vtScore}
      </Typography>
    </>
  );
}

export default ScoreBoard;
