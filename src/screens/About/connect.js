import React from "react";
import { HiPhone } from "react-icons/hi";
import { MdEmail } from "react-icons/md";

function Connect() {
  return (
    <div id="connect-wrapper">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <MdEmail size={"4rem"} color="#808080" />
        <text className="about-sub-title">Email</text>
        <text style={{ marginLeft: ".5rem", marginBottom: "2rem" }}>
          ajaychawda1997@gmail.com
        </text>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "0.5rem",
        }}
      >
        <HiPhone size={"4rem"} color="#808080" />
        <text className="about-sub-title">Phone</text>

        <text style={{ marginLeft: ".5rem", size: "1rem" }}>
          +91 7021375254
        </text>
      </div>
    </div>
  );
}

export default Connect;
