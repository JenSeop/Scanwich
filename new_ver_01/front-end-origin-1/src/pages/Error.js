import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

// 에러 코드에 따른 메시지 정의
const errorMessages = {
  403: {
    title: 'Forbidden',
    message: '액세스 권한이 없습니다 :(',
    information: '403 Error, Access Forbidden'
  },
  404: {
    title: 'Not Found',
    message: '페이지를 찾을 수 없습니다 :(',
    information: '404 Error, Page Not Found'
  },
  503: {
    title: 'Unavailable',
    message: '접속자가 많습니다 :(',
    information: '503 Error, Service Unavailable'
  },
  504: {
    title: 'Timeout',
    message: '요청 시간을 초과했습니다 :(',
    information: '504 Error, Gateway Timeout'
  },
};

const Error = ({ errorCode }) => {
  // 에러 코드에 해당하는 메시지 객체 가져오기
  let errorMessage = errorMessages[errorCode];

  // 에러 메시지가 없는 경우 기본 메시지 표시
  if (!errorMessage) {
    errorMessage = {
      title: 'Unknown Error',
      message: '알 수 없는 오류가 발생했습니다.',
    };
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '80vh', // 화면 높이에 맞게 박스 높이 설정
        backgroundColor: '#yourBackgroundColor', // 원하는 배경색 설정
      }}
    >
      <Box
        sx={{
          textAlign: 'left',
          padding: '16px',
          maxWidth: '450px', // 박스의 최대 너비 설정
        }}
      >
        <Typography variant="h1" fontWeight="bold" sx={{ color: '#2AF57B', textAlign: 'left', marginBottom: '8px' }}>Error!</Typography>
        <Typography variant="h4" sx={{ marginBottom: '16px' }}>{errorMessage.message}</Typography>
        <Typography variant="body1" sx={{ marginBottom: '16px' }}>{errorMessage.information}</Typography>
        <Typography variant="body1" sx={{ marginBottom: '16px' }}>홈 페이지로 돌아가 다시 시도해주세요.</Typography>
      </Box>
        <Button variant="contained" color="1" component={Link} to="/" sx={{ fontSize: '16px', padding: '10px 140px' }}>
          홈 페이지로 이동
        </Button>
    </Box>
  );
};

export default Error;
