import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/style.css';
import Button from '@mui/material/Button';


const Register3 = () => {



  return (
    <div className="element-user-register-3">
      <div className="div">
        <p className="text-wrapper">가입하신 이메일을 통해 인증을 완료해주세요.</p>
        <div className="text-wrapper-2">환영합니다</div>
        <Link to="/"><div className="group">
            <Button variant="contained" className='text-wrapper-3' color='primary' size='large'>로그인하기</Button>
        </div></Link> 
      </div>
    </div>
  );
};


export default Register3;