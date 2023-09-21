import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/style.css';
import Button from '@mui/material/Button';


const Register2 = () => {



  return (

    <div className='510792' style={style_510792}>
      <span>가입하신 이메일을 통해 인증을 완료해주세요</span>
      <span>환영합니다</span>
      <Link to="/">
            <Button variant="contained" className='text-wrapper-3' color='primary' size='large'>로그인하기</Button>
        </Link> 

    </div>



  );
};

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

export default Register2;