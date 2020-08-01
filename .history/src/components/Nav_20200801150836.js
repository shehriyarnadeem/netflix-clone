import React from "react";
import "./Nav.css";
const Nav = () => {
  return (
    <div className="nav">
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Netflix_logo.svg/800px-Netflix_logo.svg.png"
        style={{ objectFit: "contain", width: "80px" }}
      />
    </div>
  );
};

export default Nav;
