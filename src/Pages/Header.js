import { React, useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import githubIcon from "../Images/githubIcon.png";
import linkedinIcon from "../Images/linkedinIcon.png";

function Header() {

  return (
    <header className="header">
      <div className="website">NICOLA GALASSI</div>
      <div className="dots">
        <div id="dot1" className="dot"></div>
        <div id="dot2" className="dot"></div>
        <div id="dot3" className="dot"></div>
        <div id="dot4" className="dot"></div>
      </div>
      <div className="icons">
        <a
          rel="noreferrer"
          href="https://github.com/niconicoSG"
          target="_blank"
        >
          <img alt="" id="github" src={githubIcon} />
        </a>
        <a
          rel="noreferrer"
          href="https://www.linkedin.com/in/nicola-galassi/"
          target="_blank"
        >
          <img alt="" id="linkedin" src={linkedinIcon} />
        </a>
      </div>
    </header>
  );
}

export default Header;
