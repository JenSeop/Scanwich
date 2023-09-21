// import * as React from 'react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material';
import './styles/style.css';
import './styles/donotscroll.css';

const Home = () => {
  /*  */
  let [errorMessages, setErrorMessages] = useState('');

  /* 로그인 상태 관리 */
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  /* theme */
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

  /* regex */
  const [text, setText] = useState('');

  const handleTextChange = (event) => {
    const newValue = event.target.value;
    const newValuename = event.target.value;
    // if (/^[A-Za-z0-9@.\-_]*$/.test(newValue) || newValue === '') {
    //   setText(newValue);
    // }
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



  /* return ( */
  return (
    <div className='Home' style={{
      backgroundColor: '#FFF5DC'
    }}>


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
<Link to="/Analysis">
<Button variant="contained">분석페이지</Button></Link>

  <div className="Rectangle45" style={{width: 510, height: 792, left: 704.69, top: 165, position: 'absolute', background: 'white', borderRadius: 40}} />
    
  <div className="WelcomeToBakery" style={{left: 776.69, top: -300, position: 'absolute', color: '#CE881F', fontSize: 32, fontFamily: 'Noto Sans KR', fontWeight: '700', lineHeight: 35.20, letterSpacing: 3.20}}>Welcome to Bakery!</div>
  <div className="LoginContainer" style={{left: 792.69, top: 404, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 20, display: 'inline-flex'}}>
    <div className="LoginContainer" style={{width: 335, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 26, display: 'flex'}}>
      <div className="LoginText" style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 26, display: 'flex'}}>
        <div className="Id" style={{width: 335, height: 73, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
          <div className="Input" style={{alignSelf: 'stretch', height: 68, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 6, display: 'flex'}}>
            <div className="Id" style={{
              color: '#373531', 
              fontSize: 16, 
              fontFamily: 'Roboto', 
              fontWeight: '1000', 
              letterSpacing: 1, 
              wordWrap: 'break-word', 
              top: 0, 
              position: 'relative'}}>아이디 또는 이메일</div>
            <div className="Content" style={{alignSelf: 'stretch', paddingTop: 10, paddingBottom: 10, justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
              <div className="Value" style={{flex: '1 1 0', color: '#373531', fontSize: 20, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 24, letterSpacing: 0.15, wordWrap: 'break-word'}}> </div>
            </div>

{/* id_input */}
            <input type='text' value={text} onChange={handleTextChange} style={{
              top: 30,
              position:'absolute',
              border: 'none',
              outline: 'none',
              fontSize: 20}}>
            </input>
            <div className="Underline1" style={{
              alignSelf: 'stretch', 
              height: 0, 
              border: '2px #373531 solid', 
              top: 10, 
              position: 'relative'}}></div>
          </div>
        </div>
        <div className="Pw" style={{width: 335, height: 73, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
          <div className="Input" style={{alignSelf: 'stretch', height: 68, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 6, display: 'flex'}}>
            <div style={{
              color: '#373531', 
              fontSize: 16, 
              fontFamily: 'Roboto', 
              fontWeight: '1000',  
              letterSpacing: 1, 
              wordWrap: 'break-word', 
              top: -20, 
              position: 'relative'}}>비밀번호</div>
            <div className="Content" style={{alignSelf: 'stretch', paddingTop: 10, paddingBottom: 10, justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
              <div className="Value" style={{flex: '1 1 0', color: '#373531', fontSize: 20, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 24, letterSpacing: 0.15, wordWrap: 'break-word'}}> </div>
            </div>
{/* pass_input */}
            <input type='password' value={password} onChange={setPassword}  autoComplete="off" style={{
              top: 110,
              position:'absolute',
              border: 'none',
              outline: 'none',
              fontSize: 20}}> 
            </input>
            <div className="Underline2" style={{
              alignSelf: 'stretch', 
              height: 0, 
              border: '2px #373531 solid', 
              top: -10, 
              position: 'relative'}}></div>
          </div>
        </div>
      </div>
      <div className="ButtonContainer" style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 12, display: 'flex'}}>

{/* login_button */}
          <ThemeProvider theme={logIn}>
            <Button variant="contained" color='primary' style={{
              width: 330,
              height: 50,
              fontSize: 20,
              left: 0,
              position: 'relative',
              top: 5,
              right:30,
            }} onClick={() => (username === 'admin' && password === 'admin') ? 
                              setLoggedIn(true) :
                              null}>로그인
            </Button>
          </ThemeProvider>

          <ThemeProvider theme={GlogIn}>
            <Button variant="outlined" color='primary' style={{
              width: 330,
              height: 50,
              fontSize: 20,
              left: 0,
              position: 'relative',
              top: 5,
              right:30,
            }}><img className="GoogleLogo"  src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FPYhoF%2Fbtst5s70W5x%2Fmcwrp98gbLeCYMo1IfqGHk%2Fimg.png" style={{
                width:25,
                height:25,
                top: 12,
                left:20,
                position: 'absolute'
                }}/>구글 계정으로 로그인</Button>
          </ThemeProvider>
          
          <ThemeProvider theme={GlogIn}>
            <Button variant="outlined" color='primary' style={{
              width: 330,
              height: 50,
              fontSize: 20,
              left: 0,
              position: 'relative',
              top: 5,
              right:30,
            }}><img className="GoogleLogo"  src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FNnJOO%2Fbtst0xoiHb2%2FGEp7Rhrx83TRzRmP4G51zk%2Fimg.png" style={{
                width:25,
                height:25,
                top: 12,
                left:20,
                position: 'absolute'
                }}/>카카오 계정으로 로그인</Button>
          </ThemeProvider>

          <Link to="/UploadPage">
          <ThemeProvider theme={logIn}>
            <Button variant="contained" color='error' style={{
              width: 330,
              height: 50,
              fontSize: 20,
              left: 0,
              position: 'relative',
              top: 5,
              right:30,
            }}>APK 파일업로드 베타</Button>
          </ThemeProvider></Link>
          <div style={errorMessage}>{errorMessages}</div>

      </div>
    </div>
    <div className="ExtraContainer" style={{
      padding: 10, 
      left: 11.78, 
      top: 454, 
      position: 'absolute', 
      justifyContent: 'center', 
      alignItems: 'center', 
      gap: 25, 
      display: 'inline-flex', 
      width: 320}}>
      <div className="Id" style={{
        width: 45, 
        height: 17, 
        position: 'relative', 
        top:20}}>
        <Link to="/findid"><div style={{
          left: -35, 
          top: -20, 
          right:-40,
          position: 'absolute', 
          textAlign: 'center', 
          color: 'black', 
          fontSize: 15, 
          fontFamily: 'Noto Sans KR', 
          fontWeight: '200'}}>아이디 찾기 </div></Link>
      </div>
      <div style={{position: 'relative', left:10}}> /</div>
      <div style={{width: 87, height: 17, position: 'relative'}}>
      <Link to="/findpw"><div style={{
          left: -10, 
          top: 0, 
          right: -20,
          position: 'absolute', 
          textAlign: 'center', 
          color: 'black', 
          fontSize: 15, 
          fontFamily: 'Noto Sans KR', 
          fontWeight: '200'}}>비밀번호 찾기</div></Link>
      </div>
      <div>/</div>
      <div style={{width: 56, height: 17, position: 'relative'}}>
      <Link to="/register"><div style={{
          left: -10, 
          top: 0, 
          right: 5,
          position: 'absolute', 
          textAlign: 'center', 
          color: 'black', 
          fontSize: 15, 
          fontFamily: 'Noto Sans KR', 
          fontWeight: '400'}}>회원가입</div></Link>
      </div>
    </div>
  </div>




 
  


</div>
);
};


const errorMessage = {
  width: '330px',
  height: '80px',
  // border: 'solid black',
  position: 'relative',
  top: '-480px',
  textAlign: 'center',
  color: '#F12D2D',
  fontWeight: '600',
  fontFamily: '"Roboto", sans-serif'
}

export default Home;