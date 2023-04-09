import React from "react";
import { HiPhone } from "react-icons/hi";
import { MdEmail } from "react-icons/md";

function Connect() {
  return (
    <div id="connect-wrapper">
      <div className="flex-c-center-h">
        <MdEmail size={"4rem"} color="#808080" />
        <text className="about-sub-title">Email</text>
        <text
          className="connect-info"
          onClick={() =>
            (document.location.href = "mailto:ajaychawda1997@gmail.com")
          }
        >
          ajaychawda1997@gmail.com
        </text>
      </div>
      <div className="flex-c-center-h">
        <HiPhone size={"4rem"} color="#808080" />
        <text className="about-sub-title">Phone</text>

        <text
          className="connect-info"
          onClick={() => {
            navigator.clipboard.writeText("+917021375254");
          }}
        >
          +91 7021375254
        </text>
      </div>
    </div>
  );
}

export default Connect;
