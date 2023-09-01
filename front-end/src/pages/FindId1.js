import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import './styles/style.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const FindId1 = () => {
  return (
    <div className="element-user-findid-1">
    <div className="div">
      <div className="text-wrapper">userID0123</div>
      <Link to="/findpw"><div className="group">
        <div className="overlap-group">
          <div className="text-wrapper-2">비밀번호 찾기</div>
        </div>
      </div></Link>
      <div className="overlap-wrapper">
      <Link to="/"><div className="overlap">
          <div className="text-wrapper-3">로그인하기</div>
        </div></Link>
      </div>
      <p className="p">
        본인 명의로 가입한 아이디는
        <br />
        <br />
        다음과 같이 확인됩니다.
      </p>
    </div>
  </div>
    );

  
  };
  
  export default FindId1;