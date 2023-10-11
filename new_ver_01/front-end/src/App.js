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
      <Route path="/api/user/register" element={<Register />} />
      <Route path="/api/user/register1" element={<Register1 />} />
      <Route path="/api/user/register2" element={<Register2/>} />
      <Route path="/api/user/findid" element={<FindId />} />
      <Route path='/api/user/findid_true' element={<Findid_True/>}/>
      <Route path="/api/user/Findid_Null" element={<Findid_Null />} />
      <Route path="/api/user/findpw" element={<FindPw/>} />
      <Route path="/api/user/findpw1" element={<FindPw1/>} />
      <Route path="/api/user/findpw2" element={<FindPw2/>} />
      <Route path='/api/user/UploadPage' element={<UploadPage/>}/>
      <Route path='/api/user/Analysis' element={<Analysis/>}/>
      <Route path='/api/user/Error' element={<Error/>}/>

      
    </Routes>
    </div>
  );
}

export default App;
