import React from "react";
import "./style.css";
import { FaFileDownload, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import Profile from "../../assets/images/profile.jpeg";
import Resume from "../../assets/files/Ajay Chawada resume front-end developer.pdf";

import { skillList, skillList2 } from "../../constants";

function Home() {
  return (
    <div className="common-pages-wrapper" id="home">
      <div id="home-main-content" className="common-width">
        <div id="home-left-section" data-aos="fade-right">
          <text id="home-left-title">React JS & React Native Developer 👋🏻</text>
          <text id="home-left-decription">
            Hi, I am Ajay Chawada. A passionate Front-end developer holding 4.5+
            years of experience.
          </text>
          <text id="home-left-decription">📍 Mumbai, India 🇮🇳</text>
          <div>
            <a
              href="https://www.linkedin.com/in/ajay-chawada-4530aa174/"
              target={"_blank"}
              rel="noreferrer"
            >
              <FaLinkedin size={"1.25rem"} className="icon" />
            </a>
            <a
              href="https://github.com/ajay24897"
              target={"_blank"}
              rel="noreferrer"
              className="icon"
            >
              <FaGithubSquare size={"1.25rem"} />
            </a>

            <a
              className="button"
              href={Resume}
              download="Ajay Chawada Resume.pdf"
            >
              <FaFileDownload size={"1.25rem"} />
            </a>
          </div>
        </div>
        <div id="home-right-section" data-aos="fade-left">
          <img src={Profile} id="profile-image" alt="profile" />
        </div>
      </div>
      <text id="tech-stack-text" data-aos="fade-up">
        Tech Stack
      </text>

      <div id="skill-conatiner" className="common-width">
        <div id="skills">
          {skillList.map((item) => (
            <div
              className="skill-wrapper"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <item.logo {...item.logoProps} className="primary-skill-logo" />
            </div>
          ))}
        </div>
        <div>
          <div id="skills" className="skill-list-2">
            {skillList2.map((item) => (
              <div
                className="skill-wrapper"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <img
                  src={item.src}
                  alt={item.text}
                  className="secondary-skill-logo"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
