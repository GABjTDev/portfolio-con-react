import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Inicio } from '../components/Inicio'
import { Tecnologias } from '../components/Tecnologias'
import { Trabajos } from '../components/Trabajos'

export const AppRouter = () => {
    return (
        <Switch>
            <Route exact path="/" component={ Inicio } />
            <Route exact path="/inicio" component={ Inicio } />
            <Route exact path="/tecnologias" component={ Tecnologias } />
            <Route exact path="/trabajos" component={ Trabajos } />

            <Redirect to="/" />
        </Switch>
    )
}
