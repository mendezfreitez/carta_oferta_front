import { useState } from "react"
import { LogoRojoSVG, NotificacionesSVG, TresPuntosSVG } from "../iconos/iconos"

interface usuario {
  nombre: String,
  cargo: String
}

const MenuSession = () => {
  return (
    <div className="dropdown">
      <button title="" className="btn btn-secondary btnDropdown bgAzulOscuro dropdown-toggle border10px" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        <TresPuntosSVG />
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li><a className="dropdown-item" href="#">Action</a></li>
        <li><a className="dropdown-item" href="#">Another action</a></li>
        <li><a className="dropdown-item" href="#">Something else here</a></li>
      </ul>
    </div>
  )
}

const RecuadroSession = () => {
  const [admin, setAdmin] = useState<usuario>({
    nombre: 'Un nombre usuario de prueba',
    cargo: 'Un cargo usuario de prueba'
  })

  return (
    <div className="cuadroSesssion bgAzul">
      <div className="cuadroIcono bgAzulOscuro">
        <NotificacionesSVG />
      </div>
      <div className="d-flex">
        <div className="lineaVertical"></div>
        <div className='cuadroCargo'>
          <p className='m-0 tresPuntos usuarioAdmin text-white'>{admin.nombre}</p>
          <p className='m-0 tresPuntos cargoUsuarioAdmin text-white'>{admin.cargo}</p>
        </div>
        <MenuSession />
      </div>
    </div>
  )
}

export const BarraNavegacion = () => {
  return (
    <div className="navegacionBar">
      <div className="contLogoRojo">
        <LogoRojoSVG />
      </div>
      <RecuadroSession />
    </div>
  )
}