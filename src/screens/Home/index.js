import React, { useState } from "react";
import "./style.css";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import Profile from "../../assets/images/profile.jpeg";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import { SiDocusign, SiJavascript, SiReact } from "react-icons/si";
import AndroidStudio from "../../assets/logos/android-studio.svg";
import Xcode from "../../assets/logos/xcode.svg";
import NPM from "../../assets/logos/npm.svg";
import GitHub from "../../assets/logos/github.svg";
import Firebase from "../../assets/logos/firebase.svg";
import Sass from "../../assets/logos/sass.svg";
import ReactNative from "../../assets/logos/react-native-1.svg";
import Typescript from "../../assets/logos/typescript.svg";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
function Home() {
  const skillList = [
    {
      logo: AiFillHtml5,
      logoProps: {
        color: "#E65100",
        size: "3rem",
      },
      text: "HTML",
    },
    {
      logo: IoLogoCss3,
      logoProps: {
        color: "#0277BD",
        size: "3rem",
      },
      text: "CSS",
    },
    {
      logo: SiJavascript,
      logoProps: {
        color: "#FFD600",
        size: "3rem",
        style: { background: "black" },
      },
      text: "Javascript",
    },
    {
      logo: SiReact,
      logoProps: {
        color: "#80DEEA",
        size: "3rem",
      },
      text: "React",
    },
  ];

  const skillList2 = [
    {
      src: ReactNative,
      text: "React Native",
    },
    {
      src: AndroidStudio,
      text: "Android Studio",
    },
    {
      src: Xcode,
      text: "Xcode",
    },
    {
      src: GitHub,
      text: "Github",
    },
  ];

  const skillList3 = [
    {
      src: Typescript,
      text: "Typescript",
    },
    {
      src: Firebase,
      text: "Google Firebase",
    },
    {
      src: Sass,
      text: "Sass",
    },
    {
      src: NPM,
      text: "NPM",
    },
  ];

  return (
    <div className="common-pages-wrapper" id="home">
      <div id="home-main-content" className="common-width">
        <div id="home-left-section">
          <text id="home-left-title">React / React Native Developer 👋🏻</text>
          <text id="home-left-decription">
            Hi, I am Ajay Chawada. A passionate Front-end developer holding 4
            years of experience.
          </text>
          <text id="home-left-decription">📍 Mumbai, India 🇮🇳</text>

          <div>
            <a
              href="https://www.linkedin.com/in/ajay-chawada-4530aa174/"
              target={"_blank"}
              rel="noreferrer"
            >
              <FaLinkedin size={"1.25rem"} id="linkedin-icon" />
            </a>
            <a
              href="https://github.com/ajay24897"
              target={"_blank"}
              rel="noreferrer"
            >
              <FaGithubSquare size={"1.25rem"} />
            </a>
          </div>
        </div>
        <div id="home-right-section">
          <img src={Profile} id="profile-image" />
        </div>
      </div>
      <text id="tech-stack-text">Tech Stack</text>

      <div id="skill-conatiner" className="common-width">
        <div id="skills">
          {skillList.map((item) => (
            <div className="skill-wrapper">
              <item.logo {...item.logoProps} className="primary-skill-logo" />
            </div>
          ))}
        </div>
        <div>
          <div id="skills">
            {skillList2.map((item) => (
              <div className="skill-wrapper">
                <img
                  src={item.src}
                  alt={item.text}
                  className="secondary-skill-logo"
                />
              </div>
            ))}
          </div>
          <div id="skills" style={{ marginTop: "2.5rem" }}>
            {skillList3.map((item) => (
              <div className="skill-wrapper">
                <img
                  src={item.src}
                  className="secondary-skill-logo"
                  alt={item.text}
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
