import React, { useState, useEffect } from 'react'
import { trabajos } from '../data/data-proyectos';
import { ImageTrabajo } from './ImageTrabajo';


export const TrabajosShow = (props) => {

    const [loader, setLoader] = useState(true);

    const nivel = props.match.params.nivel;
    const show = trabajos.filter(n => n.difficulty === nivel);

    useEffect(() => {
        setLoader(true);

        setInterval(() => {
            setLoader(false);
        }, 1000);

    }, [nivel])

    return (
        <div className="container-loader">
            {loader &&
                <img src={`../assets/images/loader.gif`} alt="loader" className="loader" />
            }

            {!loader &&
                <div className="grid-trabajos">
                    {
                        show.map((m) => {
                            return <ImageTrabajo key={m.local} src={m.local} name={m.name} alt={m.alt} />
                        })
                    }
                </div>
            }

        </div>
    )
}
