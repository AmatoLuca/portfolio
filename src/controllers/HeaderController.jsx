import React, { useContext, useEffect } from "react";
import Logo from "../components/header/Logo";
import Hamburger from "../components/header/Hamburger";
import NavMobile from "../components/header/NavMobile"
import { NavMenuContext } from "../contexts/NavMenuContext"

/* 
   in questo componente metterò un event listener per monitorare 
   la larghezza della viewport e triggerare il corretto menu.

   qui richiamero il contesto del navigator per far scendere il menu, 
   quando il toggle in hamburger sarà azionato. Hamburger innescherà un
   setter acquisito dal contesto
*/

const HeaderController = () => {

  const menuContext = useContext(NavMenuContext)

  useEffect(() => {
    console.log('[@@@ IS MENU OPEN CONTEXT] : ', menuContext.isMenuOpen);
  }, [menuContext.isMenuOpen])

  return (
    <div className="header">
      <NavMobile /> 
      <Logo />
      <Hamburger toggleAction={menuContext.setIsMenuOpen} stateMenu={menuContext.isMenuOpen} />
    </div>
  );
};

export default HeaderController;
