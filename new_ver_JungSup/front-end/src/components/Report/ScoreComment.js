import React from 'react';
import { Typography } from '@mui/material';

const shadowStyle = {
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
};

function ScoreComment({score, varCode}) {
  let commentText = '';
  let commentColor = '';

  switch (score) {
    case '1':
      commentText = '안전 (Safe)';
      commentColor = '#00ff00';
      break;
    case '2':
      commentText = '매우 낮음 (Very Low)';
      commentColor = '#55ff00';
      break;
    case '3':
      commentText = '낮음 (Low)';
      commentColor = '#aaff00';
      break;
    case '4':
      commentText = '보통 (Moderate)';
      commentColor = '#ffff00';
      break;
    case '5':
      commentText = '주의 (Caution)';
      commentColor = '#ffaa00';
      break;
    case '6':
      commentText = '높음 (High)';
      commentColor = '#ff5500';
      break;
    case '7':
      commentText = '매우 높음 (Very High)';
      commentColor = '#ff0000';
      break;
    case '8':
      commentText = '위협 (Threat)';
      commentColor = '#ff0000';
      break;
    default:
      commentText = '오류 발생 (Error)';
      commentColor = 'black';
      break;
  }

  return (
    <Typography
      variant={varCode}
      color={commentColor}
      style={shadowStyle}
    >
      {commentText}
    </Typography>
  );
}

export default ScoreComment;
