import React from 'react'

export const ImageTrabajo = ({name, src, alt}) => {
    return (
        <div>
            <a href={`../assets/proyectos/${src}index.html`} target="_blank" rel='noopener noreferrer'><img src={`../assets/images/trabajos/${name}.jpg`} alt={alt} /></a>
        </div>
    )
}
