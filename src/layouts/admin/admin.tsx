import { useEffect, useState } from "react"
import { BarraNavegacion } from "../../componentes/barraNavegacion/navegacionAdmin"
import { BarraLateral } from "../../componentes/baraLateral/barraLateral"

export const AdminLayout = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    console.log({visible});
  },[visible])

  return (
    <div>
      <BarraNavegacion />
      <div className='d-flex'>
        <BarraLateral ejecutar={(arg: boolean) => { setVisible(arg) }} />
        <div className={`contenedorAplicacion ${visible ? 'contAdminComprimido' : 'contenedorAdminDesComprimido'}`}>

        </div>
      </div>
    </div>
  )
}