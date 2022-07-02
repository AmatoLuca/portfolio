import React, { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import './hamburger.scss'

const Hamburger = () => {

  const[isToggleOn, setIsToggleOn] = useState(false)
  const burgerTimeLine = gsap.timeline({ paused: true, reversed: true })

  // GSAP references
  let toggle = useRef(null)
  let line1 = useRef(null)
  let line2 = useRef(null)
  let line3 = useRef(null)

  
  const handleToggleClick = (e) => {  
    console.log('[@@@ onClick] : ', e.target);
    if (burgerTimeLine.isActive()) return false
    toggleTween(burgerTimeLine)
  }

  useEffect(() => {
    burgerTimeLine.to(line2 , { duration: 0.06, opacity: 0, ease: "power4.out" })
      .to(line1, { duration: 0.06, rotate: 45, yPercent: 250, ease: "power4.out" })
      .to(line3, { duration: 0.06, rotate: -45, yPercent: -220, eas: "power4.out" }, '-=0.05')
  }, [])

  // Commute the reverse and play tween state
  function toggleTween(tweenToggle) {
    tweenToggle.reversed() ? tweenToggle.play() : tweenToggle.timeScale(1.5).reverse();
  }
  

  return (
    <div className='burger-button' onClick={handleToggleClick}>
      <div className="burger-button__content">
         <span className='hamb-line-1' ref={el => line1 = el}></span>
         <span className='hamb-line-2' ref={el => line2 = el}></span>
         <span className='hamb-line-3' ref={el => line3 = el}></span>
      </div>
    </div>
  )
}

export default Hamburger