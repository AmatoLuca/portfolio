import React, { useEffect, useRef } from "react";
import Logo from "../components/header/Logo";
//import { NavMenuContext } from "../contexts/NavMenuContext"
import NavMobile from "../components/header/NavMobile";
import Hamburger from "../components/header/Hamburger";

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
  }

  useEffect(() => {
    headerTimeLine.to(line2.current, { duration: 0.06, opacity: 0, ease: "power4.out" })
                  .to(line1.current, { duration: 0.06, rotate: 45, yPercent: 250, ease: "power4.out" })
                  .to(line3.current, { duration: 0.06, rotate: -45, yPercent: -220, eas: "power4.out" }, '-=0.05')
                  .to(navMenu.current, { duration: 0.6, height: '100vh', ease: "power2.in" })            
    // eslint-disable-next-line
  }, [])  


  useEffect(() => {
    console.log('[@@@ REF NAVMENU]', navMenu.current);
  }, [])

  return (
    <div className="header">
      <NavMobile ref={navMenu} />
      <Logo />
      <Hamburger handleToggleClick={handleToggleClick} ref={{ line1, line2, line3 }} />
    </div>
  );
};

export default HeaderController;
