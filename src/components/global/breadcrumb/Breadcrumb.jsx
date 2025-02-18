import React from "react";
import "../../../styles/global/breadcumb.css";
const Breadcrumb = () => {
  return (
    <nav className="breadcrumb">
      <a href="/" className="breadcrumb_home">
        Home
      </a>
      <span className="breadcrumb_secondary"> / </span>
      <a href="/samantha-doe" className="breadcrumb_secondary">
        Samantha J. Doe
      </a>
    </nav>
  );
};

export default Breadcrumb;
