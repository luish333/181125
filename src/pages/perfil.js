import React from "react";
import NavbarPrincipal from "./components/navbar";
import Sidemenu from "./components/sidemenu";
import Profile from './components/profile';

function Perfil() {

    return (
        <div>
            <NavbarPrincipal />
            <Sidemenu/>
            <Profile/>
    
        </div>

    );

}

export default Perfil;