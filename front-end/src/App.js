import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Users/Home';
import RegisterStep1 from './Users/Register(step1)';
import RegisterStep2 from './Users/Register(step2)';
import RegisterStep3 from './Users/Register(step3)';
import FindUsers from './Users/FindUsers';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register/step1" element={<RegisterStep1 />} />
                <Route path="/register/step2" element={<RegisterStep2 />} />
                <Route path="/register/step3" element={<RegisterStep3 />} />
                <Route path="/FindUsers" element={<FindUsers />} />
                {/* 추가적인 라우트 경로를 필요에 따라 추가 */}
            </Routes>
        </Router>
    );
}

export default App;
