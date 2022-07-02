import React from "react";
import Logo from "../components/header/Logo";
import Hamburger from "../components/header/Hamburger";

/* 
   in questo componente metterò un event listener per monitorare 
   la larghezza della viewport e triggerare il corretto menu.

   qui richiamero il contesto del navigator per far scendere il menu, 
   quando il toggle in hamburger sarà azionato. Hamburger innescherà un
   setter acquisito dal contesto
*/

const HeaderController = () => {
  return (
    <div className="header">
      <Logo />
      <Hamburger />
    </div>
  );
};

export default HeaderController;
