import { InputText } from "../../componentes/formComponents/inputText"
import { LogoCopecRojoSVG } from "../../componentes/iconos/iconos"
import { Boton } from "../../componentes/formComponents/button"
import { useLogin } from "./tsLogin"

const LoginForm = () => {
  const { formik, setValor } = useLogin()

  // const alerta = () => { console.log(formik) }

  return (
    <form className="d-flex flex-column justify-content-between formLogin">
      <InputText
        funcion={(txt) => { setValor('usuario', txt.replace(/ /g, '')) }}
        valor={formik.values.usuario}
        place='Usuario'
        tipo='text'
      />
      <InputText
        funcion={(txt) => { setValor('contrasenia', txt.replace(/ /g, '')) }}
        valor={formik.values.contrasenia}
        place='Contraseña'
        tipo='password'
      />
      <Boton
        texto='Ingresar'
        funcion={formik.submitForm}
      />
    </form>
  )
}

export const Login = () => {

  return (
    <div className="loginLayout mx-5">
      <div className="loginContainer borderAzulOscuro sombra">
        <div className="pt-5 mt-3 headerContLoginForm">
          <LogoCopecRojoSVG />
          <h3 className="txtIniciarSesion">Iniciar sesión</h3>
        </div>
        <LoginForm />
      </div>
    </div>
  )
}