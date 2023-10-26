import React from 'react';
import { Typography } from '@mui/material';

function ScoreBoard({vtScore, color, varCode}) {
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
    <Typography variant={varCode} color={colorCode}>
      {vtScore}
    </Typography>
  );
}

export default ScoreBoard;
