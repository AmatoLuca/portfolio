import React, { useContext, useEffect, useState, useRef } from "react";
import Logo from "../components/header/Logo";
import { NavMenuContext } from "../contexts/NavMenuContext"
import NavMobile from "../components/header/NavMobile";

import gsap from 'gsap'

import '../components/header/hamburger.scss'
import '../components/header/logo.scss'
import '../components/header/nav-mobile.scss'

const HeaderController = () => {

  const headerTimeLine = gsap.timeline({ paused: true, reversed: true })

  // GSAP references
  let line1 = useRef(null)
  let line2 = useRef(null)
  let line3 = useRef(null)
  let navMenu = useRef(null)

  function toggleTween(tween) {
    tween.reversed() ? tween.play() : tween.timeScale(1.4).reverse();
  }

  const handleToggleClick = () => {  
    console.log('[@@@ handleToggleClick] : fired');
    if (headerTimeLine.isActive()) return false
    toggleTween(headerTimeLine)

    //burgerTimeLine.reversed(!burgerTimeLine.reversed());
  }

  useEffect(() => {
    headerTimeLine.to(line2 , { duration: 0.06, opacity: 0, ease: "power4.out" })
      .to(line1, { duration: 0.06, rotate: 45, yPercent: 250, ease: "power4.out" })
      .to(line3, { duration: 0.06, rotate: -45, yPercent: -220, eas: "power4.out" }, '-=0.05')
      .to(navMenu.current, { duration: 0.7, height: '100vh', ease: "power2.in" })

      // eslint-disable-next-line
  }, [])  


  useEffect(() => {
    console.log('[@@@ REF NAVMENU]', navMenu);
  }, [])

  return (
    <div className="header">
      {/* <div className='nav-mobile' ref={el => navMenu = el}>NavMobile</div> */}
    
      <NavMobile ref={navMenu} />

      <Logo />

      <div className='burger-button' onClick={handleToggleClick}>
        <div className="burger-button__content">
          <span className='hamb-line-1' ref={el => line1 = el}></span>
          <span className='hamb-line-2' ref={el => line2 = el}></span>
          <span className='hamb-line-3' ref={el => line3 = el}></span>
        </div>
      </div>
    </div>
  );
};

export default HeaderController;
