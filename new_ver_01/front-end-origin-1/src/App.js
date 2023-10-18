// App.js

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PcNav from './pages/PcNav'; // PC용 네비게이션 바
import MobNav from './pages/MobNav'; // 모바일용 네비게이션 바
import Home from './pages/Home';
import Login from './pages/Login';
import RegisterStep1 from './pages/RegisterStep1';
import RegisterStep2 from './pages/RegisterStep2';
import RegisterStep3 from './pages/RegisterStep3';
import EmailVerif1 from './pages/EmailVerif1';
import EmailVerif2 from './pages/EmailVerif2';
import EmailVerif3 from './pages/EmailVerif3';
import Error from './pages/Error';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // 예: 768px 이하가 모바일로 간주

  useEffect(() => {
    // 화면 크기 변화 감지
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
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
        /* 모바일용 네비게이션 바 */
        <MobNav />
      ) : (
        /* PC용 네비게이션 바 */
        <PcNav />
      )}

      <div style={{ paddingTop: '64px' }}> {/* Navigation Bar의 높이만큼 컨텐츠를 밀어냄 */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register/step1" element={<RegisterStep1 />} />
          <Route path="/register/step2" element={<RegisterStep2 />} />
          <Route path="/register/step3" element={<RegisterStep3 />} />
          <Route path="/emailverif/1" element={<EmailVerif1 />} />
          <Route path="/emailverif/2" element={<EmailVerif2 />} />
          <Route path="/emailverif/3" element={<EmailVerif3 />} />
          <Route path="/error/403" element={<Error errorCode="403" />} />
          <Route path="/error/404" element={<Error errorCode="404" />} />
          <Route path="/error/503" element={<Error errorCode="503" />} />
          <Route path="/error/504" element={<Error errorCode="504" />} />
          <Route path="/*" element={<Error errorCode="404" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;