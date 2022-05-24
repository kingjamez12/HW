import React from "react";
import "../styles/Hero.css";
import logo from "../assets/cartoon-man-computer.png";
import portrait from "../assets/Work_Pic.jpg";

const Hero = () => {
  return (
    <div className="HeroContainer">
      <div className="hero-flex">
        <div className="hero-image-box">
          <img className="hero-image" src={logo} alt="man on computer" />
        </div>
        <div className="hero-text-box">
          <h1 className="title"> Title</h1>
          <p className="text"> Text goes here </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
