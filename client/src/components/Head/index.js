/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import Login from "../../assets/Login@2x.png";
import "./index.css";

function Nav() {
  return (
    <nav className="topnav">
      <div>
        <Link to="/" className="nav-left" style={{color: "black" }}>
          WASTE OF TIME
        </Link>
        <Link to="/Login" >
          <img src={Login} alt="login" className="login" />
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
