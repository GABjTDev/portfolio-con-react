import React from 'react'
//data
import { tecnologia } from '../data/data-tecnologias'


//Componentes
import { Image } from './Image'

export const Tecnologias = () => {

    return (
        <div className="container-data animate__animated animate__fadeIn">
            <h2 className="title">Tecnologias</h2>

            
            <div className="grid-img animate__animated animate__fadeInLeft">

                {
                    tecnologia.map((name, i) => {
                        return <Image key={i} name={name} />
                    })
                }
                    
            </div>

        </div>
    )
}
