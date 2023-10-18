import React, { useEffect } from 'react';
import { Route, Routes, useNavigate, Switch, Link } from 'react-router-dom';
import FindId from './api/user/FindId';
import Register from './api/user/Register';
import Register1 from './api/user/Register1';
import Register2 from './api/user/Register2';
import FindPw from './api/user/FindPw';
import FindPw1 from './api/user/FindPw1';
import FindPw2 from './api/user/FindPw2';
import UploadPage from './api/user/UploadPage';
import Analysis from './api/user/Analysis';
import {Error} from './api/user/Error';
import Home from './api/user/Home';
import Findid_True from './api/user/FindId_true';
import Findid_Null from './api/user/Findid_Null';
import AnalysisResult from './api/user/AnalysisResult';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const navBar = document.querySelector('.navBar1');
    
    const handleClick = () => {
      console.log('navBar');
      navigate('/');
    };
    
    navBar.addEventListener('click', handleClick);
    
    return () => {
      navBar.removeEventListener('click', handleClick);
    };
  }, []);


  return (
    <div className="App">
      <div className='navBar' style={{ position: 'sticky', top: '0px', position:'-webkit-sticky' }}>
        <span className='navBar1'><img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FWh9H8%2Fbtst7RMKPq6%2Fo1R3oEEWhZCvymoBILvkT0%2Fimg.png" style={{width: 80, height: 80, left: 0, top: 25, position: 'relative', paddingRight:15}}></img>Scanwich
          <Link to="/Analysis">분석페이지</Link>
          <Link to="/UploadPage">APK업로드</Link>
        </span>
      </div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/register1" element={<Register1 />} />
      <Route path="/register2" element={<Register2/>} />
      <Route path="/findid" element={<FindId />} />
      <Route path='/indid_true' element={<Findid_True/>}/>
      <Route path="/Findid_Null" element={<Findid_Null />} />
      <Route path="/findpw" element={<FindPw/>} />
      <Route path="/findpw1" element={<FindPw1/>} />
      <Route path="/indpw2" element={<FindPw2/>} />
      <Route path='/UploadPage' element={<UploadPage/>}/>
      <Route path='/Analysis' element={<Analysis/>}/>
      <Route path='/Error' element={<Error/>}/>
      <Route path='/AnalysisResult' element={<AnalysisResult />}/>

      
    </Routes>
    </div>
  );
}

export default App;