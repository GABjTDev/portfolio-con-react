import React from 'react'

export const Inicio = () => {
    return (
        <div className="container-data inicio animate__animated animate__fadeIn">
            <h2 className="title">Gabriel Rea</h2>
            
            <p className="descripcion">
                Este es un portafolio de practica hecho con React
            </p>

            <div className="datos">
                <ul>
                    <li>Datos</li>
                    <li>25 años</li>
                    <li>3 años de experiencia</li>
                    <li>Ingles A-2</li>
                </ul>

                <ul>
                    <li>Cursos</li>
                    <li>Ed.Team</li>
                    <li>Platzi</li>
                    <li>Udemy</li>
                </ul>
            </div>

            <div className="image animate__animated animate__backInRight">
                <img src={ './assets/images/gabu.png' } alt="Gabriel Rea" />
            </div>
        </div>
    )
}
