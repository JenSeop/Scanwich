import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
/* Navigation Components */
import PcNav from './components/Navigation/PcNav';
import MobBotNav from './components/Navigation/MobBotNav';
/* Default Component */
import Home from './pages/Home';
/* Authentication Component */
import Login from './pages/Login';
import FindID from './pages/Auth/FindId'
import FindIDResult from './pages/Auth/FindIdResult'
import FindPW from './pages/Auth/FindPw'
import FindPWResult from './pages/Auth/FindPwResult'
import RegisterStep1 from './pages/Register/RegisterStep1';
import RegisterStep2 from './pages/Register/RegisterStep2';
import RegisterStep3 from './pages/Register/RegisterStep3';
import EmailVerif201 from './pages/Verification/EmailVerif201';
import EmailVerif424 from './pages/Verification/EmailVerif424';
import EmailVerif502 from './pages/Verification/EmailVerif502';
/* Report Components */
import Report from './pages/Report';
/* Exception Handling Components */
import Error from './pages/Error';
/* User Menu Components */
import Guide from './pages/Guide';
import About from './pages/About';
import Contact from './pages/Contact';
import Licenses from './pages/Licenses';
/* Profile Components */
import Profile from './pages/Profile';
import History from './pages/History';
/* Search Components */
import Search from './pages/Search';


function App() {
  {/* Window Size Handler */}
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
  const [display, setDisplay] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
      setDisplay(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Router>
      {/* PC Top Navigation */}
      <PcNav isMobile={isMobile} />
      <div style={{ paddingTop: '70px' }}>
        <Routes>
          {/* Default Page */}
          <Route path="/" element={<Home isMobile={isMobile}/>} />
          {/* Authentication Pages */}
          <Route path="/login" element={<Login />} />
          <Route path="/find/id/step1" element={<FindID/>} />
          <Route path="/find/id/step2" element={<FindIDResult/>} />
          <Route path="/find/pw/step1" element={<FindPW/>} />
          <Route path="/find/pw/step2" element={<FindPWResult/>} />
          <Route path="/register/step1" element={<RegisterStep1 />} />
          <Route path="/register/step2" element={<RegisterStep2 />} />
          <Route path="/register/step3" element={<RegisterStep3 />} />
          <Route path="/email/verif/201" element={<EmailVerif201 />} />
          <Route path="/email/verif/424" element={<EmailVerif424 />} />
          <Route path="/email/verif/502" element={<EmailVerif502 />} />
          {/* Report Page */}
          <Route path="/report/:r_id" element={<Report display={display}/>} />
          {/* Search Page */}
          <Route path="/Search/:type/:keyword" element={<Search />} />
          {/* User Menu Pages */}
          <Route path="/Guide" element={<Guide />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Licenses" element={<Licenses />} />
          {/* Profile Menu Pages */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/history" element={<History />} />
          {/* Exception Handling Pages */}
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
      {/* Mobile Bottom Navigation */}
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