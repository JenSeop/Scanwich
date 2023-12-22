import React, { useEffect } from 'react';
import { useNavigate  } from 'react-router-dom';
import setCookie from '../../utils/setCookie';
import { getCookie } from '../../utils/getAuth.js';
import { Link } from 'react-router-dom';
import { Button, Container, Typography, Box } from '@mui/material';

function RegisterStep3() {
  const navigate = useNavigate();

  useEffect(() => {
    if(getCookie('u_token')) {
      navigate('/error/403')
    }
    if(getCookie('prevPage')!="/register/step2") {
      navigate('/error/403')
    }
    setCookie('prevPage', '/register/step3', 365);
  }, [])

  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="80vh" // 화면 높이의 100%로 설정하여 화면 중앙에 내용을 배치합니다.
      >
        <img
          src="/images/remaster/10.png"
          alt="Scanwich"
          width={200}
          height={200}
          style={{
            marginRight: '6vh',
            marginBottom: '-2vh'
          }}
        />
        <Typography variant="h3" align="center" fontWeight="bold" gutterBottom color='secondary'>
          Welcome!
        </Typography>
        <Typography variant="h6" paragraph>
          가입하신 이메일을 통해 인증을 완료해주세요.
        </Typography>

        {/* 메인 페이지로 이동하는 버튼 */}
        <Button
          variant="contained"
          color="1"
          fullWidth
          component={Link}
          to="/login"
          sx={{ marginBottom: 2 }}
        >
          로그인하기
        </Button>
        <Typography variant="body1" paragraph>
          Copyright © Bakery Corp. All Rights Reserved.
        </Typography>
      </Box>
    </Container>
  );
}

export default RegisterStep3;
