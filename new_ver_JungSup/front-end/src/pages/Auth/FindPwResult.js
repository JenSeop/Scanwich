import React, { useEffect, useState } from 'react';
import { Button, Container, TextField, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const FindPwResult = () => {
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
        입력한 이메일로 발송된 비밀번호 변경 링크를 확인해주세요.
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