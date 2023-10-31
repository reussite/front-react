import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineLogin } from "react-icons/ai";
import "./navbar.scss";
import logo from "../../images/logo.png";
function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-menu">
        <img className="logo" src={logo} alt="logo" title="logo student" />
        <ul>
          <li>
            <NavLink className="navlink" to="/">
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink className="navlink" to="/decouverte">
              Découvir
            </NavLink>
          </li>
          <li>
            <NavLink className="navlink" to="/apropos">
              A propos
            </NavLink>
          </li>
        </ul>
        <div className="connexion">
          <small className="cnx">
          <NavLink className="navlink" to="/login">
            connexion
            </NavLink>
            </small>
          <NavLink className="login" to="/connexion">
            <AiOutlineLogin />
          </NavLink>{" "}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
