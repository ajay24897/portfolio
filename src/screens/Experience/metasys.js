import React from "react";
import { ExperienceMetasys } from "../../constants";

function Metasys() {
  return (
    <>
      {ExperienceMetasys.map((item) => (
        <div className="experience-list-wrapper common-width">
          <div className="company-name">
            <text className="company-name-text">{item.companyName}</text>
            <text className="duration-text">{item.duration}</text>
          </div>
          <div>
            {item.projectNames.map((text, index) => (
              <div className="project-name-wrapper">
                <text className="project-name">{text}</text>
                <text> : {item.projectType[index]}</text>
                {item.moduleInfo[index]}
              </div>
            ))}
          </div>

          <div className="other-info-wrapper">{item.otherInfo}</div>
        </div>
      ))}
      {/* </div> */}
    </>
  );
}

export default Metasys;
