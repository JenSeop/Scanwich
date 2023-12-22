import React, { useEffect, useState } from 'react';
import { Button, Container, Typography, Box } from '@mui/material';
import { useNavigate  } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getCookie } from '../../utils/getAuth.js';
import setCookie from '../../utils/setCookie.js';

const FindPwResult = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if(getCookie('u_token')) {
      navigate('/error/403')
    }
    if(getCookie('prevPage')!="/find/pw/step1") {
      navigate('/error/403')
    }
    setCookie('prevPage', '/find/pw/step2', 365);
  }, [])

  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="80vh"
        style={{
          marginTop: '-2vh',
        }}
      >
      <Typography variant="h4" align="center" fontWeight="bold" color="#28E070" gutterBottom>
        비밀번호 찾기 완료 :)
      </Typography>
      <Typography variant="body1" align="center" fontWeight="bold" color="#373531" gutterBottom>
        이메일로 발송된 임시 비밀번호를 확인해주세요.
      </Typography>
      <Button
          variant="contained"
          color="1"
          fullWidth
          component={Link}
          to="/login"
          style={{
            width: '45vh',
            marginTop: '5vh',
          }}
        >
          로그인
        </Button>
      </Box>
    </Container>
  );
};

export default FindPwResult;