import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import { Level } from './Level';
import { TrabajosShow } from './TrabajosShow';

const level = ['newbie', 'junior', 'intermediate', 'advanced'];

export const Trabajos = () => {
    return (
        <div className="container-data animate__animated animate__fadeIn">
            <h1 className="title">Trabajos</h1>

            <Router>
                <p className="filtrar">Filtar por dificultad:</p>
                <div className="trabajos">  
                    {
                        level.map((name, i) => {
                            return <Level level={name} key={i} />
                        })
                    }
                </div>
                
                <Switch>
                    <Route exact path="/trabajos/:nivel" component={ TrabajosShow } />

                </Switch>

            </Router>

        </div>
    )
}
