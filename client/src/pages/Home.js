import React from "react";
import headerVid from "./assets/header_video_portrait.mp4";
import "./pages.css";
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div className="header-wrap">
      <video loop muted autoPlay className="split left">
        <source src={headerVid} type="video/mp4" />
      </video>

      <div className="split right">
        <div className="centered">
          <div className="split-title">RECYCLING CHALLENGE</div>

          <button className="cta">
         <Link to="/TheChallenge" style={{color:"white"}}>Enter to Play </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
