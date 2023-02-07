import { LogoCopecRojoSVG } from "../../componentes/iconos/iconos"
import { InputText } from "../../componentes/formComponents/inputText"
import { useState } from "react"

export const Login = () => {
  const [dato, setDato] = useState<string>('')

  function setear(valor: string) {
    setDato(valor)
  }

  return (
    <div className="loginLayout mx-5">
      <div className="loginContainer borderAzulOscuro sombra">
        <div className="d-flex justify-content-center pt-5">
          <LogoCopecRojoSVG />
        </div>

        <InputText
          ejecutar={setear}
          place='vaina'
          data={dato}
        />
      </div>
    </div>
  )
}