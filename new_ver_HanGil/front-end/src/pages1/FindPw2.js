import React from 'react';

import { Link } from 'react-router-dom';
import '../assets1/styles/style.css';


const FindPw2 = () => {
  return (
    <div className="element-user-findid-1">
    <div className="div">
      <div className="pwChange">비밀번호가 정상적으로 변경되었습니다.</div>
      <div className="overlap-wrapper">
      <Link to="/"><div className="overlap">
          <div className="text-wrapper-3">로그인하기</div>
        </div></Link>
      </div>
      <p className="p">
        비밀번호 변경 완료
      </p>
    </div>
  </div>
    );

  
  };
  
  export default FindPw2;