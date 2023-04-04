import React from "react";
import SNKRS from "../../assets/project_banner/snkrs.png";
import todo from "../../assets/project_banner/todo.png";
import done from "../../assets/icons/done.png";

import snkrLogo from "../../assets/icons/sneakers.png";
import "./style.css";
import { TbExternalLink } from "react-icons/tb";

function Projects() {
  const project = [
    {
      image: SNKRS,
      logo: snkrLogo,
      name: "SNKRS",
      description:
        "Shoe ecommerce app allows users to shop online, browse product catalogs, add items to a cart, and complete purchases.",
      tech: <b>React, Sass, Google Firestore & Firebase authentication</b>,
      link: "https://ajay24897.github.io/snkrs/",
    },
    {
      image: todo,
      logo: done,
      name: "Todo",
      description:
        "User would be able to enter the tasks that they need to do. Once they are done with their tasks they can also mark as completed/remove them from the list.",
      tech: <b>React, Typescript & Local storage</b>,
      link: "https://ajay24897.github.io/Todo-web-app/",
    },
  ];
  return (
    <div className="common-pages-wrapper" id="projects">
      <div id="page-wrapper" className="common-width">
        <text className="title">Let's check personal projects</text>
        {project.map((item, index) => (
          <div
            style={{
              flexDirection: index % 2 ? "row-reverse" : "row",
            }}
            className="wrap-project project-content"
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
              <text>{item.tech}</text>

              <a href={item.link} target={"_blank"} rel="noreferrer">
                <div className="demo-text">
                  <text className="demo-text-space">Live Demo</text>
                  <TbExternalLink size={"1.25rem"} />
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
