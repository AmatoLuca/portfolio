import React, { forwardRef } from 'react'

import './nav-mobile.scss'

const NavMobile = forwardRef((props, ref) => {
  return (
    <div className='nav-mobile' ref={ref}>
      NavMobile
   </div>
  )
})

export default NavMobile