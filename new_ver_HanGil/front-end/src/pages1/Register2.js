import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, createTheme, ThemeProvider } from '@mui/material';
import '../index.css';
import setCookie from '../utils1/setCookie';
import getCookie from '../utils1/getCookie';


const Register2 = () => {



  const navigate = useNavigate();
  const use_navigate = (path) => {
    navigate(path);
  }

  useEffect(() => {
    if(getCookie('prevPage')!=="/register/step2") navigate('/error/403');
    setCookie('prevPage', '/register/step3', { expires: 365 });
  }, [navigate])





  return (
    <>
      <div className='510792' style={style_510792}>
        <span className='Hello'>환영합니다</span>
        <span className='registerEnd'>가입하신 이메일을 통해 인증을 완료해 주세요</span>
          <ThemeProvider theme={logIn}>
            <Button variant="contained" 
                    color='primary' 
                    style={button1} 
                    onClick={()=> use_navigate('/')}>
              로그인하기
            </Button>
          </ThemeProvider>
      </div>
    </>
  );
};


export default Register2;

const style_510792 = {
  width: '420px',
  height: '592px',
  borderRadius: '40px',
  border: '1px solid black',
  margin: '0px auto',
  padding: '55px 37px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center', 
  alignItems: 'center',
}

const logIn = createTheme({
  palette: {
    primary: {
      main: '#2AF57B',
    },
  },
});

const button1= {
  width: 330,
  height: 50,
  fontSize: 20,
  left: 0,
  position: 'relative',
  top: 5,
  right:30,
  marginTop: 30,
  marginBottom:10
}