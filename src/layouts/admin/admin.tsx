import { BarraNavegacion } from "../../componentes/barraNavegacion/navegacionAdmin"
import { BarraLateral } from "../../componentes/barraLateral"

export const AdminLayout = () => {
  return (
    <div>
      <BarraNavegacion />
      <div className='d-flex'>
        <BarraLateral />
        <div className='contenedorAplicacion'>

        </div>
      </div>
    </div>
  )
}