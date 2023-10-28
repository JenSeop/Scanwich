import React, { useEffect, useState } from 'react';
import { Button, Container, TextField, Typography, Box } from '@mui/material';
import { useNavigate  } from 'react-router-dom';
import SnackBar from '../../components/MUI/SnackBar';
import { Link } from 'react-router-dom';
import setCookie from '../../utils/setCookie.js';
import { getCsrf } from '../../utils/getCsrf.js';
import axios from 'axios';

const FindPw = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [status, setStatus] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const csrfToken = getCsrf();
      const userData = {
        u_email : email,
        csrfToken : csrfToken,
      };
      const apiUrl = '/api/user/find_pw/';
      const response = await axios.post(apiUrl, userData);

      if (response.status === 200 || response.status === 201) {
        setCookie('prevPage', '/find/pw/step1', 365)
        navigate('/find/pw/step2');
      } else {
        navigate('/error/500')
      }
    } catch (error) {
      openSnackbar();
      setEmail('');
    }
  };

  const openSnackbar = () => {
    setStatus(true);

    setTimeout(() => {
      setStatus(false);
    }, 3000);
  };

  const handleSubmit2 = async (e) => {
    e.preventDefault();

  }

  const validateEmail = (input) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(input);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (!validateEmail(value)) {
      setEmailError('올바른 이메일 형식을 입력하세요.');
    } else {
      setEmailError('');
    }
  };

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
        비밀번호를 잊으셨나요?
      </Typography>
      <Typography variant="body1" align="center" fontWeight="bold" color="#373531" gutterBottom>
        이메일을 통해 본인 인증을 진행해주세요.
      </Typography>
      <form style={{
        marginTop: '4vh',
      }}>
      <Typography variant="h6" align="left" fontWeight="bold" gutterBottom>
        이메일
        </Typography>
        <Typography variant="body1" align="left" gutterBottom>
          임시 비밀번호 발급 이메일 주소를 입력해주세요.
        </Typography>
        <TextField
          label="EMAIL"
          type="email"
          fullWidth
          required
          sx={{ marginBottom: 3 }}
          color="2"
          variant="standard"
          value={email}
          onChange={handleEmailChange}
          error={!!emailError}
          helperText={emailError}
        />
        <Button
            type="submit"
            variant="contained"
            color="1"
            fullWidth
            onClick={handleSubmit}
          >
            다음
          </Button>
        </form>
      </Box>
      {status && <SnackBar type={'error'} message={'입력한 이메일을 다시 확인해주세요.'}/>}
    </Container>
  );
};

export default FindPw;