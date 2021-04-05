import React from 'react'
import { Link } from 'react-router-dom'

export const Menu = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/inicio">Inicio</Link></li>
                <li><Link to="/tecnologias">Tecnologias</Link></li>
                <li><Link to="/trabajos">Trabajos</Link></li>
            </ul>
        </nav>
    )
}
