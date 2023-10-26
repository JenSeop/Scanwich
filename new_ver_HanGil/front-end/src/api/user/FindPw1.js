import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import './styles/style.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const FindPw1 = () => {

  return (
    <div className="element-user-findpw-1">
      <div className="div">
        <input className="rectangle" />
        <input className="rectangle-2" />
        <div className="text-wrapper">새 비밀번호 재입력</div>
        <div className="overlap-group">
          <div className="rectangle-3" />
          <Link to="/findpw2"><Button variant="outlined" color="error" className='rectangle-3'>변경</Button></Link>
        </div>
        <div className="text-wrapper-3">새 비밀번호 입력</div>
      </div>
    </div>
  );

  
};

export default FindPw1;