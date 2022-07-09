import React, { useEffect, forwardRef } from 'react'

import './hamburger.scss'

const Hamburger = forwardRef((props, ref) => {

  useEffect(() => {
    console.log('[@@ LINE 1 REF] : ', ref.line1.current);
    console.log('[@@ LINE 2 REF] : ', ref.line3.current);
    console.log('[@@ LINE 3 REF] : ', ref.line3.current);
  }, [ref])

  return (
    <div className='burger-button' onClick={props.handleToggleClick}>
      <div className="burger-button__content">
         <span className='hamb-line-1' ref={ref.line1}></span>
         <span className='hamb-line-2' ref={ref.line2}></span>
         <span className='hamb-line-3' ref={ref.line3}></span>
      </div>
    </div>
  )
})

export default Hamburger