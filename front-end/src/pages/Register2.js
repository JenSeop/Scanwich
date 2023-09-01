import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/style.css';


const Register2 = () => {

  const [text, setText] = useState('');
  const handleTextChange = (event) => {
    const newValue = event.target.value;
    if (/^[A-Za-z0-9@.\-_]*$/.test(newValue) || newValue === '') {
      setText(newValue);
    }
  };

  return (
    <div className="element-user-register-2">
      <div className="div">
        <input type='text' value={text} onChange={handleTextChange} className="rectangle" />
        <div className="text-wrapper">이메일주소</div>
        <div className="text-wrapper-2">인증에 필요한 이메일주소를 알려주세요.</div>
        <Link to="/register3"><div className="group">
          <div className="overlap-group">
            <div className="text-wrapper-3">가입 완료</div>
          </div>
        </div></Link>
      </div>
    </div>

);
};

export default Register2;