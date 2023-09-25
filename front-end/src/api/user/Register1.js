import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../index.css';
import { Box, TextField, Button } from '@mui/material';
import axios from 'axios'; 

const Register1 = () => {
  
  const [username, setUsername] = useState(''); // 아이디 상태 추가
  const [password, setPassword] = useState(''); // 비밀번호 상태 추가
  const [email, setEmail] = useState(''); // 이메일 상태 추가
  
  const handleTextChange = (event) => {
    const newValue = event.target.value;
    if (/^[A-Za-z0-9@.\-_]*$/.test(newValue) || newValue === '') {
      setUsername(newValue); // 아이디 입력값 업데이트
    }
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value); // 비밀번호 입력값 업데이트
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value); // 이메일 입력값 업데이트
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http:/server.com/api/register/', {
        u_id: username,
        password: password,
        u_email: email
      });
  
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (

<div className='510792' style={style_510792}>
  <span className='Hello'>Hello</span>
  <span className='NewAccount'>새 계정을 만들고 Scanwich의 일원이 되세요</span>
  
  
  <div style={innerBox}>
  <span className='Text1'>아이디</span>
  <span className='Text2'>5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 가능합니다</span>
  <Box
      component="form"
      sx={{
        '& > :not(style)': { mt: 1, width: 330 },
      }}
      noValidate
      autoComplete="off"
  >
      <TextField
        id="u_id"
        label="ID"
        variant="outlined"
        value={username}
        onChange={handleTextChange}
       />
  </Box>


  <span className='Text1'>비밀번호</span>
  <span className='Text2'>8~16자의 영문 대/소문자, 숫자, 특수문자를 사용해 주세요</span>
  <Box
      component="form"
      sx={{
        '& > :not(style)': { mt: 1, width: 330 },
      }}
      noValidate
      autoComplete="off"
  >
      <TextField 
      id="password" 
      label="PASS" 
      variant="outlined" 
      type="password"
      value={password}
      onChange={handlePasswordChange}
      />
  </Box>


  <span className='Text1'>이메일</span>
  <span className='Text2'>인증에 필요한 이메일 주소를 알려주세요</span>
  <Box
      component="form"
      sx={{
        '& > :not(style)': { mt: 1, width: 330 },
      }}
      noValidate
      autoComplete="off"
  >
      <TextField 
      id="email" 
      label="EMAIL" 
      variant="outlined"
      value={email} 
      onChange={handleEmailChange}/>
  </Box>

  
  <Link to="/register2"><Button onClick={handleSubmit} variant="outlined" style={{
    marginTop: '40px',
    width: '330px'
  }}>회원가입 완료</Button></Link>

  </div>
  

</div>
);
};

export default Register1;

const style_510792 = {
  width: '420px',
  height: '592px',
  borderRadius: '40px',
  border: '1px solid black',
  margin: '0px auto',
  padding: '55px 37px',
  backgroundColor: 'White',
  display: 'flex',
  flexDirection: 'column'
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