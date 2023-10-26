import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, createTheme, ThemeProvider } from '@mui/material';

const FindIdNull = () => {
  const navigate = useNavigate();

  const use_navigate = (path) => {
    navigate(path);
  }
return (
<>
  <div className='510792' style={style_510792}>
    <div>
      <h2 className='Hello'>해당 이메일로 가입된 아이디가 없습니다</h2>
      <div className='Text1'
           style={{
             marginTop: '100px',
             marginBottom: '100px'
           }}>
        회원가입을 진행해주세요
      </div>

      <ThemeProvider theme={customUnderline}>
        <Button type="submit"
                variant="contained" 
                style={vlockSt}
                onClick={()=> use_navigate('/api/user/findid')}
        >        
          아이디 다시찾기
        </Button>

        <Button variant="outlined" 
                style={vlockSt}
                onClick={()=> use_navigate('/')}
        >
          로그인하기
        </Button>
      </ThemeProvider>

    </div>
  </div>
</>

); };

export default FindIdNull;

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