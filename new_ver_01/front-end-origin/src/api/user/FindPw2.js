import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import './styles/style.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

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