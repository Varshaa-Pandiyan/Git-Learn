import React from "react";
import resumelogo from './resumelogo.png';
import resumetem from './resumetem.jpg';
import './Landing-Page.css';
import fav1 from './fav1.png';
import fav2 from './fav2.png';
import fav3 from './fav3.png';
import fav4 from './fav4.png';
import temp1 from './temp1.jpeg';
import temp2 from './temp2.jpeg';
import temp3 from './temp3.jpeg';
import r1 from './r1.jpg';
import r2 from './r2.jpeg'
import r3 from './r3.jpeg';
import footerimg from './footerimg.png';
import { Link } from "react-router-dom";
function Resume() {
    return (
        <div>
            <section id="header">
                <a href="#">
                    <img src={resumelogo} id="logo"></img>
                </a>
                <div>
                    <ul id="nav-bar">
                        <li>
                            <a href="#">Resume</a>
                        </li>
                        <li>
                            <a href="#">Cover Letter</a>
                        </li>
                        <li>
                            <a href="#">Contact Us</a>
                        </li>
                        <li>
                            <span>Already a Member?</span>
                            <Link to={'/login-page'}>Login</Link>
                        </li>
                        <li>
                            {/* <a href="#">Sign Up</a> */}
                            <Link to={'/login-page'}>Signup</Link>
                        </li>

                    </ul>
                </div>
            </section>

            <section id="hero">
                <div id="head">
                    <h1>Create Your Resume With
                        <br></br>
                        Our Resume Builder</h1>
                    <p>
                        Build an effective 2024 resume in minutes with our free-to-use resume builder.<br></br>
                        Choose a recrutier-approved templetes and add-prewritten skills by Certified<br></br>
                        Professional Resume Writers
                    </p>

                   <Link to={'/next-page'} id="link">
                   <button id="build">Build Your resume
                    </button></Link>
                    {/* <a href="#"><img src={resumetem}></img></a> */}
                </div>
                {/* <div id="temp">
                    <a href="#">
                        <img src={resumetem}></img>
                    </a>
                </div> */}
                <div id="review">
                    <h4>Excellent</h4>
                    <ul id="star">
                        <li>
                            <i className="fas fa-star"></i>
                        </li>
                        <li>
                            <i className="fas fa-star"></i>
                        </li>
                        <li>
                            <i className="fas fa-star"></i>
                        </li>
                        <li>
                            <i className="fas fa-star"></i>
                        </li>
                        <li>
                            <i className="fas fa-star-half-alt"></i>
                        </li>
                    </ul>
                    <h4>9134 reviews on
                        <span>
                            <i className="fas fa-star"></i>
                        </span>Trustpiolit</h4>

                </div>
            </section>

            <h1 id="line">Make your Resume in 4 simple steps</h1>
            <section id="middle">

                <div id="step">
                    <div id="s1">
                        <img src={fav1}></img>
                        <h4>Pick your favorite
                            <br></br>
                            template
                        </h4>
                    </div>
                    <div id="s1">
                        <img src={fav2}></img>
                        <h4>Choose text to tell
                            <br></br>
                            your story
                        </h4>
                    </div>
                    <div id="s1">
                        <img src={fav3}></img>
                        <h4>Customize the design
                            <br></br>
                            and formatting
                        </h4>
                    </div>
                    <div id="s1">
                        <img src={fav4}></img>
                        <h4>Download in any file
                            <br></br>
                            format you need
                        </h4>
                    </div>
                </div>

            </section>

            <section id="template">
                <div id="temp-head">
                    <h1>
                        Start Building by Picking a Professional Template
                    </h1>
                    <p id="para1">
                        Choose one of the resume templates below. Fill it in with expert-written text
                        inspired<br></br>
                        by your work experience.
                    </p>
                    <p id="para2">
                        These professionally designed templates have been tested in the real world and
                        proven to
                        <br></br>
                        bypass HR screening software. Rest easy knowing your resume is more likely to
                        land
                        <br></br>
                        in human hands.
                    </p>
                </div>
                <div id="pic">
                    <div className="t2">
                        <a href="#">
                            <img src={temp1}></img>
                        </a>
                        {/* <button className="b1">Build Your Resume</button> */}
                        <Link to={'/next-page'} id="link">
                           <button className="b1">Build Your resume</button>
                        </Link>
                    </div>

                    <div className="t1">
                        <a href="#">
                            <img src={temp2}></img>
                        </a>
                        {/* <div className="overlay"></div> */}
                        {/* <button className="b1">Build Your Resume</button> */}
                        <Link to={'/next-page'} id="link">
                           <button className="b1">Build Your resume</button>
                        </Link>
                    </div>

                    <div className="t1">
                        <a href="#">
                            <img src={temp3}></img>
                        </a>
                        {/* <button className="b1">Build Your Resume</button>
                         */}
                         <Link to={'/next-page'} id="link">
                           <button className="b1">Build Your resume</button>
                        </Link>
                    </div>

                </div>
            </section>

            <section id="sec3">
                <h1>Why use our online Resume Builder?</h1>
                {/* <h3>New, professional designs</h3> */}

                <div id="info">
                    <div id="p1">
                        <h3>New, professional designs</h3>
                        <p>Choose from a wide range of styles for every job
                            <br></br>level and type. From fun and creative to simple and modern,<br></br>
                            there’s a perfect design for everyone.</p>
                    </div>
                    <img src={r1}></img>

                </div>
                <div id="info1">
                    <img src={r2}></img>
                    <div id="p2">
                        <h3>Step-by-step support</h3>
                        <p>Our Resume Creator provides detailed tips and advice
                            <br></br>throughout the process, with customer support ready to<br></br>
                            assist you anytime.</p>
                    </div>
                    {/* <img src={r2}></img> */}
                </div>
                <div id="info2">
                    <div id="p3">
                        <h3>Unlimited resumes</h3>
                        <p>Make and edit unlimited resumes, experiment with
                            <br></br>multiple templates and download your resumes in various<br></br>
                            file formats.</p>
                            </div>
                        <img src={r3}></img>
                
                </div>
            </section>
            <section id="footer">
             <div id="d1">
                <div id="f1">
                    <h1>Take your resume to the <br></br> next level</h1>
                    {/* <button>Make a New Resume</button> */}
                    <img src={footerimg}></img>

                </div>
                    {/* <img src={footerimg}></img> */}
                    {/* <button>Make a New Resume</button> */}
                    <Link to={'/next-page'} id="link" >
                           <button>Make a New Resume</button>
                        </Link>

             </div>
            </section>
        </div>
    )

}
export default Resume