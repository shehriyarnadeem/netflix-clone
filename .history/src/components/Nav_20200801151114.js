import React from "react";
import "./Nav.css";
const Nav = () => {
  return (
    <div className="nav">
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png"
        style={{ objectFit: "contain", width: "80px", left: 0 }}
      />
    </div>
  );
};

export default Nav;
