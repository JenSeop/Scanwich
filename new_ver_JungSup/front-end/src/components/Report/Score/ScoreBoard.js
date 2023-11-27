import React from 'react';
import { Typography } from '@mui/material';

const shadowStyle = {
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
};

function ScoreBoard({vtScore, vtCount, color, varCode, shadow}) {
  let colorCode = '';

  switch (color) {
    case '0':
      colorCode = '#00ff00';
      break;
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
      {shadow == true &&
        <Typography variant={varCode} color={colorCode} style={shadowStyle}>
          {vtScore}
        </Typography>
      }
      {shadow == false &&
        <Typography variant={varCode} color={colorCode} fontWeight='bold'>
          {vtScore}
        </Typography>
      }
    </>
  );
}

export default ScoreBoard;
