
import React, { useState } from 'react';
import './Login.css';
function App1() {
    const [Door, setDoor] = useState(false)
    const HandleSignup = () => {
        setDoor(true)
    }
    const HandleLogin = () => {
        setDoor(false)
    }
    return (
        <div className="parent">
            <div className='div1'>
                <img src='Resume_UI_pic.png' alt='img'></img>
            </div>
            <div className='div2'>
                {Door === false ? (
                    <form id='loginform'>
                        <h2 id='userlogin'> USER LOGIN</h2><span></span>
                        <label>Enter your E-mail ID</label>
                        <input type='email' placeholder='E-mail ID' required></input>
                        <label>Enter your Password</label>
                        <input type='password' placeholder='Password' required></input>
                        <button className='login-btn' type="submit">Login</button>
                        <div id='login'>
                            <p>Don't have an Account?</p>
                            <span onClick={HandleSignup}>SignUp</span>
                        </div>
                    </form>
                ) : (
                    <form id='signup'>
                        <h2 id='usersignup'>USER SIGNUP</h2>
                        <label>Enter Your Name</label>
                        <i class="fa fa-user" id='user'></i>
                        <input type='text' placeholder='Enter your name' required></input>
                        <label>Enter Your Email</label>
                        <i class="material-icons"></i>
                        <input type='email' placeholder='Enter your email' required></input>
                        <label>Password</label>
                        <input type='password' placeholder='Create your password' required></input>
                        <label>Confirm Password</label>
                        <input type='password' placeholder='Confirm Password' required></input>
                        <button className='signup-btn' type="submit">Submit</button>
                        <div id='login'>
                            <p>Already have an Account?</p>
                            <span onClick={HandleLogin}>Login</span>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}
export default App1;
