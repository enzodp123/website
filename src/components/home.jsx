import './home.css';
import React, { useState, useEffect } from 'react';
import imgInicio from '../assets/img-inicio.png';
import logoClientes from '../assets/user.svg';
import logoSenior from '../assets/senior.svg';



function home(){


    return(
    <>
        <section>
        <img src={imgInicio} alt="heroImg" />
            <div>   
            <h1>BEASTMODE</h1>
            <p>tu destino para alcanzar tus objetivos de fitness.
            Explora nuestras rutinas de entrenamiento, consejos de nutrición, y más</p>
                <div>
                    <div>
                        <img src={logoClientes} alt="clientes" />
                        <h2>+20</h2>
                        <h2>Clientes</h2>
                    </div>
                    <div>
                        <img src={logoSenior} alt="profesores" />
                        <h2>Profesores</h2>
                        <h2>Expertos</h2>
                    </div>
                </div>
                <div>
                    <div>
                        
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}

export default home