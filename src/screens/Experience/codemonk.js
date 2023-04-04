import React, { useState } from "react";
import { ExperienceCodemonk } from "../../constants";
import "./style.css";

function Codemonk() {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      {ExperienceCodemonk.map((item) => (
        <div className="experience-list-wrapper common-width">
          <div className="company-name">
            <text className="company-name-text">{item.companyName}</text>
            <text className="duration-text">{item.duration}</text>
          </div>
          <div className="project-name-wrapper">
            {item.projectNames.map((text, index) => (
              <>
                <text className="project-name">{text}</text>
                <text> : {item.projectType[index]}</text>
              </>
            ))}
          </div>
          <text className="skills-used">
            Skills - {item.techStack.join(", ")}
          </text>

          <div>
            {item.module.map(
              (mouleName, index) =>
                (index <= 1 || (index > 1 && showMore)) && (
                  <div className="flex-coloumn" style={{ marginTop: ".5rem" }}>
                    <text className="module-name">{mouleName}</text>
                    <div className="flex-column">{item.moduleInfo[index]}</div>
                  </div>
                )
            )}
            <div className="other-info-wrapper">{item.otherInfo}</div>
          </div>

          <text
            id="toggle-button-text"
            onClick={() => setShowMore((prev) => !prev)}
          >
            {!showMore ? "Show More" : "Show Less"}
          </text>
        </div>
      ))}
    </>
  );
}

export default Codemonk;
