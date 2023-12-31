import React, {useEffect} from 'react';
import setCookie from '../../utils/setCookie';
import { Link } from 'react-router-dom';
import { Button, Container, Typography, Box } from '@mui/material';

function EmailVerif3() {
  useEffect(() => {
    setCookie('prevPage', '/email/verif/502', 365);
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
          src="/images/remaster/9.png"
          alt="Scanwich"
          width={145}
          height={145}
        />
        <Typography variant="h3" align="center" color="#28E070" fontWeight="bold" gutterBottom>
          Error!
        </Typography>
        <Typography variant="body1" paragraph>
        유효하지 않은 인증요청입니다.
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

export default EmailVerif3;
