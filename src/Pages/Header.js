import { React, useState, useEffect, useContext} from "react";
import { useLocation } from "react-router-dom";
import githubIcon from "../Images/githubIcon.png";
import linkedinIcon from "../Images/linkedinIcon.png";


function Header() {
  const [active, setActive] = useState("");
  useEffect(()=>{
    const nav1 = document.getElementById("1");
    const class1 = nav1.className;
    if (class1 === "nav-active") {
       setActive("bright")
    } else {
      setActive("dull")
    };
    
  }, []) ;

  return (
    <header className="header">
      <div className="website">NICOLA GALASSI</div>
      <div className="dots">
        <div className={active}></div>
        <div className="dot2"></div>
        <div className="dot3"></div>
        <div className="dot4"></div>
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
