import React, { useState } from 'react';
import {
  TextField,
  Button,
  createTheme,
  ThemeProvider
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Modal1 from '../components1/MODAL';



const FindPw = () => {

  const navigate = useNavigate();
  const alterComponent = (path) => {
    navigate(path);
  }

  const [uEmail, setUEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/user/find_id/', {
        u_email: uEmail
      });
      response.data.found ? navigate('/api/user/FindPwTrue') : navigate('/api/user/FindIdNull');
      /* 찾으면 FindPwTrue, 못찾으면 FindPwNull */
    }
    catch (error) {
      console.error('Error:', error);
    }

    openModal();
};

const [modalOpen, setModalOpen] = useState(false);
const openModal = () => {
  setModalOpen(true);
};
const closeModal = () => {
  setModalOpen(false);
};

  return (

<>
  <div className='510792' style={style_510792}>
    <div>
      <h2 className='Hello'>비밀번호를 잊으셨나요?</h2>
      <span className='Text1'>아이디 또는 이메일을 통해<br/> 본인인증을 진행해주세요</span>
      <div className='Text3 marginFive'>아이디 또는 이메일</div>
      <div className='Text4 marginFive'>아이디 또는 가입하셨을 때 인증한 메일을 입력해주세요</div>
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
            required title="dd"/>  { /* 빈칸으로 두면 안됨 */ }

          <Button type="submit" 
                  variant="contained" 
                  onClick={handleSubmit} 
                  style={vlockSt}
                  className='marginT30 marginB20'>
            다음
          </Button>

        { modalOpen && (
          <Modal1
            modalTitle="이메일로 전송됨"
            modalDescription="전송된 링크 클릭해주세요"
            onClose={closeModal}/>
        )}

          {/* <Button type="submit" 
                  variant="contained" 
                  style={customUnderline}
                  onClick={()=>alterComponent('/api/user/findPwTrue')}>
            찾은경우
          </Button> */}

          <Button type="submit" 
                  variant="contained" 
                  style={customUnderline}
                  onClick={()=>alterComponent('/api/user/FindPwNull')}>
            못 찾은경우
          </Button>
        </ThemeProvider>
      </form>
    </div>
  </div>
</>

); };
export default FindPw;


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

const vlockSt = {
  display: "block",
  width: 390,
  marginTop: 30,
  borderRadius: 0,
  height: 50,
  fontSize: 20,
  margin: '0px auto'
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