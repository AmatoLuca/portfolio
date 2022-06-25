import React from "react";
import Hamburger from "./Hamburger";

import './header.scss'

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <span className="logo__span-1">L</span>
        <span className="logo__span-2">U</span>
        <span className="logo__span-3">C</span>
        <span className="logo__span-4 reverse-letter">A</span>
        <span className="logo__span-5"></span>
        <span className="logo__span-6">A</span>
        <span className="logo__span-7">M</span>
        <span className="logo__span-8">A</span>
        <span className="logo__span-9">T</span>
        <span className="logo__span-10">O</span>
      </div>

      <Hamburger />
    </div>
  );
};

export default Header;
