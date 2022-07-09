import React, { forwardRef } from 'react'

import './nav-mobile.scss'

const NavMobile = forwardRef((props, ref) => {
  return (
    <div className='nav-mobile' ref={ref}>
      <div className='nav-mobile__inner'>
        <ul className="nav-mobile__links">
          <li><a href="https://www.linkedin.com/in/luca--amato/" target="_blank">LINKEDIN</a></li>
          <li><a href="https://github.com/AmatoLuca" target="_blank">GITHUB</a></li>
          <li className='mobile-contact-label'>CONTACTS</li>
            <div className='nav-mobile__links mobile-contacts'>
              <p className='mobile-mail'>EMAIL: <span>AMATOROCCOLUCA@GMAIL.COM</span></p>
              <p className='mobile-phone'>PHONE: <span>+39 3891985196</span></p>
            </div>
        </ul>
      </div>
   </div>
  )
})

export default NavMobile