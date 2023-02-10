import { useBarraLateral } from "./tsBarraLateral"
import { listaSidebarAdmin } from "./tsBarraLateral"
import { Link } from "react-router-dom"
import { useEffect } from "react"

const ListaSidebar = () => {
  return (
    <ul className="listaSideBarAdmin">
      {listaSidebarAdmin.map((el) => {
        return (
          <li className="itemListaSidebarAdmin">
            <Link className="txtAzulOscuro" to={el.ruta}>{el.nombre}</Link>
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

export const BarraLateral = ({ejecutar}: props) => {
  const { toogleBarraLateral, visibleBarra } = useBarraLateral()

  useEffect(() => {
    ejecutar(visibleBarra)
  }, [visibleBarra])

  return (
    <div className="d-flex">
      <aside className={`barraLateral ${!visibleBarra ? 'barraNoVisible' : 'barraVisible'}`}>
        <div className='d-blobk justify-content-center bgAzulOscuroCopec'>
          <p className='text-white text-center'>
            <span className="inline-block">
              Nombre plataforma
            </span>
            <button
              type="button"
              id="btnSideBarOpen"
              className={`bgAzulOscuroCopec position-relative ${!visibleBarra ? 'btnSobresalido' : 'btnNoSobresalido'}`}
              onClick={toogleBarraLateral}
            >

            </button>
          </p>
        </div>
        <ListaSidebar />
      </aside>
    </div>
  )
}