import React from "react";
import Codemonk from "./codemonk";
import Metasys from "./metasys";
import "./style.css";

function Experience() {
  return (
    <div id="experience" className="exp-wrapper common-pages-wrapper ">
      <text className="title">Experience</text>
      <Codemonk />
      <hr />
      <Metasys />
    </div>
  );
}

export default Experience;
