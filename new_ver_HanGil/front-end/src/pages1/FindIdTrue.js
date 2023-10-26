import { useNavigate } from 'react-router-dom';
import { Button, createTheme, ThemeProvider } from '@mui/material';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FindIdTrue = () => {
  const navigate = useNavigate();
  const [foundId, setFoundId] = useState(null);

  const use_navigate = (path) => {
    navigate(path);
  }

  useEffect(() => {
    const didFindId = async () => {
      try {
        const response = await axios.post('/api/user/get_found_id');
        setFoundId(response.data.foundId);
      }
      catch (error) {
        console.error('Error:', error);
      }
    }

    didFindId();
  }, []);




  
return (
<>
  <div className='510792' style={style_510792}>
    <div>
      <h2 className='Hello'>님 아이디는</h2>
      <div className='Text1' style={margin}>
        ' {foundId} ' 임
        {/* 서버에서 foundId로 전송해야함 */}
      </div>

      <ThemeProvider theme={customUnderline}>
        <Button variant="contained" 
                style={vlockSt} 
                onClick={()=>use_navigate('/')}
        >
          로그인하기
        </Button>
        <Button variant="outlined" 
                style={vlockSt} 
                onClick={()=>use_navigate('/')}
        >
          비밀번호 찾기
        </Button>
      </ThemeProvider>

    </div>
  </div>
</>

); };

export default FindIdTrue;

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

const margin = {
  marginTop: '100px',
  marginBottom: '100px'
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