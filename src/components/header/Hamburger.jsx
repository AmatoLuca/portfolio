import React, { useRef, useEffect, useContext, useState, forwardRef } from 'react'
import gsap from 'gsap'

import './hamburger.scss'

const Hamburger = forwardRef((props, ref) => {

  const [isState, setIsState] = useState(false)

  const isActive = useRef(false)

  const burgerTimeLine = gsap.timeline({ paused: true })

  // GSAP references
  let line1 = useRef(null)
  let line2 = useRef(null)
  let line3 = useRef(null)
  

  const handleToggleClick = () => {  
    console.log('[@@@ handleToggleClick] : fired');
    /* isActive.current ? isActive.current = false : isActive.current = true 
    console.log('[@@@ ACTIVE ] : ', isActive.current);
    burgerTimeLine.reversed(!burgerTimeLine.reversed());
    props.setIsState(!props.isState)
    console.log('end handler'); */
    props.setIsState(!props.isState)
  }

  useEffect(() => {
    burgerTimeLine.to(line2 , { duration: 0.06, opacity: 0, ease: "power4.out" })
      .to(line1, { duration: 0.06, rotate: 45, yPercent: 250, ease: "power4.out" })
      .to(line3, { duration: 0.06, rotate: -45, yPercent: -220, eas: "power4.out" }, '-=0.05')
      burgerTimeLine.reverse();      
      // eslint-disable-next-line
      //return ()=>{ burgerTimeLine.reverse() }
  }, [burgerTimeLine])  

  useEffect(() => {
    console.log('[@@@ NAV MENU CONTEXT VALUE] : ', props.navMenuState);
  }, [props.navMenuState])

  useEffect(() => {
    console.log('[@@@ IS STATE] : ', isState);
  }, [isState])

  return (
    <div className='burger-button' ref={ref} onClick={handleToggleClick}>
      <div className="burger-button__content">
         <span className='hamb-line-1' ref={el => line1 = el}></span>
         <span className='hamb-line-2' ref={el => line2 = el}></span>
         <span className='hamb-line-3' ref={el => line3 = el}></span>
      </div>
    </div>
  )
})

export default Hamburger