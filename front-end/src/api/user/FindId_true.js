import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, createTheme, ThemeProvider } from '@mui/material';

const Findid_True = () => {

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
      <h2 className='Hello'>님 아이디는</h2>
      <div className='Text1' style={{
        marginTop: '100px',
        marginBottom: '100px'
      }}>'sdfefa' 임
      </div>

      <ThemeProvider theme={customUnderline}>
      <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>  
        <Button type="submit" variant="contained" style={vlockSt}>로그인하기</Button>
      </Link>

      <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
        <Button variant="outlined" style={vlockSt}>비밀번호 찾기</Button>
      </Link>
      </ThemeProvider>

    </div>
  </div>
</>

); };

export default Findid_True;

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