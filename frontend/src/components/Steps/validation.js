import * as yup from "yup"

export const UserSchema = yup.object().shape({
  name: yup
    .string()
    .max(30, "Maximo 30 caracteres")
    .required("Nombre es requerido"),
  email: yup.string().email("Email no valido").required("Email es requerido"),
  mes: yup.string().required("Requerido"),
  dia: yup.string().required("Requerido"),
  anio: yup.string().required("Requerido"),
})

export const UserSchema2 = yup.object().shape({
  username: yup.string().required("Requerido").max(20, "Maximo 20 caracteres"),
  password: yup
    .string()
    .min(8, "Minimo 8 caracteres")
    .required("Contraseña es requerido"),
  confirmpassword: yup
    .string()
    .required("Confirmar la contraseña es requerido"),
})
