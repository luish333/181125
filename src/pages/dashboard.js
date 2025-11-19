import React from "react";
import NavbarPrincipal from "./components/navbar";
import Sidemenu from "./components/sidemenu";
import Kpis from "./components/kpis";


function Dashboard() {
    return (
        <div>
            <NavbarPrincipal/>
            <Sidemenu/>
            <Kpis/>

        </div>

    );
}

export default Dashboard