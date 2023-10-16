import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

const AnalysisResult = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    // API 엔드포인트에 요청 보내서 데이터 가져오기
    axios.get('/api/analysis_result/')
      .then((response) => {
        setData(response.data);
        //setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        //setLoading(false);
      });
  }, []);

  useEffect(() => {
    // 1초마다 countdown을 감소시킴
    const timer = setInterval(() => {
      if (countdown <= 100) {
        setCountdown(countdown + 1);
      }
    }, 1000);

    // countdown이 0이 되면 타이머를 멈춤
    if (countdown === 100) {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer); // 컴포넌트 언마운트 시 타이머 정리
    };
  }, [countdown]);

  return (
    <div>
      <Typography variant="h4" component="h1" gutterBottom style={{ textAlign: 'center' }}>
        Analysis Result
      </Typography>
      {loading ? (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <CircularProgress size={100} thickness={6} />
          <Typography variant="body1" style={{ marginTop: '16px' }}>
            파일을 분석하는 중입니다...
          </Typography>
          <Typography variant="body1" style={{ marginTop: '8px' }}>
            {`경과 시간: ${countdown}초`}
          </Typography>
        </div>
      ) : data ? (
        <div>
          {/* 분석 결과 표시 */}
        </div>
      ) : null}
    </div>
  );
};

// 섹션을 렌더링하는 컴포넌트
const Section = ({ title, children }) => {
  return (
    <Paper elevation={3} style={{ padding: '16px', marginBottom: '16px' }}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      {children}
    </Paper>
  );
};

export default AnalysisResult;
