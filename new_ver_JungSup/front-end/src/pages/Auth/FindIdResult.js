import React, { useEffect } from 'react';
import { useNavigate  } from 'react-router-dom';
import setCookie from '../../utils/setCookie';
import { getCookie } from '../../utils/getAuth.js';
import { Button, Container, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const FindIdResult = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if(getCookie('u_token')) {
      navigate('/error/403')
    }
    if(getCookie('prevPage')!="/find/id/step1") {
      navigate('/error/403')
    }
    setCookie('prevPage', '/find/id/step2', 365);
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
        아이디 찾기가 완료 :)
      </Typography>
      <Typography variant="body1" align="center" fontWeight="bold" color="#373531" gutterBottom>
        입력한 이메일로 발송된 아이디를 확인해주세요.
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
        <Button
          variant="outlined"
          color="2"
          fullWidth
          component={Link}
          to="/find/pw/step1"
          style={{
            width: '45vh',
            marginTop: '2vh',
          }}
        >
          비밀번호 찾기
        </Button>
      </Box>
    </Container>
  );
};

export default FindIdResult;