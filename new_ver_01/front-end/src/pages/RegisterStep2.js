import React, { useEffect, useState } from 'react';
import { Button, Container, TextField, Typography, Box } from '@mui/material';
import { useNavigate  } from 'react-router-dom';
import { getCookie } from '../utils/getCookie.js';
import setCookie from '../utils/setCookie';
import { getCsrf } from '../utils/getCsrf';
import axios from 'axios';

function RegisterStep2() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [idError, setIdError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');
  const navigate = useNavigate();
  
  useEffect(() => {
    if(getCookie('prevPage')!="/register/step1") {
      navigate('/error/403')
    }
    setCookie('prevPage', '/register/step2', 365)
  }, [navigate])

  const validateId = (input) => {
    const idRegex = /^[a-zA-Z0-9_-]{5,20}$/;
    return idRegex.test(input);
  };

  const validatePassword = (input) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
    return passwordRegex.test(input);
  };

  const validateEmail = (input) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(input);
  };

  const handleIdChange = (e) => {
    const value = e.target.value;
    setId(value);
    if (!validateId(value)) {
      setIdError('아이디: 5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.');
    } else {
      setIdError('');
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    if (!validatePassword(value)) {
      setPasswordError('비밀번호: 8~16자의 영문 대/소문자, 숫자, 특수문자를 사용해 주세요.');
    } else {
      setPasswordError('');
    }
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const csrfToken = getCsrf();
      console.log(csrfToken)
      const userData = {
        u_id : id,
        u_email : email,
        password : password,
        csrfToken : csrfToken,
      };
      const apiUrl = '/api/user/register/';
      const response = await axios.post(apiUrl, userData);
      if (response.status === 200 || response.status === 201) {
        setCookie('prevPage', '/register/step2', 365)
        navigate('/register/step3');
      } else {
        navigate('/error/500')
      }
    } catch (error) {
      console.error('데이터 전송 중 오류 발생:', error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="80vh" // 화면 높이의 100%로 설정하여 화면 중앙에 내용을 배치합니다.
      >
        <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
          Hello
        </Typography>
        <Typography variant="h5" align="center" gutterBottom>
          새 계정을 만들고 Bakery의 일원이 되세요.
        </Typography>
        <form onSubmit={handleSubmit}>
        <Typography variant="h6" align="left" fontWeight="bold" gutterBottom>
        아이디
        </Typography>
        <Typography variant="body1" align="left" gutterBottom>
        5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.
        </Typography>
        <TextField
          label="ID"
          fullWidth
          required
          value={id}
          onChange={handleIdChange}
          error={!!idError}
          helperText={idError}
          sx={{ marginBottom: 3 }}
          color="2"
          variant="standard"
        />
        <Typography variant="h6" align="left" fontWeight="bold" gutterBottom>
        비밀번호
        </Typography>
        <Typography variant="body1" align="left" gutterBottom>
        8~16자의 영문 대/소문자, 숫자, 특수문자를 사용해 주세요.
        </Typography>
        <TextField
          label="비밀번호"
          type="password"
          fullWidth
          required
          value={password}
          onChange={handlePasswordChange}
          error={!!passwordError}
          helperText={passwordError}
          sx={{ marginBottom: 3 }}
          color="2"
          variant="standard"
        />
        <Typography variant="h6" align="left" fontWeight="bold" gutterBottom>
        이메일
        </Typography>
        <Typography variant="body1" align="left" gutterBottom>
        인증에 사용될 이메일 주소를 입력해주세요.
        </Typography>
        <TextField
          label="이메일"
          type="email"
          fullWidth
          required
          value={email}
          onChange={handleEmailChange}
          error={!!emailError}
          helperText={emailError}
          sx={{ marginBottom: 3 }}
          color="2"
          variant="standard"
        />
        <Button
            type="submit"
            variant="contained"
            color="1"
            fullWidth
            disabled={!id || !password || !email || idError || passwordError || emailError}
            onClick={handleSubmit}
          >
            가입하기
          </Button>
        </form>
      </Box>
    </Container>
  );
}

export default RegisterStep2;