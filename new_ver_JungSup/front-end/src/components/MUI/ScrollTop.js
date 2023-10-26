import React from 'react';
import { IconButton } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

function ScrollToTopButton() {
  // 스크롤 업 버튼을 클릭할 때 호출되는 함수
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <IconButton
      onClick={scrollToTop}
      style={{
        position: 'fixed', // 화면 상단에 고정
        bottom: '20px',
        right: '20px',
        zIndex: 1000, // 다른 요소보다 우선시
        backgroundColor: '#373531', // 원하는 배경색 설정
        borderRadius: '50%', // 원형 버튼으로 만들기
        padding: '10px', // 내용과 버튼 사이 여백 조절
        width: '40px', // 버튼의 너비 조절
        height: '40px', // 버튼의 높이 조절
        border: '1px solid #000',
      }}
    >
      <ArrowUpwardIcon style={{ color: '#FFF5DC' }} />
    </IconButton>
  );
}

export default ScrollToTopButton;
