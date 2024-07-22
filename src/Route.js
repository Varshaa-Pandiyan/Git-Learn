import React from "react";
import{Route,BrowserRouter as Router,Routes } from 'react-router-dom';
import Resume from './Langing-Page';
import Resume1 from "./Page2";
import App1 from "./Login";
import Resumes from "./page3";
// import './Login.css';
function Browser(){
    return(
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Resume/>}/>
                    <Route path="/next-page" element={<Resume1/>}/>
                    <Route path="/login-page" element={<App1/>}/>
                    <Route path="/entry-page" element={<Resumes/>}/>
                </Routes>
            </Router>
        </div>
    )
}
export default Browser;