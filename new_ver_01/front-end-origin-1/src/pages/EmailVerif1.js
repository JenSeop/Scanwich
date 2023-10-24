import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Typography, Box } from '@mui/material';

function EmailVerif1() {
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
          Success!
        </Typography>
        <Typography variant="body1" paragraph>
          이메일 인증이 완료되었습니다. 로그인을 진행해주세요!
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
          로그인 하기
        </Button>

        <Typography variant="body1" paragraph>
        요청하지 않은 이메일 인증은 무시해주세요.
        </Typography>
        <Typography variant="body1" paragraph>
        Copyright © Bakery Corp. All Rights Reserved.
        </Typography>
      </Box>
    </Container>
  );
}

export default EmailVerif1;
