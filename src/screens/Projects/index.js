import React from "react";
import SNKRS from "../../assets/project_banner/snkrs.png";
import todo from "../../assets/project_banner/todo.png";
import done from "../../assets/icons/done.png";
import VoiasAI from "../../assets/project_banner/voiasAI.png";

import snkrLogo from "../../assets/icons/sneakers.png";
import voiceSearchLogo from "../../assets/icons/voice_search.png";

import "./style.css";
import { TbExternalLink } from "react-icons/tb";

function Projects() {
  const project = [
    {
      image: VoiasAI,
      logo: voiceSearchLogo,
      name: "Voias AI",
      description:
        "A Voice assistant app, allows to search query through voice recognition and creates an image from description. Implemented elegant UI and smooth navigation.",
      tech: <b>React Native & OpenAI (ChatGPT & Dall-E)</b>,
      APK: "https://drive.google.com/file/d/1RN2-ABkOp4HVbHp5V35EQn9wgzGkyEAB/view",
    },
    {
      image: SNKRS,
      logo: snkrLogo,
      name: "SNKRS",
      description:
        "Shoe ecommerce app allows users to shop online, browse product catalogs, add items to a cart, and complete purchases.",
      tech: <b>React, Sass, Google Firestore & Firebase authentication</b>,
      webLink: "https://ajay24897.github.io/snkrs/",
    },
    {
      image: todo,
      logo: done,
      name: "Todo",
      description:
        "User would be able to enter the tasks that they need to do. Once they are done with their tasks they can also mark as completed/remove them from the list.",
      tech: <b>React, Typescript & Local storage</b>,
      webLink: "https://ajay24897.github.io/Todo-web-app/",
    },
  ];

  return (
    <div className="common-pages-wrapper" id="projects">
      <div id="page-wrapper" className="common-width">
        <text className="title" data-aos="fade-up">
          Let's check personal projects
        </text>
        {project.map((item, index) => (
          <div
            style={{
              flexDirection: index % 2 ? "row-reverse" : "row",
              overflowX: "hidden",
            }}
            className="wrap-project project-content"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img src={item.image} className="website-images" alt={item.name} />
            <div className="description-wrapper">
              <div className="project-title-wrapper">
                <div>
                  <text className="project-title">{item.name} </text>
                </div>
                <img
                  src={item.logo}
                  className="project-logo "
                  alt={item.name}
                />
              </div>

              <text className="project-description">{item.description}</text>
              <text className="project-tech">{item.tech}</text>

              {!!item?.webLink?.length && (
                <a href={item.webLink} target={"_blank"} rel="noreferrer">
                  <div className="demo-text">
                    <text className="demo-text-space">Live website</text>
                    <TbExternalLink size={"1.25rem"} />
                  </div>
                </a>
              )}

              {!!item?.APK?.length && (
                <a href={item.APK} target={"_blank"} rel="noreferrer">
                  <div className="demo-text">
                    <text className="demo-text-space">APK</text>
                    <TbExternalLink size={"1.25rem"} />
                  </div>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
