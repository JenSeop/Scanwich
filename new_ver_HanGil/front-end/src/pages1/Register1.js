import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, TextField, Button, createTheme, ThemeProvider } from '@mui/material';
import axios from 'axios'; 
import '../index.css';
import Register2 from './Register2';
import getCookie from '../utils1/getCookie';
import getCsrf from '../utils1/getCsrf';
import setCookie from '../utils1/setCookie';


const Register1 = () => {



  const navigate = useNavigate();
  const [bulb, setBulb] = useState(1);          // Register2 라우팅
  
  const [id, setid] = useState('');             // useState_id
  const [password, setPassword] = useState(''); // useState_password
  const [email, setEmail] = useState('');       // useState_email
  const [duplicateId, setduplicateId] = useState(''); // id 중복

  /* id regex */
  const [regexId1, setregexId1] = useState(''); 
  const [regexId2, setregexId2] = useState(''); 
  const [regexId3, setregexId3] = useState(''); 
  const [regexId4, setregexId4] = useState(''); 

  // EMAIL
  const [regexEmail, setRegexEnail] = useState('');


  useEffect(() => {
    if(getCookie('prevPage')!=="/register/step1") navigate('/error/403');
    setCookie('prevPage', '/register/step2', { expires: 365 });
  }, [navigate])

  




  const handleIdChange = async (e) => {
    const inputId = e.target.value
    const regex = /^(?=.*[a-z])[\d_a-z\-!@#$%^&*()+=[{}`~:;"'<,>.?/]+(\d{1,})?$/
    const text__Limit = !regex.test(inputId) ? '영문소문자' : '​영문소문자'
    const numberLimit = !/\d/.test(inputId) ? '숫자' : '​숫자'
    const lengthLimit = !/^.{5,20}$/.test(inputId) ? '5~20' : '​5~20'
    const spcharLimit = !/^[a-zA-Z0-9_\-가-힣ㄱ-ㅎㅏ-ㅣ]*$/.test(inputId) ? '특수기호' : '​특수기호'

    setid(inputId);
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
    let xmrtn_Limit = !/(?!.*[}{\][\\|;:'",./?])[`,~!@#$%^&*+\-=_<>]/.test(e.target.value) ? '특수문자' : '​특수문자'
    let xmrtnanswk = document.querySelector('.xmrtnanswk');
    xmrtnanswk.style.color = xmrtn_Limit === '특수문자' ? '#FF4F4F' : '#FFF5DC'
  };

  


  const handleEmailChange = (e) => {
    setEmail(e.target.value); // 이메일 입력값 업데이트
    let emale_Limit = !/@.*\./.test(e.target.value) ? '이메일 주소' : '​이메일 주소'
    let differentMan = document.querySelector('.differentMan');
    differentMan.style.color = emale_Limit === '이메일 주소' ? '#FF4F4F' : '#FFF5DC'

    setRegexEnail(emale_Limit)
  };





  const handleSubmit = async (e) => {
    e.preventDefault();
    /* 빈칸방지 */
    if (id.trim() === '' || password.trim() === '' || email.trim() === '') {
      alert('모든 필드를 입력해주세요.');
      return -1;
    }

    /* 빨간색 글자가 하나라도 있으면 오류, 라우팅 X */
    if (
      regexId1 === '영문소문자' ||
      regexId2 === '숫자' ||
      regexId3 === '5~20' ||
      regexId4 === '특수기호' ||
      regexEmail === '이메일 주소' ||
      /8~16/.test(password) ||
      /대/.test(password) ||
      /소/.test(password) ||
      /숫자/.test(password) ||
      /특수문자/.test(password)
    ) {
      alert('회원가입 정보를 다시 확인해주세요.');
      return -1;
    }



    /* axios */
    try {
      const csrfToken = getCsrf();
      console.log(csrfToken);  
      const response = await axios.post('/api/user/register/', {
        u_id: id,
        password: password,
        u_email: email,
        csrfToken: csrfToken
      });
      
      if (response.status === 200 || response.status === 201) {
        setCookie('prevPage', '/register/step2', { expires: 365 });
        setBulb(false);  // = navigate('/register/step3')
      } else {
        navigate('/error/500');
      }
    } catch (error) {
      console.error(error);
    }
    // setBulb(false);
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
      name="u_id"
      variant="standard"
      value={id}
      onChange={handleIdChange}
    />
  </Box>
  <div className='errorMsg' style={{ marginTop:5 }}>{ duplicateId }</div>



  <span className='Text1'>비밀번호</span>
  <span className='Text2'>
    <span className='lengthLimit816'>8~16</span>자의 영문 ​
    <span className='eoanswk'>대</span>/
    <span className='thanswk'>소</span>문자, ​
    <span className='tntwk'>숫자</span>, ​
    <span className='xmrtnanswk'>특수문자</span>를 사용해 주세요
  </span>
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
        name="password" 
        variant="standard" 
        type="password"
        value={password}
        onChange={handlePasswordChange}
        style={{ marginBottom: '10px' }}
      />
    </Box>




  <span className='Text1'>이메일</span>
  <span className='Text2'>인증에 필요한 ​
    <span className='differentMan'>이메일 주소</span>를 알려주세요
  </span>
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
        name="u_email" 
        variant="standard"
        value={email} 
        onChange={handleEmailChange}
        style={{ marginBottom: '10px' }}
      />
    </Box>

    <Button onClick={handleSubmit} variant="contained" style={succsBtn}>
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

const succsBtn= {
  marginTop: '40px',
  width: '350px',
  borderRadius: '0px',
  fontSize: '20px'
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