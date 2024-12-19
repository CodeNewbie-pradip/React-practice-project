import React from "react"
import { useState } from "react"

export default function AuthForm(){
    const[isLogin, setIsLogin]=useState(true);
    return(
        <div className="container">
            <div className="form-container">
                <div className="form-toggle">
                    <button className={isLogin ? 'active': ""} onClick={()=>setIsLogin(true)}>Login </button>
                    <button className={!isLogin ? 'active': ""} onClick={()=>setIsLogin(false)}>Signup </button>
                </div>
                {isLogin ? <>
                <div className="form">
                    <h2>Login Form</h2>
                    <input type="email" id="email" name="email" placeholder="Enter Your Email"/>
                    <input type="password" id="password" name="password" placeholder="Enter Your Password"/>
                    <a href="#">Forgot Password</a>
                    <button>Login</button>
                    <p>Not a member ?<a href="#" onClick={()=>setIsLogin(false)}>signup now</a></p>
                </div>
                </>:<>
                <div className="form">
                    <h2>Sign Up</h2>
                    <input type="email" placeholder="Enter Your Email"/>
                    <input type="password" placeholder="Enter your password"/>
                    <input type="password" placeholder="Enter your confirm password"/>
                    <button >Sign Up</button>
                    </div>
                </>}
            </div>
        </div>
    )
}