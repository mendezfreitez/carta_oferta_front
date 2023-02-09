import { useState } from 'react'
import { BrowserRouter as Router } from "react-router-dom"
import './assets/css/estilos.css'
import './assets/css/responsividad.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import { RutasAdmin } from './rutas/rutasAdmin'
import { RutasPracticante } from './rutas/rutasPracticante'
import { RutasLogin } from './rutas/rutasLogin'
import { Footer } from './componentes/footer/footer'

function App() {
  const [dato, setDato] = useState<Number | undefined>(1);

  return (
    <>
      <div className="App">
        <Router>
          {dato === 0 && <RutasLogin />}
          {dato === 1 && <RutasAdmin />}
          {dato === 2 && <RutasPracticante />}
        </Router >
        <Footer />
      </div >
    </>
  )
}

export default App
