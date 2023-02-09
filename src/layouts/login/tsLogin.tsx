import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface login {
  usuario: string,
  contrasenia: string,
}

const loginSchema = Yup.object().shape({
  usuario: Yup
    .string()
    .email('Correo no válido')
    .required('falta usuariuo'),
  contrasenia: Yup
    .string()
    .required('no puede estar vacio')
});

export const useLogin = () => {
  const [objLogin, setObjLogin] = useState({
    usuario: '',
    contrasenia: ''
  });

  const formik = useFormik<login>({
    initialValues: objLogin,
    validationSchema: loginSchema,
    onSubmit: () => {
      console.log(formik)
    }
  });

  const setValor = (key: string, txt: string) => {
    formik.setValues({ ...formik.values, [key]: txt })
  }

  return {
    objLogin, setObjLogin, formik, setValor
  }
}