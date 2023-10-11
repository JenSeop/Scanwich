import Home from './Home';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

import {
  Typography,
  Modal,
  Box,
  TextField,
  Button,
  createTheme,
  ThemeProvider
} from '@mui/material';


const FindId = () => {

// const [conditionalRendering, setConditionalRendering] = useState(null);

const [bulb, setBulb] = useState(1); // Home 라우팅




/* Modal */  
const [open, setOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0); // 스크롤 위치 저장
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [remainingTime, setRemainingTime] = useState(null);
  const [timerId, setTimerId] = useState(null);



  const handleOpen = () => {
    setScrollPosition(window.scrollY); // 모달 열릴 때 스크롤 위치 저장
    setOpen(true);
    setIsTimerActive(true);
    const newTimerId = startTimer();
    setTimerId(newTimerId);
  };

  const handleClose = () => {
    setOpen(false);
    window.scrollTo(0, scrollPosition); // 모달 닫힐 때 스크롤 위치 복원
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'; // 모달 열릴 때 스크롤 막기
    } else {
      document.body.style.overflow = 'auto'; // 모달 닫힐 때 스크롤 복원
      window.scrollTo(0, scrollPosition); // 스크롤 위치 복원
    }
  }, [open]);

  const startTimer = () => {
    const newTimerId = setInterval(() => {
      setRemainingTime(prevTime => (prevTime > 0) ? prevTime - 1 : 0);
    }, 1000);

    return newTimerId;
  };

  const formatTime = time => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  useEffect(() => {
    let timerInterval;
  
    if (open && !timerInterval) {
      setIsTimerActive(true);
      // setRemainingTime(180); // 3분으로 설정
      setRemainingTime(10);
    }
    

    return () => {
      if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
      }
    };
  }, [open]);
/* ----- */





const [uEmail, setUEmail] = useState('');
const navigate = useNavigate(); // useNavigate 훅을 사용하여 navigate 함수를 가져옴

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post('/api/user/find_id/', {
      u_email: uEmail
    });

    if (response.data.found) {
      // 아이디를 찾은 경우 findYourId 페이지로 라우팅
      navigate('/findYourId');
      console.log('if');
    } else {
      // 아이디를 찾지 못한 경우 cantFindYourId 페이지로 라우팅
      navigate('/cantFindYourId');
      console.log('else');
    }
  } catch (error) {
    console.error('Error:', error);
  }
};






  return (

<>
  {bulb && (
  <div className='510792' style={style_510792}>
    <div>
      <h2 className='Hello'>아이디를 잊으셨나요?</h2>
      <span className='Text1'>이메일을 통해 본인인증을 진행해주세요</span>
      <div className='Text3'>이메일</div>
      <div className='Text4'>가입하셨을 때 인증한 메일을 입력해주세요</div>
      <form onSubmit={handleSubmit}>
      <ThemeProvider theme={customUnderline}>
        <TextField
          // label="Email"
          error
          InputProps={{
            style: {
              width: 390,
              borderBottom: '1px solid #2AF57B'
            },
          }}
          variant="standard"
          type='email'
          name='u_email'
          value={uEmail}
          onChange={(e) => setUEmail(e.target.value)}
          required title="dd" // 빈칸으로 두면 안됨
        />
        {/* <Link to='/findid1' style={{ textDecoration: 'none', color: 'black' }}> */}
        <Button type="submit" variant="contained" onClick={handleSubmit} style={vlockSt}>다음</Button>
        <Link to='/api/user/findid_true' style={{ textDecoration: 'none', color: 'black' }}>
        <Button type="submit" variant="contained" style={customUnderline}>찾은경우</Button>
        </Link>
        <Link to='/api/user/findid_Null' style={{ textDecoration: 'none', color: 'black' }}>
        <Button type="submit" variant="contained" style={customUnderline}>못 찾은경우</Button>
        </Link>
        {/* </Link> */}
        </ThemeProvider>
      </form>
    </div>
    {remainingTime === 0 ?
    ( <span style={{ color: 'red' }}>0:00 </span>)
    : ( formatTime(remainingTime) )}

<Button onClick={handleOpen}>모달</Button>

    {/* <Button variant="contained" onClick={() => setConditionalRendering(<Home/>)}>test</Button> */}
    <Button variant="contained" onClick={() => setBulb(false)} style={{
      marginTop: 50
    }}>렌더링 테스트</Button>


  </div>
  )}

  {! bulb && <Home />}

  <div>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
    <Box sx={style}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        인증 링크가 발송 되었습니다.
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        발송된 링크를 클릭해주세요.
      </Typography>
    </Box>
    </Modal>
  </div>

</>

); };

export default FindId;

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
  /* center */
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center'
  /* ------ */
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 4,
};

const vlockSt = {
  display: "block",
  width: 390,
  marginTop: 20,
  borderRadius: 0,
  height: 50,
  fontSize: 20
}

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
    },
    text: {
      primary: '#fff5dc',
    },
  },
});