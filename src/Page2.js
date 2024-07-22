import {useState} from "react";
import './Page2.css';
import resumelogo from './resumelogop.png'
import cv from './cv.png'
import penp from './penp.png'
import cursorp from './cursorp.png'
import { Link } from "react-router-dom";

function Resume1() {
    return (
        <div>
              <a href="#" ><img src={resumelogo}className="resumelogo"></img> </a>
             <h1 className="heading">Here's What you need to know</h1>
            <div id="header">
                <div>
                    {/* <a href="#">
                        <img src={resumelogo}></img>
                    </a> */}
                    {/* <h1 className="heading">Here's What you need to know</h1> */}
                    <img src={cv} className="img1"></img>
                    <h4>Step1</h4>
                    <p>Find a template design that speaks to you,<br/>
                        choose by experience level, industry,<br/>
                        recommedation,or personal style</p>
                    {/* <p>----------------------------------</p> */}
                </div>
                <p>---------------</p>
                <div>
                    <img src={penp} className="img2"></img>
                    <h4>step2</h4>
                    <p>Get the right words to describe what you do<br/>
                        search by job title and find expertly written<br/>
                        descriptions of your skills and responsibilties</p>
                    {/* <p>-----------------------------------</p> */}
                </div>
                <p>---------------</p>

                <div>
                    <img src={cursorp} className="img3"></img>
                    <h4>Step3</h4>
                    <p>Fine-tune the details and ready to be<br/> hired.customise any section ,and download 
                        <br/>That's it- you're ready to apply!
                    </p>
                </div>
                {/* <button className="cont">continue</button> */}
            </div>
            {/* <a href="#"><button className="cont">continue</button></a> */}
            <Link to={'/entry-page'}>
            <button className="cont">continue</button>
             </Link>
         <div className="terms">
            <p>By clicking above,you agree to our <span className="line"> terms of use </span> and <span className="line"> Privacy Policy.</span></p>
         </div>

            <div className="rating">
                <h3>Excellent</h3>
                <i class='fas fa-star'></i>
                <i class='fas fa-star'></i>
                <i class='fas fa-star'></i>
                <i class='fas fa-star'></i>
                <i class='fas fa-star-half-alt'></i>
                <p> 4.3 out of 5 based on 9,075 reviews</p> <i class='fas fa-star'></i> trustpilot
            </div>
            <div className="footer">
                <p>Terms&conditions  | </p>
                <p>Privacy policy  | </p>
                <p> Contact Us   | </p>
                <p>Accesssibilty </p>
            </div>
            <div className="last">
            <i class='far fa-copyright'></i>
            <p>2024,NOW limited.All rights reserved</p>
            </div>
            
        </div>

    )
}
export default Resume1;
