import React, { useState, createContext } from 'react'

export const NavMenuContext = createContext()

const NavMenuProvider = ({ children }) => {

  const [fakeState, setFakeState] = useState('This is a fake state');

  const defaultValue = {fakeState}

  return (
    <NavMenuContext.Provider value={defaultValue}>
      {children}
    </NavMenuContext.Provider>
  )
}

export default NavMenuProvider