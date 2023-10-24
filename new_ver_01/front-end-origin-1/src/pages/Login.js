import React, { useState } from 'react';
import {
  Container,
  CssBaseline,
  TextField,
  Button,
  Typography,
  Avatar,
  Grid,
  Link,
  CardHeader,
  styled 
} from '@mui/material';

const CustomTextField = styled(TextField)(({ theme }) => ({
  backgroundColor: theme.palette[2].main, // 테마에서 정의한 두 번째 색상 사용
}));

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 여기에서 로그인 로직을 추가하세요.
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '64px',
        }}
      >
        <img
          src="images/MainLogo.png"
          alt="Scanwich"
          width={65}
          height={65}
          style={{ marginRight: '10px' }}
          component={Link}
          to="/"
        />
        <Typography component="h1" variant="h5">
          Scanwich에 로그인
        </Typography>
        <form onSubmit={handleSubmit} style={{ width: '100%', marginTop: '16px' }}>
          <TextField
            variant="standard"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
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
            label="Password"
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
              <Link href="#" variant="body1" underline='none' color="#373531">
                아이디 찾기
              </Link>
            </Grid>
            <Grid item xs>
              <Link href="#" variant="body1" underline='none' color="#373531">
                비밀번호 찾기
              </Link>
            </Grid>
            <Grid item>
              <Link href="/register/step1" variant="body1" underline='none' color="#373531">
                <strong>회원가입</strong>
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default Login;
