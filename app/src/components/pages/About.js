import React from "react";
import CodeBar from "../CodeBar";
import "../../css/About.css";
// import resume from "../../images/cur_resume.pdf";
import myImage from "../../images/me.jpg";

const About = () => {
  return (
    <div className="ab-root">
      <CodeBar rowAmount={35} />
      <div className="ab-content">
        <h2>Said Fatah</h2>
        <h3>Software Engineer</h3>

        <div className="about-image-container">
           <img src={myImage} />
        </div>
        <p>
          I am more than a web developer. I am an engineer that is passionate
          about designing, developing, and shipping production quality
          technology. I strive to bring ideas to life, let me work with you and
          let us see what we can make! I am currently working remotly at tribe community platform from Ouarzazate, Morroco and
          yes, it is hot here. I have been programming and designing games, apps,
          and programs since I was 16 and have a strong passion to create high
          quality applications.
        </p>
        {/* <a href={resume} alt="resume" className="resume">
          Resume
        </a> */}
      </div>
    </div>
  );
};

export default About;
