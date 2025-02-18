import React from "react";
import "../../../styles/global/header.css";

const Header = () => {
  return (
    <div className="container_header">
      <div className="container_menubar_header">
        <img src="/images/global/logo.png" alt="Logo" />
        <div className="menubar_header">
          <div className="btn_header">
            <p className="text_header">Homepage</p>
          </div>
          <div className="item_menubar_header btn_header">
            <p className="text_header">Discover</p>
            <img src="/images/global/CaretDown.svg" className="icon_down" />
          </div>
          <div className="item_menubar_header btn_header">
            <p className="text_header_event">Event</p>
            <img src="/images/global/CaretDown.svg" className="icon_down" />
          </div>
        </div>
      </div>
      <div className="container_login_signup">
        <div className="btn_header">
          <p className="text_login_signup">Join as a Seer</p>
        </div>
        <div className="btn_header">
          <p className="text_login_signup">Sign In</p>
        </div>
        <div className="btn_signup btn_header">
          <p className="text_signup">Signup</p>
        </div>
      </div>
      <div className="container_menubar_mobile">
        <img src="/images/global/menu.svg" />
      </div>
    </div>
  );
};

export default Header;
