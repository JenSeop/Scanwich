import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button, createTheme, ThemeProvider } from '@mui/material';

const Findid_Null = () => {

/* textField */
const customUnderline = createTheme({
  palette: {
    primary: {
      main: '#2AF57B',
    },
    secondary: {
      main: '#1dab56',
    },
    error: {
      main: '#2AF57B',
      light: 'rgb(84, 247, 149)',
      dark: 'rgb(29, 171, 86)'
    }
  },
});

return (
<>
  <div className='510792' style={style_510792}>
    <div>
      <h2 className='Hello'>해당 이메일로 가입된 아이디가 없습니다</h2>
      <div className='Text1' style={{
        marginTop: '100px',
        marginBottom: '100px'
      }}>회원가입을 진행해주세요
      </div>

      <ThemeProvider theme={customUnderline}>
      <Link to='/api/user/findid' style={{ textDecoration: 'none', color: 'black' }}>  
        <Button type="submit" variant="contained" style={vlockSt}>아이디 다시찾기</Button>
      </Link>

      <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
        <Button variant="outlined" style={vlockSt}>로그인하기</Button>
      </Link>
      </ThemeProvider>

    </div>
  </div>
</>

); };

export default Findid_Null;

const style_510792 = {
  width: '740px',
  height: '592px',
  borderRadius: '40px',
  margin: '0px auto',
  padding: '55px 37px',
  display: 'flex',
  flexDirection: 'column',
  /* center */
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center'
  /* ------ */
}

const vlockSt = {
  display: "block",
  width: 390,
  marginTop: 20,
  borderRadius: 0,
  height: 50,
  fontSize: 20,
  margin: '20px auto'
}