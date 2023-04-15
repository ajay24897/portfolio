import React from "react";
import { HiPhone } from "react-icons/hi";
import { MdEmail } from "react-icons/md";

function Connect() {
  return (
    <div id="connect-wrapper">
      <div className="flex-c-center-h">
        <MdEmail
          size={"4rem"}
          color="#808080"
          data-aos="fade-right"
          data-aos-delay="250"
        />
        <text
          className="about-sub-title"
          data-aos="fade-right"
          data-aos-duration="1250"
        >
          Email
        </text>
        <text
          className="connect-info"
          onClick={() =>
            (document.location.href = "mailto:ajaychawda1997@gmail.com")
          }
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          ajaychawda1997@gmail.com
        </text>
      </div>
      <div className="flex-c-center-h">
        <HiPhone
          size={"4rem"}
          color="#808080"
          data-aos="fade-left"
          data-aos-delay="250"
        />
        <text
          className="about-sub-title"
          data-aos="fade-left"
          data-aos-duration="1250"
        >
          Phone
        </text>

        <text
          className="connect-info"
          onClick={() => {
            navigator.clipboard.writeText("+917021375254");
          }}
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          +91 7021375254
        </text>
      </div>
    </div>
  );
}

export default Connect;
