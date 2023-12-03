import React, {useEffect, useState} from 'react';
import setCookie from '../utils/setCookie';
import { useNavigate, Link  } from 'react-router-dom';
import axios from 'axios';
import {
  Container,
  CssBaseline,
  TextField,
  Button,
  Typography,
  Grid,
} from '@mui/material';
import { getCookie } from '../utils/getAuth.js';
import SnackBar from '../components/MUI/SnackBar';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if(getCookie('u_token')) {
      navigate('/error/403')
    }
    setCookie('prevPage', '/login', 365);
  }, [])

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const userData = {
        u_id: username,
        password: password,
      };

      const apiUrl = '/client/user/jwtlogin/';
      const response = await axios.post(apiUrl, userData);
      const token = response.data.token;
      const u_id = response.data.u_id;
      const email = response.data.email;

      document.cookie = `u_token=${token}; path=/; expires=;`;
      document.cookie = `u_id=${u_id}; path=/; expires=;`
      document.cookie = `u_email=${email}; path=/; expires=;`
      navigate('/');
      window.location.reload();
    } catch (error) {
      openSnackbar();
      setUsername('');
      setPassword('');
    }
  };

  const openSnackbar = () => {
    setStatus(true);

    setTimeout(() => {
      setStatus(false);
    }, 3000);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '5vh',
        }}
      >
        <img
          src="/images/remaster/10.png"
          alt="Scanwich"
          width={120}
          height={120}
          style={{ marginRight: '10px' }}
          component={Link}
          to="/"
        />
        <Typography variant="h4" fontWeight="bold" color="#28E070">
          Scanwich에 로그인
        </Typography>
        <form onSubmit={handleSubmit} style={{ width: '100%', marginTop: '16px' }}>
          <TextField
            variant="standard"
            margin="normal"
            required
            fullWidth
            id="username"
            label="ID"
            name="username"
            autoComplete="username"
            value={username}
            onChange={handleUsernameChange}
            color="2"
          />
          <TextField
            variant="standard"
            margin="normal"
            required
            fullWidth
            name="password"
            label="PW"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={handlePasswordChange}
            color="2"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: -1 }}
            color="1"
          >
            로그인
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="outlined"
            sx={{ mt: 3, mb: -1 }}
            color="social"
          >
            카카오 아이디로 로그인
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="outlined"
            sx={{ mt: 3, mb: 2 }}
            color="social"
          >
            구글 아이디로 로그인
          </Button>
          <Grid container>
            <Grid item xs>
              <Button variant="text" color="3" component={Link} to={"/find/id/step1"}
              sx={{
                '&:hover': {
                  backgroundColor: 'transparent', 
                  textDecoration: 'none'}
              }}
              >아이디 찾기</Button>
            </Grid>
            <Grid item xs>
              <Button variant="text" color="3" component={Link} to={"/find/pw/step1"}
              sx={{
                '&:hover': {
                  backgroundColor: 'transparent', 
                  textDecoration: 'none'}
              }}
              >비밀번호 찾기</Button>
            </Grid>
            <Grid item>
              <Button variant="text" color="3" component={Link} to={"/register/step1"}
              sx={{
                fontWeight: 600,
                '&:hover': {
                  backgroundColor: 'transparent', 
                  textDecoration: 'none'}
                }}
              >회원가입</Button>
            </Grid>
          </Grid>
        </form>
      </div>
      {status && <SnackBar type={'error'} message={'아이디 또는 비밀번호를 잘못 입력했습니다.'}/>}
    </Container>
  );
}

export default Login;
