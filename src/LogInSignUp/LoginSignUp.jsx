import React, { useState } from "react";
import './LoginSignUp.css'

import email_icon from '../Assets/email.png'
import user_icon from '../Assets/person.png'
import password_icon from '../Assets/password.png'

const LoginSignUp = () => {

    const [action, setAction] = useState("LogIn");

    return (
        <div className="container">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action === "LogIn" ? <div></div> : <div className="input">
                    <img src={user_icon} alt="" />
                    <input type="text" placeholder="Name" />
                </div>}
            </div>

            <div className="input">
                <img src={email_icon} alt="" />
                <input type="email" placeholder="Email Id" />
            </div>

            <div className="input">
                <img src={password_icon} alt="" />
                <input type="password" placeholder="Password" />
            </div>

            {action==="Sign Up"?<div></div>:<div className="forgot-password">Lost Password? <span>Click Here</span></div>
}
            <div className="submit-container">
                <div className={action === "LogIn" ? "submit gray" : "submit"} onClick={() => { setAction("Sign Up") }}>Sign Up</div>
                <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => { setAction("LogIn") }}>LogIn</div>
            </div>
        </div>
    )
}
export default LoginSignUp