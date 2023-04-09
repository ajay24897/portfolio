import React from "react";
import "./style.css";
import { HiLink } from "react-icons/hi";
import Connect from "./connect";
import DegreeIcon from "../../assets/icons/education.png";
import HobbiesIcon from "../../assets/icons/hobbies.png";
import CertificateIcon from "../../assets/icons/certificate.png";
import ContributeIcon from "../../assets/icons/jigsaw.png";

function About() {
  const certificatesList = [
    {
      text: "Javascript course by Jonas Schmedtman",
      link: "https://www.udemy.com/certificate/UC-2ed55c2b-a90f-401e-98bd-1180ca9760d6/",
    },
    {
      text: "React - Hackerrank",
      link: "https://www.hackerrank.com/certificates/ece190b93d41",
    },
    {
      text: "Javascript - Hackerrank",
      link: "https://www.hackerrank.com/certificates/81de0e66208a",
    },
  ];

  const openSource = [
    {
      text: "react-native-voice-control",
      link: "https://www.npmjs.com/package/@metasys96/react-native-voice-control",
    },
    {
      text: "react-native-form-fields",
      link: "https://www.npmjs.com/package/@metasys96/react-native-form-fields",
    },
  ];

  return (
    <div className="common-pages-wrapper" id="about">
      <div className="common-width">
        <div className="flex-r-center">
          <text className="title">More About me</text>
        </div>

        <div className="about-row">
          <div
            className="flex-column-about hobbies-shadow about-card"
            id="education"
          >
            <img
              className="about-icons"
              src={DegreeIcon}
              alt={"Degree-icons"}
            />
            <text className="about-sub-title">Education</text>
            <text className="about-text">B.Tech from Mumbai university 👨🏻‍🎓</text>
            <text className="about-text">
              St. Francis insitute of technology - 2019
            </text>
          </div>
          <div className="flex-column-about hobbies-shadow about-card">
            <img
              className="about-icons"
              src={ContributeIcon}
              alt={"contribute-icons"}
            />

            <text className="about-sub-title">Open-source Packages</text>

            {openSource.map(({ text, link }) => (
              <text className="about-text">
                <a href={link} target={"_blank"} rel="noreferrer">
                  {text} <HiLink />
                </a>
              </text>
            ))}
          </div>
        </div>
        <div className="about-row">
          <div className="flex-column-about hobbies-shadow about-card">
            <img
              className="about-icons"
              src={CertificateIcon}
              alt={"certificate-icon"}
            />

            <text className="about-sub-title">Certifications</text>

            {certificatesList.map(({ text, link }) => (
              <text className="about-text">
                <a href={link} target={"_blank"} rel="noreferrer">
                  {text} <HiLink />
                </a>
              </text>
            ))}
          </div>

          <div className="flex-column-about hobbies-shadow about-card">
            <img
              className="about-icons"
              src={HobbiesIcon}
              alt={"Hobbies-icon"}
            />

            <text className="about-sub-title">Hobbies</text>
            <text className="about-text">
              Building projects & Upskilling 📈
            </text>
            <text className="about-text">
              Trekking, Listening to music & Singing 😅
            </text>
            <text className="about-text">Travelling 🚗</text>
          </div>
        </div>
      </div>

      <div className="common-width" id="contact">
        <div id="connect-text">
          <text className="title">Let's Connect</text>
          <Connect />
        </div>
      </div>
    </div>
  );
}

export default About;
