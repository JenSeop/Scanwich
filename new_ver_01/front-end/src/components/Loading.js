import React, { useState, useEffect } from 'react';
import { CircularProgress, Button, Container, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const containerStyle = {
  height: '80vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

const logoContainerStyle = {
  position: 'relative',
  width: '150px',
  height: '150px',
};

const logoStyle = {
  maxWidth: '100%',
  maxHeight: '100%',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

const circularProgressStyle = {
  position: 'absolute',
  top: '-15%',
  left: '-13%',
  transform: 'translate(-50%, -50%)',
  color: '#28E070',
};

const Loading = ({ status }) => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    switch (status) {
      case 'starting':
        setTitle('Starting');
        setMessage('분석을 시작했습니다.')
        break;
      case 'loading':
        setTitle('Loading');
        setMessage('분석이 진행중입니다.')
        break;
      default:
        setTitle('');
        break;
    }
  }, [status]);

  return (
    <>
    <Container maxWidth="md" style={containerStyle}>
      <div style={logoContainerStyle}>
        <CircularProgress size={190} thickness={4} style={circularProgressStyle} />
        <img
          src="/images/9.png"
          alt="로고"
          style={logoStyle}
        />
      </div>
      <Box
        sx={{
          textAlign: 'center',
          padding: '16px',
          maxWidth: '450px',
        }}
      >
        <Typography variant="h2" fontWeight="bold" sx={{ color: '#2AF57B', marginBottom: '8px' }}>{title}</Typography>
        <Typography variant="h6" sx={{ marginBottom: '16px' }}>{message}</Typography>
        <Typography variant="body1" sx={{ marginBottom: '16px' }}>
          <strong>( no: </strong>12345<strong> / file: </strong>test.apk <strong> / user: </strong> admin<strong> )</strong>
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: '16px' }}>분석이 완료되면 알림을 통해 알려드릴게요 :)</Typography>
      </Box>
        <Button variant="contained" color="1" component={Link} to="/" sx={{ fontSize: '16px', padding: '10px 140px' }}>
          홈 페이지로 이동
        </Button>
    </Container>
    </>
  );
};

export default Loading;
