import React, {useEffect} from 'react';
import setCookie from '../utils/setCookie';
import { Link } from 'react-router-dom';
import { Button, Container, Typography, Box } from '@mui/material';

function EmailVerif2() {
  useEffect(() => {
    setCookie('prevPage', '/emailverif/2', 365);
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
        <Typography variant="h4" align="center" gutterBottom>
          Failed!
        </Typography>
        <Typography variant="body1" paragraph>
          이메일 인증을 다시 진행해주세요!
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
          인증 이메일 재발송
        </Button>

        <Typography variant="body1" paragraph>
        Copyright © Bakery Corp. All Rights Reserved.
        </Typography>
      </Box>
    </Container>
  );
}

export default EmailVerif2;
