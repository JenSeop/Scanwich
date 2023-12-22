import React from 'react';
import { Typography, Tooltip } from '@mui/material';

const shadowStyle = {
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
};

function ScoreComment({score, color, varCode, shadow}) {
  let commentText = '';
  let commentColor = '';
  let sub = '';

  switch (score) {
    case '0':
      commentText = '안전 (Safe)';
      sub = '파일이 매우 안전합니다. 별도의 조치가 필요 없습니다.';
      break;
    case '1':
      commentText = '정상 (Normal)';
      sub = '파일이 안전합니다. 사용해도 큰 문제가 없습니다.';
      break;
    case '2':
      commentText = '매우 낮음 (Very Low)';
      sub = '파일이 정품인지 확인하고, 신뢰할 수 있는 출처에서 다운로드 하세요.';
      break;
    case '3':
      commentText = '낮음 (Low)';
      sub = '파일이 주의가 필요합니다. 사용 전에 보안 소프트웨어를 업데이트 하고 파일을 정밀하게 검토하세요.';
      break;
    case '4':
      commentText = '보통 (Moderate)';
      sub = '파일에 상당한 위험 요소가 있을 수 있습니다. 파일을 실행하기 전에 시스템 백업을 수행하고, 출처를 신중하게 판단하세요.';
      break;
    case '5':
      commentText = '주의 (Caution)';
      sub = ' 파일이 매우 위험할 수 있습니다. 사용에 극도로 주의가 필요합니다. 파일을 삭제하고, 시스템을 복원하는 것이 안전합니다.';
      break;
    case '6':
      commentText = '높음 (High)';
      sub = '파일이 심각한 악성 행위를 포함할 수 있습니다. 파일을 즉시 삭제하고, 시스템을 스캔하세요.';
      break;
    case '7':
      commentText = '매우 높음 (Very High)';
      sub = '파일이 매우 위험하며, 즉시 사용을 중지하고 삭제하는 것이 안전합니다. 시스템을 재설치하고, 보안 전문가와 상담하세요.';
      break;
    case '8':
      commentText = '위험 (Danger)';
      sub = '파일이 극도로 위험하며, 사용을 절대로 피하는 것이 안전합니다. 즉시 파일을 삭제하고, 시스템을 완전히 재설치하세요. 보안 전문가와 긴밀한 협의가 필요합니다.';
      break;
    default:
      commentText = '오류 발생 (Error)';
      sub = '오류가 발생하였습니다.';
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
    <Tooltip title={sub} followCursor>
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
    </Tooltip>
  );
}

export default ScoreComment;
