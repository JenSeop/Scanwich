import * as React from 'react';
import { Link } from 'react-router-dom';
import './styles/style.css';
import Grid from '@mui/material/Unstable_Grid2';


const Register = () => {
  return (
    
    <div className="element-user-register">
      <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
      {/* 가운데로 정렬 -> Grid 안 */}
    
      <div className="div">
        <div className="text-wrapper">Bakery 약관 동의</div>
        <div className="text-wrapper-2">자세한 동의 내용 확인</div>
        <Link to="/register1"><div className="group">
          <div className="overlap-group">
          <div className="text-wrapper-3">전체 동의하기</div>
          </div>
        </div></Link>
        <div className="overlap-wrapper">
          <div className="overlap">
            <p className="p">[필수] 개인정보 활용을 위한 안내 (1)</p>
            <div className="rectangle" />
          </div>
        </div>
        <div className="overlap-group-wrapper">
          <div className="overlap">
            <p className="p">[필수] 개인정보 활용을 위한 안내 (2)</p>
            <div className="rectangle" />
          </div>
        </div>
        <div className="div-wrapper">
          <div className="overlap">
            <p className="p">[필수] 개인정보 활용을 위한 안내 (3)</p>
            <div className="rectangle" />
          </div>
        </div>
      </div>
      </Grid>
    </div>
    
  );
};

export default Register;
