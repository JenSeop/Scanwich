import React, { useEffect } from 'react';
import { Route, Routes, useNavigate, Link } from 'react-router-dom';



import Home from './pages1/Home';
import Register from './pages1/Register';
import Register1 from './pages1/Register1';
import Register2 from './pages1/Register2';
import FindId from './pages1/FindId';
import FindIdTrue from './pages1/FindIdTrue';
import FindIdNull from './pages1/FindIdNull';
import FindPw from './pages1/FindPw';
import FindPw2 from './pages1/FindPw2';
import FindPwTrue from './pages1/FindPwTrue';
import FindPwNull from './pages1/FindPwNull';
import UploadPage from './pages1/UploadPage';
import Analysis from './pages1/Analysis';
import { Error } from './pages1/Error';
import Chart from './pages1/Chart';


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
  }, [navigate]);


  return (
    <div className="App">
      <div className='navBar' style={{ top: '0px', position:'-webkit-sticky' }}>
        <span className='navBar1'><img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FWh9H8%2Fbtst7RMKPq6%2Fo1R3oEEWhZCvymoBILvkT0%2Fimg.png" style={{width: 80, height: 80, left: 0, top: 25, position: 'relative', paddingRight:15}} alt='Scanwich'></img>Scanwich
          <Link to="/Analysis">분석페이지</Link>
          <Link to="/UploadPage">APK업로드</Link>
          <Link to="/chart" className='marginFive'>chart</Link>
          
        </span>
      </div>
    <Routes>



      <Route path="/" element={<Home/>} />

      <Route path='/register' element={<Register/>} />
      <Route path='/register1' element={<Register1/>} />
      <Route path='/register' element={<Register2/>} />
      
      <Route path="/findid" element={<FindId/>} />
      <Route path='/findidtrue' element={<FindIdTrue/>} />
      <Route path='/findidnull' element={<FindIdNull/>} />

      <Route path='/findpw' element={<FindPw/>} />
      <Route path='/findpw2' element={<FindPw2/>} />
      <Route path='/findpwtrue' element={<FindPwTrue/>} />
      <Route path='/findpwnull' element={<FindPwNull/>} />

      <Route path='/uploadpage' element={<UploadPage/>} />
      <Route path='/analysis' element={<Analysis/>} />
      <Route path='/error' element={<Error/>} />
      <Route path='/chart' element={<Chart/>}/>

      
    </Routes>
    </div>
  );
}

export default App;
