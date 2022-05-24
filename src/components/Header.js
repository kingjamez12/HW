import React from "react";
import "../styles/Header.css";
import school from "../assets/LehmanLogo.png";

const Header = () => {
  return (
    <div className="nav">
      <div className="logo">
        <img className="school-logo" src={school} />
      </div>
      <div className="nav-bar">nav bar</div>
      <li className="top-contacts"> </li>
    </div>
  );
};

export default Header;
