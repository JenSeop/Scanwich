import React, { useState, useEffect } from 'react';
import { CircularProgress, Button, Container, Typography, Paper } from '@mui/material';
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
  justifyContent: 'center',
  alignItems: 'center',
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

const Loading = ({ data }) => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [subMessage, setSubMessage] = useState('');

  useEffect(() => {
    switch (data.r_status) {
      case "false":
        setTitle('Loading');
        setMessage('분석이 진행중입니다.')
        setSubMessage('분석 완료 후 내용을 확인하실 수 있습니다.')
        break;
      case "true":
        setTitle('Loading');
        setMessage('데이터를 불러오고 있습니다.')
        setSubMessage('')
        break;
      default:
        setTitle('');
        break;
    }
  }, [data]);

  return (
    <>
    <Container maxWidth="md" style={containerStyle}>
      <Paper
        elevation={24}
        sx={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          textAlign: 'center',
          padding: '8vh',
          maxWidth: '450px',
          borderRadius: '36px',
        }}
      >
      <Container maxWidth="md" style={logoContainerStyle}>
          <CircularProgress size={190} thickness={4} style={circularProgressStyle} />
          <img
            src="/images/remaster/9.png"
            alt="로고"
            style={logoStyle}
          />
      </Container>
        <Typography variant="h2" fontWeight="bold" sx={{ color: '#2AF57B', marginTop: '18px', marginBottom: '18px', marginLeft: '-%' }}>{title}</Typography>
        <Typography variant="h6" fontWeight='bold' sx={{ marginBottom: '12px', color: 'white' }}>{message}</Typography>
        {data.r_id && data.u_id &&
          <Typography variant="body1" sx={{ color: '#2AF57B' }}>
            Report #{data.r_id} - {data.u_id}
          </Typography>
        }
        {data.f_path && data.f_path.length < 40 &&
          <Typography variant="body1" sx={{ marginBottom: '16px', color: '#2AF57B' }}>
            {data.f_path.substring(11,)}
          </Typography>
        }
        {data.f_path && data.f_path.length >= 40 &&
          <Typography variant="body1" sx={{ marginBottom: '16px', color: '#2AF57B' }}>
            {data.f_path.substring(11, 40)+'~.apk'}
          </Typography>
        }
        <Typography variant="body1" sx={{ marginBottom: '24px', color: 'white' }}>{subMessage}</Typography>
        {data.r_status == "false" &&
          <Button variant="contained" color="1" component={Link} to="/" sx={{ fontSize: '16px', padding: '10px 140px' }}>
            홈 페이지로 이동
          </Button>
        }
      </Paper>
    </Container>
    </>
  );
};

export default Loading;
