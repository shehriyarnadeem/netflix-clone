import React from "react";
import "./Nav.css";
const Nav = () => {
  return (
    <div className="nav">
      <img
        className="nav__logo"
        src="https://www.freepnglogos.com/images/netflix-logo-png-2562.html"
        style={{ objectFit: "contain", width: "80px" }}
      />
    </div>
  );
};

export default Nav;
