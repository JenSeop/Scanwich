import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import './styles/style.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const FindId = () => {

  const [text, setText] = useState('');
  const [text1, setText1] = useState('');
  
  const handleTextChange = (event) => {
    const newValue = event.target.value;
    if (/^[0-9]*$/.test(newValue) || newValue === '') {
      setText(newValue);
    }
  };

  const handleTextChange1 = (event) => {
    const newValue = event.target.value;
    if (/^[0-9]*$/.test(newValue) || newValue === '') {
      setText1(newValue);
    }
  };

  const [open, setOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0); // 스크롤 위치 저장
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [remainingTime, setRemainingTime] = useState(null);
  const [timerId, setTimerId] = useState(null);

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

  const startTimer = () => {
    const newTimerId = setInterval(() => {
      setRemainingTime(prevTime => prevTime - 1);
    }, 1000);

    return newTimerId;
  };

  const formatTime = time => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'; // 모달 열릴 때 스크롤 막기
    } else {
      document.body.style.overflow = 'auto'; // 모달 닫힐 때 스크롤 복원
      window.scrollTo(0, scrollPosition); // 스크롤 위치 복원
    }
  }, [open]);
  

  useEffect(() => {
    let timerInterval;
  
    if (open && !timerInterval) {
      setIsTimerActive(true);
      setRemainingTime(180); // 3분으로 설정
    }
  
    return () => {
      if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
      }
    };
  }, [open]);

  return (
    <div className="element-user-findid">
    <div className="div">
      <input className="rectangle" />
      <input type='text' value={text} onChange={handleTextChange} className="rectangle-2" />
      <div className="text-wrapper">이메일 입력</div>
      <input type='text' value={text1} onChange={handleTextChange1} className="rectangle-3" />
      <Button><div className="overlap">
        <div className="rectangle-4" />
        <Link to="/FindId1"><div className="text-wrapper-2">인증 확인</div></Link>
      </div></Button>
      <Button onClick={handleOpen}><div className="overlap-group">
        <div className="text-wrapper-3">인증번호 받기</div>
      </div></Button>
      <div className="text-wrapper-4">이름</div>
      <div className="text-wrapper-5">인증번호 입력 <span className='time_auth'>{formatTime(remainingTime)}</span></div>
    </div>
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
  </div>

  
  );

  
};

export default FindId;