import React from 'react'

export const Image = ({name}) => {
    return (
        <div className="img">
            <img src={`./assets/images/tecnologias/logo-${name}.png`} alt={name} />
        </div>

    )
}
