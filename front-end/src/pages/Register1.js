import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/style.css';


const Register1 = () => {

  const [text, setText] = useState('');
  
  const handleTextChange = (event) => {
    const newValue = event.target.value;
    if (/^[A-Za-z0-9@.\-_]*$/.test(newValue) || newValue === '') {
      setText(newValue);
    }
  };

  return (

<div className="element-user-register-1">
      <div className="div">
        <input type='text' value={text} onChange={handleTextChange} className="rectangle" />
        <input type='password' className="rectangle-2" />
        <div className="text-wrapper">비밀번호</div>
        <div className="text-wrapper-2">ID</div>
        <p className="p">5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 가능합니다.</p>
        <p className="text-wrapper-3">8~16자의 영문 대/소문자, 숫자, 특수문자를 사용해 주세요.</p>
        <Link to="/register2"><div className="group">
          <div className="overlap-group">
          <div className="text-wrapper-4">다음</div>
          </div>
        </div></Link>
      </div>
    </div>

);
};

export default Register1;