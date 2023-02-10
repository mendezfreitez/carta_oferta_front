import { listaSidebarAdmin } from "./tsBarraLateral"
import { Link } from "react-router-dom"

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


export const BarraLateral = () => {
  return (
    <aside className="barraLateral">
      <div className='d-flex justify-content-center bgAzulOscuroCopec'>
        <span className='text-white py-3'>Nombre plataforma</span>
      </div>
      <ListaSidebar />
    </aside>
  )
}