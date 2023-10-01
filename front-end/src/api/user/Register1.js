import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import '../../index.css';
import { Box, TextField, Button, createTheme, ThemeProvider } from '@mui/material';
import axios from 'axios'; 
import Register2 from './Register2';



const Register1 = () => {
  const [bulb, setBulb] = useState(1); // Register2 라우팅
  // const navigate = useNavigate(); // <Link> 대용품
  
  const [username, setUsername] = useState(''); // useState_id
  const [password, setPassword] = useState(''); // useState_password
  const [email, setEmail] = useState('');       // useState_email
  
  const [duplicateId, setduplicateId] = useState('');

  /* id regex */
  const [regexId1, setregexId1] = useState(''); 
  const [regexId2, setregexId2] = useState(''); 
  const [regexId3, setregexId3] = useState(''); 
  const [regexId4, setregexId4] = useState(''); 

  // /* ps regex */
  // const [regexPass1, setregexPass1] = useState(''); 
  // const [regexPass2, setregexPass2] = useState(''); 
  // const [regexPass3, setregexPass3] = useState(''); 
  // const [regexPass4, setregexPass4] = useState(''); 

  // /* em regex */
  // const [regexEmail1, setregexEmail1] = useState(''); 
  // const [regexEmail2, setregexEmail2] = useState(''); 
  // const [regexEmail3, setregexEmail3] = useState(''); 
  // const [regexEmail4, setregexEmail4] = useState(''); 




  const handleIdChange = async (e) => {
    
    const inputId = e.target.value
    const regex = /^(?=.*[a-z])[\d_a-z\-!@#$%^&*()+=[{}`~:;"'<,>.?/]+(\d{1,})?$/
    //  /^(?=.*[a-z])[\d_a-z-]+(\d{1,})?$/
    const text__Limit = !regex.test(inputId) ? '영문소문자' : '​영문소문자'
    const numberLimit = !/\d/.test(inputId) ? '숫자' : '​숫자'
    const lengthLimit = !/^.{5,20}$/.test(inputId) ? '5~20' : '​5~20'
    const spcharLimit = !/^[a-zA-Z0-9_\-가-힣ㄱ-ㅎㅏ-ㅣ]*$/.test(inputId) ? '특수기호' : '​특수기호'
    
    setUsername(inputId);
    setregexId1(text__Limit);
    setregexId2(numberLimit)
    setregexId3(lengthLimit)
    setregexId4(spcharLimit)
    
    try {
      const response = await axios.post('/api/user/register', {
        u_id: inputId,
      });
      setduplicateId(response.data.exists ? '이미 사용 중인 아이디입니다.' : '사용가능');
    } catch (error) {
      console.error(error);
    }
    
  };



  let handlePasswordChange = (e) => {
    setPassword(e.target.value); // 비밀번호 입력값 업데이트

    // const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
    // if (!regex.test(e.target.value)) {
    //   setPasswordError('비밀번호는 8~16자의 영문 대/소문자, 숫자, 특수문자를 사용해야 합니다.');
    // } else {
    //   setPasswordError('');
    // }

    let lengthLimit = !/^.{8,16}$/.test(e.target.value) ? '8~16' : '​8~16'
    
    if (lengthLimit === '8~16') {
      document.querySelector('.lengthLimit816').style.color = '#FF4F4F'; // 빨간색으로 변경
    } else {
      document.querySelector('.lengthLimit816').style.color = '#FFF5DC'; // 하얀색으로 변경
    }


    let upper_Limit = !/(?=.*[A-Z])/.test(e.target.value) ? '대' : '​대'
    let eoanswk = document.querySelector('.eoanswk');
    eoanswk.style.color = upper_Limit === '대' ? '#FF4F4F' : '#FFF5DC'
    
    let lower_Limit = !/(?=.*[a-z])/.test(e.target.value) ? '소' : '​소'
    let thanswk = document.querySelector('.thanswk');
    thanswk.style.color = lower_Limit === '소' ? '#FF4F4F' : '#FFF5DC'

    let number_Limit = !/(?=.*\d)/.test(e.target.value) ? '숫자' : '​숫자'
    let tntwk = document.querySelector('.tntwk');
    tntwk.style.color = number_Limit === '숫자' ? '#FF4F4F' : '#FFF5DC'
    // /[`,~!@#\$%\^&\*\+\-=_<>]/
    let xmrtn_Limit = !/(?!.*[}{\][\\|;:'",./?])[`,~!@#$%^&*+\-=_<>]/.test(e.target.value) ? '특수문자' : '​특수문자'
    let xmrtnanswk = document.querySelector('.xmrtnanswk');
    xmrtnanswk.style.color = xmrtn_Limit === '특수문자' ? '#FF4F4F' : '#FFF5DC'

  };

  

  const handleEmailChange = (e) => {
    setEmail(e.target.value); // 이메일 입력값 업데이트
    
    // 이메일의 정석 : /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    let emale_Limit = !/@.*\./.test(e.target.value) ? '이메일 주소' : '​이메일 주소'
    let differentMan = document.querySelector('.differentMan');
    differentMan.style.color = emale_Limit === '이메일 주소' ? '#FF4F4F' : '#FFF5DC'
    // differentMan
  };



  const handleSubmit = async () => {
    try {
      const response = await axios.post('/api/register/', {
        u_id: username,
        password: password,
        u_email: email
      });
  
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
    setBulb(false)

    /* handleSubmit을 누르는데 빨간색 글자가 하나라도 있으면 오류뜨게하고 라우팅 금지 */
  };





return (
<>
  {bulb && (
    <div className='510792' style={style_510792}>
      <span className='Hello'>Hello</span>
      <span className='NewAccount'>새 계정을 만들고 Scanwich의 일원이 되세요</span>
      <div style={innerBox}>
        <span className='Text1'>아이디</span>
        <span className='Text2'>
          <span className='errorMsg' style={{ 
            color: regexId3 === '5~20' ? '#FF4F4F' : '#FFF5DC' }}>
          { regexId3 === '5~20' ? '​5~20' : '5~20' }
          </span>자의 ​
          <span className='errorMsg' style={{ 
            color: regexId1 === '영문소문자' ? '#FF4F4F' : '#FFF5DC' }}>
          { regexId1 === '영문소문자' ? '영문소문자' : '​영문소문자' }
          </span>, ​
          <span className='errorMsg' style={{
            color: regexId2 === '숫자' ? '#FF4F4F' : '#FFF5DC' }}>
          { regexId2 === '숫자' ? '​숫자' : '숫자' }
          </span>와 ​
          <span className='errorMsg' style={{ 
            color: regexId4 === '특수기호' ? '#FF4F4F' : '#FFF5DC' }}>
          { regexId4 === '특수기호' ? '특수기호' : '​특수기호' }
          </span>(_),(-)만 가능합니다
        </span>

  <ThemeProvider theme={customUnderline}>
  <Box
      component="form"
      sx={{
        '& > :not(style)': { mt: 1, width: 350 },
      }}
      noValidate
      autoComplete="off"
  >
      <TextField
        error
        id="u_id"
        variant="standard"
        value={username}
        onChange={handleIdChange}
      />
  </Box>
  </ThemeProvider>
  <div className='errorMsg' style={{
    marginTop:5
  }}>{duplicateId}</div>



  <span className='Text1'>비밀번호</span>
  <span className='Text2'>
    <span className='lengthLimit816'>8~16</span>자의 영문 ​
    <span className='eoanswk'>대</span>/
    <span className='thanswk'>소</span>문자, ​
    <span className='tntwk'>숫자</span>, ​
    <span className='xmrtnanswk'>특수문자</span>를 사용해 주세요
  </span>
  <ThemeProvider theme={customUnderline}>
  <Box
      component="form"
      sx={{
        '& > :not(style)': { mt: 1, width: 350 },
      }}
      noValidate
      autoComplete="off"
  >
      <TextField 
      error
      id="password" 
      variant="standard" 
      type="password"
      value={password}
      onChange={handlePasswordChange}
      style={{
        marginBottom: '10px'
       }}
      />
  </Box>
  </ThemeProvider>




  <span className='Text1'>이메일</span>
  <span className='Text2'>인증에 필요한 ​
    <span className='differentMan'>이메일 주소</span>를 알려주세요
  </span>

  <ThemeProvider theme={customUnderline}>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { mt: 1, width: 350 },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField 
        error
        id="email" 
        variant="standard"
        value={email} 
        onChange={handleEmailChange}
        style={{
          marginBottom: '10px'
        }}
      />
    </Box>
  </ThemeProvider>

  <ThemeProvider theme={customUnderline}>
    <Button onClick={handleSubmit} variant="contained" style={{
      marginTop: '40px',
      width: '350px',
      borderRadius: '0px',
      fontSize: '20px',
    }}>
      회원가입 완료
    </Button>
  </ThemeProvider>

      </div>
    </div>

  )}
  {! bulb && <Register2 />}
</>

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
  // backgroundColor: 'White',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center', 
  alignItems: 'center', 
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