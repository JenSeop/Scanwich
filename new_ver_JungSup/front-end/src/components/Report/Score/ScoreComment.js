import React from 'react';
import { Typography } from '@mui/material';

const shadowStyle = {
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
};

function ScoreComment({score, color, varCode, shadow}) {
  let commentText = '';
  let commentColor = '';

  switch (score) {
    case '0':
      commentText = '안전 (Safe)';
      break;
    case '1':
      commentText = '정상 (Normal)';
      break;
    case '2':
      commentText = '매우 낮음 (Very Low)';
      break;
    case '3':
      commentText = '낮음 (Low)';
      break;
    case '4':
      commentText = '보통 (Moderate)';
      break;
    case '5':
      commentText = '주의 (Caution)';
      break;
    case '6':
      commentText = '높음 (High)';
      break;
    case '7':
      commentText = '매우 높음 (Very High)';
      break;
    case '8':
      commentText = '위험 (Danger)';
      break;
    default:
      commentText = '오류 발생 (Error)';
      break;
  }
  switch (color) {
    case '0':
      commentColor = '#00ff00';
      break;
    case '1':
      commentColor = '#00ff00';
      break;
    case '2':
      commentColor = '#55ff00';
      break;
    case '3':
      commentColor = '#aaff00';
      break;
    case '4':
      commentColor = '#ffff00';
      break;
    case '5':
      commentColor = '#ffaa00';
      break;
    case '6':
      commentColor = '#ff5500';
      break;
    case '7':
      commentColor = '#ff0000';
      break;
    case '8':
      commentColor = '#ff0000';
      break;
    default:
      commentColor = 'black';
      break;
  }

  return (
    <>
      {shadow == true &&
        <Typography
          variant={varCode}
          color={commentColor}
          style={shadowStyle}
        >
          {commentText}
        </Typography>
      }
      {shadow == false &&
        <Typography
          variant={varCode}
          color={commentColor}
          fontWeight='bold'
        >
          {commentText}
        </Typography>
      }
    </>
  );
}

export default ScoreComment;
