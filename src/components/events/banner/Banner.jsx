import React from "react";
import "../../../styles/event/banner.css";
import Breadcrumb from "../../global/breadcrumb/Breadcrumb";
const Banner = () => {
  return (
    <div className="container_banner">
      <div className="container_content_banner">
        <Breadcrumb />
        <div className="content_banner">
          <p className="text_banner">
            Explore Our Events ! Join transformative experiences on Hivi.
          </p>
          <img
            src="/images/events/banner.svg"
            alt="Event Banner"
            className="img_banner"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
