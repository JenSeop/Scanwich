import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Typography, Box } from '@mui/material';

function RegisterStep3() {
  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="80vh" // 화면 높이의 100%로 설정하여 화면 중앙에 내용을 배치합니다.
      >
        <Typography variant="h4" align="center" gutterBottom>
          Welcome!
        </Typography>
        <Typography variant="body1" paragraph>
          가입하신 이메일을 통해 인증을 완료해주세요.
        </Typography>

        {/* 메인 페이지로 이동하는 버튼 */}
        <Button
          variant="contained"
          color="1"
          fullWidth
          component={Link}
          to="/login"
        >
          로그인하기
        </Button>
      </Box>
    </Container>
  );
}

export default RegisterStep3;
