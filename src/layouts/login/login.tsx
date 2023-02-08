import { LogoCopecRojoSVG } from "../../componentes/iconos/iconos"
import { InputText } from "../../componentes/formComponents/inputText"
import { useState } from "react"
import { Boton } from "../../componentes/formComponents/button"

const LoginForm = () => {
  const [dato, setDato] = useState<any>({
    usuario: '',
    contrasenia: ''
  });

  const alerta = () => {
    alert(JSON.stringify(dato))
  }

  return (
    <form className="d-flex flex-column justify-content-between formLogin">
      <InputText
        funcion={(txt) => { setDato({ ...dato, usuario: txt.trim() }) }}
        valor={dato.usuario}
        place='Usuario'
        tipo='text'
      />
      <InputText
        funcion={(txt) => { setDato({ ...dato, contrasenia: txt.trim() }) }}
        valor={dato.contrasenia}
        place='Contraseña'
        tipo='password'
      />
      <Boton
        texto='Iniciar Sesion'
        funcion={alerta}
      />
    </form>
  )
}

export const Login = () => {

  return (
    <div className="loginLayout mx-5">
      <div className="loginContainer borderAzulOscuro sombra">
        <div className="d-flex justify-content-center pt-5 mt-3">
          <LogoCopecRojoSVG />
        </div>
        <LoginForm />
      </div>
    </div>
  )
}