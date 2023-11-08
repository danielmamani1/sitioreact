import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import Rutas from './ruteo/Rutas'
import BarraNavegacion from './ruteo/BarraNavegacion'
import BarraRutasProtected from './ruteo/BarraRutasProtected'

const App = () => {
  return (
    <div style={{background:"cyan"}}>
      <h1>App.js</h1>
      <Router>
        <BarraNavegacion></BarraNavegacion>
        <Rutas />
      </Router>
    </div>
  )
}

export default App