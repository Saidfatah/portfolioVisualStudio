import React from "react";
import "../css/Sidebar.css";

// Images
import fileIcon from "../images/file_ico.svg";
import githubIcon from "../images/github_ico.svg";
import linkedinIcon from "../images/linkedin_ico.svg";
import mailIcon from "../images/mail_ico.svg";

 
const Sidebar = () => {
  return (
    <div className="sb-root">
      <div className="sb-item active">
        <a href="#">
          <img src={fileIcon} alt="home menu" />
        </a>
      </div>
      <div className="sb-item">
        <a href="https://github.com/Saidfatah" target="__blank">
          <img src={githubIcon} alt="GitHub" />
        </a>
      </div>
   
      <div className="sb-item">
        <a
          href="https://www.linkedin.com/in/said-fatah-100782163/"
          target="__blank"
        >
          <img src={linkedinIcon} alt="LinkedIn" className="linkedin" />
        </a>
      </div>
      <div className="sb-item"  >
        <a href="mailto: said_designer@outlook.com"  >
          <img src={mailIcon} alt="LinkedIn" className="linkedin" />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
