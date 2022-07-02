import React from "react";
import "./main.scss";
import profile from "../../assets/images/profile.jpg";

const Main = () => {
  return (
    <div className="main">
      <div className="profile-pic-container">
        <div className="profile-pic">
          <img src={profile} alt="developer" />
        </div>
      </div>

      <div className="profile-details">
        <div className="profile-intro">
          <div className="dev-grt-1">Hi.</div>
          <div className="dev-grt-2">
           <span className="dev-pre">I am</span>
           <span className="dev-name">Luca</span>
          </div>
        </div>
        <div className="dev-about">
          I am a Designer / Art Director with a primary focus on Digital Design
          and Branding, located in Thessaloniki, Greece.
          <br /> <br />
          I am a Designer / Art Director with a primary focus on Digital Design
          and Branding, located in Thessaloniki, Greece.
        </div>
      </div>
    </div>
  );
};

export default Main;
