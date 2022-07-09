import React, { useState, createContext } from 'react'

export const NavMenuContext = createContext()

const NavMenuProvider = ({ children }) => {

  const[isMenuOpen, setIsMenuOpen] = useState(false)
  const defaultValue = { isMenuOpen, setIsMenuOpen}

  return (
    <NavMenuContext.Provider value={defaultValue}>
      {children}
    </NavMenuContext.Provider>
  )
}

export default NavMenuProvider