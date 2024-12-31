import './header.css'
import React, { useState, useEffect } from 'react';

function Header() {
    const [active,desactive] = useState(null);

    const togglecolor = (index) => {
        desactive(index);
    };


    return(
        <>
            <header className='header'>
                <div className="container-logo" >
                    <h1>Beast</h1>
                    <h1>Mode</h1>
                </div>
                <nav  className='nav-bar'>
                    <a  onClick={()=> togglecolor(0)}  className={active === 0 ? 'active' : 'desactive'} href="#">Inicio</a>
                    <a  onClick={()=> togglecolor(1)}  className={active === 1 ? 'active' : 'desactive'} href="#">Entrenamiento</a>
                    <a  onClick={()=> togglecolor(2)}  className={active === 2 ? 'active' : 'desactive'} href="#">Nutricion</a>
                    <a  onClick={()=> togglecolor(3)}  className={active === 3 ? 'active' : 'desactive'} href="#">IMC</a>
                    <a  onClick={()=> togglecolor(4)}  className={active === 4 ? 'active' : 'desactive'} href="#">Contacto</a>
                </nav>
            </header>
        </>
    )
}

export default Header