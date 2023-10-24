import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../index.css';
import { Box, TextField, Button, createTheme, ThemeProvider } from '@mui/material';
import axios from 'axios';

import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

const Home = () => {
  
  let [errorMessages, setErrorMessages] = useState('');

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  /* submit */
  const greenLogin = async () => {
    try {
      // CSRF 토큰을 쿠키에서 가져옴
      const csrfToken = getCookie('csrftoken');
  
      // Axios 요청에서 CSRF 토큰을 헤더에 포함
      const response = await axios.post('/api/user/jwtlogin/', {
        u_id: username,
        password: password,
      }, {
        headers: {
          'X-CSRFToken': csrfToken,
        },
      });
  
      // 로그인 성공한 경우 서버에서 토큰을 받음
      const token = response.data.token;
      const u_id = username;
  
      // 토큰을 쿠키에 저장
      document.cookie = `token=${token}, u_id=${u_id}; path=/; secure; SameSite=Strict`;
  
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  // CSRF 토큰을 가져오는 함수
  function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        // 이름이 csrftoken인 쿠키를 찾아 값을 가져옴
        if (cookie.substring(0, name.length + 1) === name + '=') {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }






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



  /* popover */
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  /* -------- */
  



  return (

<div className='510792' style={style_510792}>
  <span className='Hello'>Welcome to Bakery!</span>
  <span className='NewAccount' style={{
    color: '#FF4F4F'
  }}>​ {errorMessages}</span>
  
  <div style={innerBox}>
  <span className='Text1'>아이디 또는 이메일</span>
  <ThemeProvider theme={customUnderline}>
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
    // label="ID"
    variant="standard"
    value={text}
    onChange={handleTextChange}
    InputProps={{
      style: {
        width: 350,
        borderBottom: '2px solid #FFF5DC'
      },
    }}
  />
  </Box>
  </ThemeProvider>

  <span className='Text1'>비밀번호</span>
  <ThemeProvider theme={customUnderline}>
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
    type="password"
    autoComplete="current-password"
    variant="standard"
    value={password}
    onChange={handlePasswordChange}
    InputProps={{
      style: {
        width: 350,
        borderBottom: '2px solid #FFF5DC'
      },
    }}
  />
  </Box>
  </ThemeProvider>

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

  <ThemeProvider theme={customUnderline}>
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
          
  <ThemeProvider theme={customUnderline}>
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
  justifyContent: 'space-between',
  color: '#FFF5DC'
}}>
  <Link to="/api/user/findid" style={{ textDecoration: 'none', color: 'black' }}><div style={{
    color: '#FFF5DC'
  }}>아이디 찾기</div></Link>/
  <div style={{
    color: '#FFF5DC',
    textDecoration: 'line-through'
  }}>
    
    
    
    <Typography
        aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        비밀번호 찾기
      </Typography>
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: 'none',
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography sx={{ p: 1 }}>공사중.</Typography>
      </Popover>
    
    
    
    
    
    
    </div>/
  <Link to="/register" style={{ textDecoration: 'none', color: 'black' }}><div style={{
    color: '#FFF5DC'
  }}>회원가입</div></Link>
</div>





{/* 우측상단 로그인 */}
<ThemeProvider theme={logIn}>
  <Button variant="outlined" color='primary' style={{
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
  // backgroundColor: 'White',
  display: 'flex',
  flexDirection: 'column',
  // justifyContent: 'center',
  // alignItems: 'center',
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

const customUnderline = createTheme({
  palette: {
    primary: {
      main: '#FFF5DC',
    },
    secondary: {
      main: '#1dab56',
    },
    error: {
      main: '#FFF5DC',
      light: 'rgb(255, 247, 227)',
      dark: 'rgb(178, 171, 154)'
    },
    text: {
      primary: '#fff5dc',
    },
  },
});