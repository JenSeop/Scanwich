import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, TextField, Button, createTheme, ThemeProvider, Popover, Typography } from '@mui/material';
import axios from 'axios';
import '../index.css'
import setCookie from '../utils1/setCookie';
// import getCsrf from '../utils1/getCsrf';


const Home = () => {



  const navigate = useNavigate();
  const use_navigate = (path) => {
    navigate(path);
  }

  let [errorMessages, setErrorMessages] = useState('');

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
                       
  useEffect(() => {
    setCookie('prevPage', '/', { expires: 365 });
  }, [navigate])





  /* submit */
  const greenLogin= async()=> {
    try {
      // const csrfToken = getCsrf();
      // console.log(csrfToken);  
      const response= await axios.post('/api/user/jwtlogin', {
        u_id: username,
        password: password
      }, {
        // headers: {
        //   'X-CSRFToken': csrfToken
        // }
      })
      console.log(response.data);
    }
    catch (error) {
      console.log(error);
    }
  }




  /* id, email */
  const handleTextChange = (event) => {
    const input = event.target.value
    setUsername(input);

    const donUsekor = (value) => {
      const koreanRegex = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
      return koreanRegex.test(value);
    };

    if (donUsekor(input)) {
      setErrorMessages('한글은 입력할 수 없습니다');
    } else {
      if (/^[A-Za-z0-9@.\-_]*$/.test(input) || input === '') setUsername(input);
      setErrorMessages('');
    }
  };




  /* PASSWORD */
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
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
<>
<div className='510792' style={style_510792}>
  <span className='Hello'>Welcome to Bakery!</span>
  <span className='NewAccount errorMsg'>​ {errorMessages}</span>
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
          name="u_id"
          variant="standard"
          value={username}
          onChange={handleTextChange}
          InputProps={{
            style: {
              width: 350,
              borderBottom: '2px solid #FFF5DC'
            },
          }}
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
          name="password"
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


  {/* 초록색로그인버튼 */}
  <ThemeProvider theme={logIn}>
    <Button variant="contained" 
            color='primary' 
            style={buttonStyle} 
            onClick={greenLogin}>
      로그인
    </Button>
  </ThemeProvider>



  <ThemeProvider theme={customUnderline}>
    <Button variant="outlined" 
            color='primary' 
            style={buttonStyle1}> 
      <img className="GoogleLogo"  src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FPYhoF%2Fbtst5s70W5x%2Fmcwrp98gbLeCYMo1IfqGHk%2Fimg.png" alt='' style={{
          width:25,
          height:25,
          top: 12,
          left:20,
          position: 'absolute'
        }}/>
      구글 계정으로 로그인
    </Button>
  
    <Button variant="outlined" 
            color='primary' 
            style={buttonStyle2}> 
      <img className="GoogleLogo"  src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FNnJOO%2Fbtst0xoiHb2%2FGEp7Rhrx83TRzRmP4G51zk%2Fimg.png" alt='' style={{
          width:25,
          height:25,
          top: 12,
          left:20,
          position: 'absolute'
        }}/>
      카카오 계정으로 로그인
    </Button>
  </ThemeProvider>


<div style={bottomBtn}>
  <div className='fff5dc' onClick={()=> use_navigate('/findid')}>아이디 찾기</div>/
    <Typography
        aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
        onClick={()=>use_navigate('/findpw')}
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
        <Typography sx={{ p: 1 }}>공사완료</Typography>
      </Popover>    
    
  /<div onClick={()=> use_navigate('/register')}>회원가입</div>
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
    </>
  );
};
export default Home;

const style_510792 = {
  width: '420px',
  height: '592px',
  borderRadius: '40px',
  // border: '1px solid black',
  margin: '0px auto',
  padding: '55px 37px',
  display: 'flex',
  flexDirection: 'column',
}

const buttonStyle={
  height: 50,
  fontSize: 20,
  left: 0,
  position: 'relative',
  top: 5,
  right:30,
  marginTop: 30,
  marginBottom:10
}

const buttonStyle1={
  height: 50,
  fontSize: 20,
  left: 0,
  position: 'relative',
  top: 5,
  right:30,
  marginBottom:10
}

const buttonStyle2={
  height: 50,
  fontSize: 20,
  left: 0,
  position: 'relative',
  top: 5,
  right:30,
  marginBottom:30
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

const bottomBtn = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  color: '#FFF5DC'
}

const logIn = createTheme({
  palette: {
    primary: {
      main: '#2AF57B',
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