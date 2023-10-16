import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Typography, Box } from '@mui/material';

function EmailVerif3() {
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
          Error!
        </Typography>
        <Typography variant="body1" paragraph>
        유효하지 않은 인증요청입니다.
        </Typography>

        {/* 메인 페이지로 이동하는 버튼 */}
        <Button
          variant="contained"
          color="primary"
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

export default EmailVerif3;
