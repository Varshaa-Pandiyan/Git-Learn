import { useState } from "react";
import './Page3.css';
import resumelogo from './resumelogop.png'
import curves from './curves.png'


function Resumes() {
    return(
<div>
<a href="#" ><img src={resumelogo}className="resumelogop"></img> </a>
<div>
<i class='fas fa-briefcase'></i>
</div>
<div className="exp">
<h1>How much experience do you have?</h1>
</div>
 <div className="empty">
<img src={curves}></img>
</div> 

<p className="better">We can give you better advice and guidance if we know.</p>

<div className="border">
<button>No experience</button><i class="fa fa-check-circle"></i>
<button>Entry-level</button><i class="fa fa-check-circle"></i>
<button>Mid-level</button><i class="fa fa-check-circle"></i>
<button>Senior</button><i class="fa fa-check-circle"></i>
</div>


<a href="#"><button className="continue">continue</button></a>

<div className="foot">
                <a href="#">Terms </a>
                <p>|</p>
                <a href="#">Privacy policy</a>
                <p>|</p>
                <a href="#"> Contact Us</a>
               
            </div>
            <div className="lasts">
            <i class='far fa-copyright'></i>
            <p>2024,NOW limited.All rights reserved</p>
            </div>


</div>
    )
    
}export default Resumes