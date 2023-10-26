import React, {useEffect} from 'react';
import setCookie from '../../utils/setCookie';
import { Link } from 'react-router-dom';
import { Button, Container, Typography, Box } from '@mui/material';

function EmailVerif201() {
  useEffect(() => {
    setCookie('prevPage', '/email/verif/201', 365);
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
        <Typography variant="h3" align="center" color="#28E070" fontWeight="bold" gutterBottom>
          Success!
        </Typography>
        <Typography variant="body1" paragraph>
          이메일 인증이 완료되었습니다.
        </Typography>
        <Typography variant="body1" paragraph>
          로그인을 진행해주세요!
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
        Copyright © Bakery Corp. All Rights Reserved.
        </Typography>
      </Box>
    </Container>
  );
}

export default EmailVerif201;
