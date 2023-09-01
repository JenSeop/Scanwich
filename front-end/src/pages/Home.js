import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/style.css';
import Button from '@mui/material/Button';
{/* <Link to="/"></Link> */}



const Home = () => {

  
    const [text, setText] = useState('');
  
    const handleTextChange = (event) => {
      const newValue = event.target.value;
      if (/^[A-Za-z0-9@.\-_]*$/.test(newValue) || newValue === '') {
        setText(newValue);
      }
    };

  return (
    <div className="login">
      <div className="div">
        <input type='text' value={text} onChange={handleTextChange} className="rectangle" />
        <input type='password' className="rectangle-2" />
        <div className="text-wrapper">비밀번호</div>
        <div className="text-wrapper-2">ID 또는 이메일</div>
        <Link to="/findid"><div className="text-wrapper-3">ID 찾기</div></Link>
        <Link to="/findpw"><div className="text-wrapper-4"> /&nbsp;&nbsp;&nbsp;&nbsp;비밀번호 찾기&nbsp;&nbsp;&nbsp;&nbsp;/</div></Link>
        <Link to="/register"><div className="text-wrapper-5">회원가입</div></Link>
        <Link to="/"><Button className="loginButton">로그인하기</Button></Link>
        <Link to="/"><Button className="loginButtonK">카카오계정으로 로그인</Button></Link>
        <Link to="/"><Button className="overlap-group-wrapper">구글계정으로 로그인</Button></Link>
        <div className="text-wrapper-9">Bakery에 로그인하기</div>
      </div>
    </div>
  );
  
};

export default Home;