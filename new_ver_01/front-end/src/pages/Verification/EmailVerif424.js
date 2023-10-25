import React, { useEffect } from 'react';
import setCookie from '../../utils/setCookie';
import { Link } from 'react-router-dom';
import { Button, Container, Typography, Box } from '@mui/material';
import axios from 'axios'; // Axios 추가

function EmailVerif2() {
  useEffect(() => {
    setCookie('prevPage', '/email/verif/424', 365);
  }, []);

  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="80vh"
      >
        <img
          src="/images/remaster/9.png"
          alt="Scanwich"
          width={145}
          height={145}
        />
        <Typography variant="h3" align="center" color="#28E070" fontWeight="bold" gutterBottom>
          Failed!
        </Typography>
        <Typography variant="body1" paragraph>
          회원 가입을 다시 진행해주세요!
        </Typography>

        {/* 메인 페이지로 이동하는 버튼 */}
        <Button
          variant="contained"
          color="1"
          fullWidth
          component={Link}
          to="/"
          sx={{ marginBottom: 2 }}
        >
          되돌아가기
        </Button>

        <Typography variant="body1" paragraph>
          Copyright © Bakery Corp. All Rights Reserved.
        </Typography>
      </Box>
    </Container>
  );
}

export default EmailVerif2;
