import { useState } from "react"
import { useHistory } from "react-router-dom"
import { Formik, Field, Form } from "formik"

import { Logo } from "../avatar"
import { IconsSm } from "../icons"
import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid"
import { useDispatch } from "react-redux"
import { register } from "../../store/actions/auth"
import { UserSchema2 } from "./validation"

export default function Steps2({ formData, setFormData }) {
  const dispatch = useDispatch()
  const history = useHistory()
  const [showPassword, setShowPassword] = useState(false)

  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword)
  }

  return (
    <>
      <div className="flex flex-col px-10 py-3 overflow-hidden">
        <div className="flex justify-center text-gray-300 fill-current">
          <Logo props="w-10 h-10" />
        </div>
        <div className="text-gray-300">
          <h1 className="my-5 text-2xl font-bold">Datos para tu cuenta</h1>

          <Formik
            initialValues={{
              username: "",
              password: "",
              confirmpassword: "",
            }}
            validationSchema={UserSchema2}
            onSubmit={async (values) => {
              await dispatch(register(formData, values, history))
            }}
          >
            {({ errors, handleChange, values }) => (
              <Form>
                <div className="flex flex-col space-y-5">
                  <div className="py-4 overflow-hidden border rounded-sm border-bordes focus-within:border-blue1">
                    <Field
                      className="w-full pl-5 pr-5 bg-transparent outline-none"
                      placeholder="Nombre de usuario"
                      name="username"
                      value={values.username}
                      onChange={handleChange}
                      autoComplete="off"
                      autoFocus
                    />
                  </div>
                  {errors.username && (
                    <bold className="text-sm">{errors.username}</bold>
                  )}
                  <div className="flex px-5 py-4 overflow-hidden border rounded-sm border-bordes focus-within:border-blue1">
                    <Field
                      className="w-full pr-5 bg-transparent outline-none"
                      placeholder="Contraseña"
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      autoComplete="off"
                    />
                    <button
                      className="w-5 h-5"
                      type="button"
                      onClick={() => handleShowPassword()}
                    >
                      {showPassword ? (
                        <IconsSm Icon={EyeIcon} />
                      ) : (
                        <IconsSm Icon={EyeOffIcon} />
                      )}
                    </button>
                    <div className="cursor-pointer"></div>
                  </div>
                  {errors.password && (
                    <bold className="text-sm">{errors.password}</bold>
                  )}
                  <div className="flex px-5 py-4 overflow-hidden border rounded-sm border-bordes focus-within:border-blue1">
                    <Field
                      className="w-full pr-5 bg-transparent outline-none"
                      placeholder="Repetir la contraseña"
                      type={showPassword ? "text" : "password"}
                      handleShowPassword={handleShowPassword}
                      name="confirmpassword"
                      value={values.confirmpassword}
                      onChange={handleChange}
                      autoComplete="off"
                    />
                    <button
                      className="w-5 h-5"
                      type="button"
                      onClick={() => handleShowPassword()}
                    >
                      {showPassword ? (
                        <IconsSm Icon={EyeIcon} />
                      ) : (
                        <IconsSm Icon={EyeOffIcon} />
                      )}
                    </button>
                    <div className="cursor-pointer"></div>
                  </div>
                  {errors.confirmpassword && (
                    <bold className="text-sm">{errors.confirmpassword}</bold>
                  )}
                </div>
                <div className="flex mt-10 xl:mt-14">
                  <button
                    type="submit"
                    className="w-full py-2 font-bold rounded-full bg-blue1"
                  >
                    Siguiente
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  )
}
