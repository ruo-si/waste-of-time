/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import Login from "../../assets/Login@2x.png";
import "./index.css";

function Nav() {
  return (
    <nav className="topnav"  className="nav-left" >
      <div>
        <Link to="/" style={{marginRight: "30px", color:"black"}}>WASTE OF TIME</Link>

        <Link to="/TheChallenge" style={{marginRight: "30px", color:"black"}} className={window.location.pathname === "/"}>
          The Challenge
        </Link>
      </div>

      <div >
        <Link to="/Login" className={window.location.pathname === "/"}>
          <img class="login" src={Login}  />
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
