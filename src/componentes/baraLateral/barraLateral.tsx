import { AbrirCerrarSidebar } from "../iconos/iconos"
import { listaSidebarAdmin } from "./tsBarraLateral"
import { IconoItemBarraSVG } from "../iconos/iconos"
import { useBarraLateral } from "./tsBarraLateral"
import { Link } from "react-router-dom"
import { useEffect } from "react"

const ListaSidebar = () => {
  return (
    <ul className="listaSideBarAdmin">
      {listaSidebarAdmin.map((el) => {
        return (
          <li key={el.ruta} className="itemListaSidebarAdmin">
            <Link className="txtAzulOscuro itemLista" to={el.ruta}>
              <IconoItemBarraSVG icono={el.icono} />
              {el.nombre}
            </Link>
          </li>
        )
      })
      }
    </ul>
  )
}

interface props {
  ejecutar: (arg: boolean) => void
}

export const BarraLateral = ({ ejecutar }: props) => {
  const { toogleBarraLateral, visibleBarra } = useBarraLateral()

  useEffect(() => {
    ejecutar(visibleBarra)
  }, [visibleBarra])

  return (
    <div className="d-flex">
      <aside className={`barraLateral ${!visibleBarra ? 'barraNoVisible' : 'barraVisible'}`}>
        <div className='d-flex align-items-center text-white justify-content-center bgAzulOscuro'>
          Nombre plataforma
          <button
            type="button"
            id="btnSideBarOpen"
            className={`p-0 bgAzulOscuro position-relative ${!visibleBarra ? 'btnSobresalido' : 'btnNoSobresalido'}`}
            onClick={toogleBarraLateral}
          >
            <AbrirCerrarSidebar visible={visibleBarra} />
          </button>
        </div>
        <ListaSidebar />
      </aside>
    </div>
  )
}