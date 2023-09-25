import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../index.css';
import { Box, TextField, Button, createTheme, ThemeProvider } from '@mui/material';
import axios from 'axios';

const Home = () => {
  
  let [errorMessages, setErrorMessages] = useState('');

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  /* submit */
  const greenLogin = async () => {
    try {
      const response = await axios.post('http://server.com/api/login/', {
        u_id: username,
        password: password,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };






  /* regex */
  const [text, setText] = useState('');

  const handleTextChange = (event) => {
    const newValue = event.target.value;
    const newValuename = event.target.value;

    setUsername(newValuename);
    console.log(newValuename);
    if (donUsekor(newValue)) {
      setErrorMessages('한글은 입력할 수 없습니다.');
    } else {
      setErrorMessages('');
      if (/^[A-Za-z0-9@.\-_]*$/.test(newValue) || newValue === '') {
        setText(newValue);
      }
    }
  };

  const donUsekor = (value) => {
    const koreanRegex = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
    return koreanRegex.test(value);
  };

  /* PASSWORD */
  const handlePasswordChange = (event) => {
    const newValue1 = event.target.value;
    setPassword(newValue1);
    console.log(newValue1);
  };


  return (

<div className='510792' style={style_510792}>
  <span className='Hello'>Welcome to Bakery!</span>
  <span className='NewAccount' style={{
    color: 'red'
  }}>​ {errorMessages}</span>
  
  <div style={innerBox}>
  <span className='Text1'>아이디 또는 이메일</span>
  <Box
      component="form"
      sx={{
        '& > :not(style)': { mt: 1, width: 350 },
      }}
      noValidate
      autoComplete="off"
  >
  <TextField
    id="standard-required"
    label="ID"
    variant="standard"
    value={text}
    onChange={handleTextChange}
  />
  </Box>


  <span className='Text1'>비밀번호</span>
  <Box
    component="form"
    sx={{
      '& > :not(style)': { mt: 1, width: 350 },
    }}
    noValidate
    autoComplete="off"
  >
  <TextField
    id="standard-password-input"
    label="Password"
    type="password"
    autoComplete="current-password"
    variant="standard"
    value={password}
    onChange={handlePasswordChange}
  />
  </Box>


  <ThemeProvider theme={logIn}>
    <Button variant="contained" color='primary' style={{
      // width: 330,
      height: 50,
      fontSize: 20,
      left: 0,
      position: 'relative',
      top: 5,
      right:30,
      marginTop: 30,
      marginBottom:10
    }} onClick={greenLogin}>로그인
    </Button>
  </ThemeProvider>

  <ThemeProvider theme={GlogIn}>
    <Button variant="outlined" color='primary' style={{
      // width: 330,
      height: 50,
      fontSize: 20,
      left: 0,
      position: 'relative',
      top: 5,
      right:30,
      marginBottom:10
    }}> <img className="GoogleLogo"  src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FPYhoF%2Fbtst5s70W5x%2Fmcwrp98gbLeCYMo1IfqGHk%2Fimg.png" alt='' style={{
          width:25,
          height:25,
          top: 12,
          left:20,
          position: 'absolute'
        }}/>구글 계정으로 로그인</Button>
  </ThemeProvider>
          
  <ThemeProvider theme={GlogIn}>
    <Button variant="outlined" color='primary' style={{
      // width: 330,
      height: 50,
      fontSize: 20,
      left: 0,
      position: 'relative',
      top: 5,
      right:30,
      marginBottom:30
    }}> <img className="GoogleLogo"  src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FNnJOO%2Fbtst0xoiHb2%2FGEp7Rhrx83TRzRmP4G51zk%2Fimg.png" alt='' style={{
          width:25,
          height:25,
          top: 12,
          left:20,
          position: 'absolute'
        }}/>카카오 계정으로 로그인</Button>
  </ThemeProvider>

<div style={{
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between'
}}>
  <Link to="/findid" style={{ textDecoration: 'none', color: 'black' }}><div>아이디 찾기</div></Link>/
  <Link to="/findpw" style={{ textDecoration: 'none', color: 'black' }}><div>비밀번호 찾기</div></Link>/
  <Link to="/register" style={{ textDecoration: 'none', color: 'black' }}><div>회원가입</div></Link>
</div>


{/* 우측상단 로그인 */}
<ThemeProvider theme={logIn}>
  <Button variant="contained" color='primary' style={{
    width: 113,
    height: 48,
    fontSize: 20,
    borderRadius: 10,
    position: 'fixed',
    top: 16,
    zIndex:100,
    right:30,
  }}>로그인</Button>
</ThemeProvider>

</div>
</div>
);};

export default Home;

const style_510792 = {
  width: '420px',
  height: '592px',
  borderRadius: '40px',
  border: '1px solid black',
  margin: '0px auto',
  padding: '55px 37px',
  backgroundColor: 'White',
  display: 'flex',
  flexDirection: 'column'
}

const innerBox = {
  width: '350px',
  height: '582px',
  borderRadius: '40px',
  border: '0px solid black',
  margin: '0px auto',
  display: 'flex',
  flexDirection: 'column'
}

const logIn = createTheme({
  palette: {
    primary: {
      main: '#2AF57B',
    },
  },
});

const GlogIn = createTheme({
  palette: {
    primary: {
      main: '#CE881F', // #EDC892
    },
  },
});
