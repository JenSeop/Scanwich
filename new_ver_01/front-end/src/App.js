// App.js

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PcNav from './components/Navigation/PcNav';
import MobTopNav from './components/Navigation/MobTopNav';
import MobBotNav from './components/Navigation/MobBotNav';
import RegisterStep1 from './pages/Register/RegisterStep1';
import RegisterStep2 from './pages/Register/RegisterStep2';
import RegisterStep3 from './pages/Register/RegisterStep3';
import EmailVerif201 from './pages/Verification/EmailVerif201';
import EmailVerif424 from './pages/Verification/EmailVerif424';
import EmailVerif502 from './pages/Verification/EmailVerif502';
import ReportImg from './components/Report/ReportImg';
import Loading from './components/Report/Loading';
import Error from './pages/Error';
import Report from './pages/Report';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600); // 예: 600px 이하가 모바일로 간주
  const [display, setDisplay] = useState(window.innerWidth);

  useEffect(() => {
    // 화면 크기 변화 감지
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
      setDisplay(window.innerWidth);
    };

    // 리스너 등록
    window.addEventListener('resize', handleResize);

    // 언마운트 시 리스너 제거
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Router>
      {isMobile ? (
        <MobTopNav isMobile={isMobile}/>
      ) : (
        <PcNav />
      )}

      <div style={{ paddingTop: '70px' }}>
        <Routes>
          <Route path="/" element={<Home isMobile={isMobile}/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register/step1" element={<RegisterStep1 />} />
          <Route path="/register/step2" element={<RegisterStep2 />} />
          <Route path="/register/step3" element={<RegisterStep3 />} />
          <Route path="/email/verif/201" element={<EmailVerif201 />} />
          <Route path="/email/verif/424" element={<EmailVerif424 />} />
          <Route path="/email/verif/502" element={<EmailVerif502 />} />
          <Route path="/report/1" element={<Report display={display}/>} />
          <Route path="/loading" element={<Loading status="loading" />} />
          <Route path="/reportimg" element={<ReportImg paramScore={'1'} iconSize={520} circleSize={520}/>} />
          <Route path="/error/400" element={<Error errorCode="400" />} />
          <Route path="/error/403" element={<Error errorCode="403" />} />
          <Route path="/error/404" element={<Error errorCode="404" />} />
          <Route path="/error/500" element={<Error errorCode="500" />} />
          <Route path="/error/502" element={<Error errorCode="502" />} />
          <Route path="/error/503" element={<Error errorCode="503" />} />
          <Route path="/error/504" element={<Error errorCode="504" />} />
          <Route path="/*" element={<Error errorCode="404" />} />
        </Routes>
      </div>

      {isMobile ? (
        <MobBotNav />
      ) : (
        <>
        </>
      )}
    </Router>
  );
}

export default App;
