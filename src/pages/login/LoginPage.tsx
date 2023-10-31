import React from "react";
import "./login.scss"
function LoginPage() {
  return (
    <div className="login">
      <div className="content">
        <div className="card-left">
          <h3>Hello</h3>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, fugit.</span>
        </div>
        <div className="card-right">
          <h3>Sign In</h3>
          <div className="social-media"></div>
          <div className="input-form">
            <input
              type="emal"
              name="email"
              placeholder="Enter your email address"
              id=""
            />
            <input 
              type="password" 
              name="email" 
              id="" 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
