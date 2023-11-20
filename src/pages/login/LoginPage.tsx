import React from "react";
import { Link } from "react-router-dom";
import "./login.scss";
import bannerConnexion from "../../images/login.jpg";
function LoginPage() {
  return (
    <>
      <div className="login">
        <div className="content">
          <div className="banner-connextion">
            <img src={bannerConnexion} alt="" />
          </div>
          <div className="formulaire">
            <form action="">
              <h3>Welcome back</h3>
              <div className="input-data">
                <input type="text" name="name" id=""  placeholder="Email"/>
                <input type="password" name="password" id="" />
              </div>
              <small className="forgot-password">
                <Link to="/" className="forgot-password-link">Forgot Password?</Link>
              </small>
              <button type="submit" className="submission">Login in</button>
              <small>
                Don't have an account? <Link to="/">Sing up</Link>{" "}
              </small>
              <button type="submit" className="submission-apple">Login with Apple</button>
              <button type="submit" className="submission-google">Login with Google</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
