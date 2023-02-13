import { useEffect, useState } from "react"
import { BarraNavegacion } from "../../componentes/barraNavegacion/navegacionAdmin"
import { BarraLateral } from "../../componentes/baraLateral/barraLateral"
import { Outlet } from "react-router-dom"

export const AdminLayout = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    console.log({ visible });
  }, [visible])

  return (
    <div>
      <BarraNavegacion />
      <div className='d-flex'>
        <BarraLateral ejecutar={(arg: boolean) => { setVisible(arg) }} />
        <div className={`contApp ${visible ? 'contAdminComprimido' : 'contenedorAdminDesComprimido'}`}>
          <Outlet />
        </div>
      </div>
    </div>
  )
}