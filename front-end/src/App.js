import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import FindId from './pages/FindId';
import Register from './pages/Register';
import Register1 from './pages/Register1';
import Register2 from './pages/Register2';
import Register3 from './pages/Register3';
import FindId1 from './pages/FindId1';
import FindPw from './pages/FindPw';
import FindPw1 from './pages/FindPw1';
import FindPw2 from './pages/FindPw2';

function App() {
  return (
    <div className="App">
      <div className='navBar'>
        <span className='navBar1'>Scanwich</span>
      </div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/register1" element={<Register1 />} />
      <Route path="/register2" element={<Register2/>} />
      <Route path="/register3" element={<Register3/>} />
      <Route path="/findid" element={<FindId />} />
      <Route path="/findid1" element={<FindId1 />} />
      <Route path="/findpw" element={<FindPw/>} />
      <Route path="/findpw1" element={<FindPw1/>} />
      <Route path="/findpw2" element={<FindPw2/>} />
    </Routes>
    </div>
  );
}

export default App;
