import React from 'react'
import {
    NavLink
  } from "react-router-dom";

export const Level = ({level}) => {
    return (
        <div>
            <NavLink to={`/trabajos/${level}`} >{level}</NavLink>
        </div>
    )
}
