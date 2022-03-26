import { ChevronDownIcon } from "@heroicons/react/solid"
import { Formik, Form, Field } from "formik"

import { IconsMd } from "../icons"
import { Logo } from "../avatar"
import { formInputValues } from "../../data/formInputValues"
import { UserSchema } from "../Steps/validation"

export default function Steps1({ formData, setFormData, navigation }) {
  return (
    <div className="flex flex-col px-10 py-3 overflow-hidden">
      <div className="flex justify-center text-gray-300 fill-current">
        <Logo props="w-10 h-10" />
      </div>
      <div className="text-gray-300">
        <h1 className="my-5 text-2xl font-bold">Crea tu cuenta</h1>

        <Formik
          initialValues={{ name: "", email: "", mes: "", dia: "", anio: "" }}
          validationSchema={UserSchema}
          onSubmit={async(values) => {
            await setFormData(values)
            navigation.next()
          }}
        >
          {({ errors, handleChange, values }) => (
            <Form>
              <div className="flex flex-col space-y-5">
                <div className="py-4 overflow-hidden border rounded-sm border-bordes focus-within:border-blue1">
                  <Field
                    className="w-full pl-5 pr-5 bg-transparent outline-none"
                    placeholder="Nombre"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    autoComplete="off"
                    autoFocus
                  />
                </div>
                {errors.name && <bold className="text-sm">{errors.name}</bold>}
                <div className="py-4 overflow-hidden border rounded-sm border-bordes focus-within:border-blue1">
                  <Field
                    className="w-full pl-5 pr-5 bg-transparent outline-none"
                    placeholder="Correo"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    autoComplete="off"
                  />
                </div>
                {errors.email && <bold className="text-sm">{errors.email}</bold>}
              </div>
              <div className="mt-10">
                <h1 className="font-bold">Fecha de nacimiento</h1>
                <p className="text-sm text-gray-400">
                  Esta información no será pública. Confirma tu propia edad,
                  incluso si esta cuenta es para una empresa, una mascota u otra
                  cosa.
                </p>
              </div>
              <div className="flex justify-between mt-5 space-x-5">
                <div className="flex flex-col w-2/4">
                  <div className="flex py-4 bg-black border rounded-sm border-bordes focus-within:border-blue1">
                    <select
                      className="w-full pl-3 bg-black outline-none"
                      name="mes"
                      onChange={handleChange}
                      value={values.mes}
                    >
                      {formInputValues[0].mes.map(({ value, text }) => (
                        <option value={value}>{text}</option>
                      ))}
                    </select>
                    <IconsMd Icon={ChevronDownIcon} />
                  </div>
                  {errors.mes && <bold className="text-sm">{errors.mes}</bold>}
                </div>

                <div className="flex flex-col w-1/4">
                  <div className="flex  py-4 bg-black border rounded-sm border-bordes focus-within:border-blue1">
                    <select
                      className="w-full pl-3 bg-black outline-none"
                      name="dia"
                      onChange={handleChange}
                      value={values.dia}
                    >
                      {formInputValues[0].dia.map(({ value, text }) => (
                        <option value={value}>{text}</option>
                      ))}
                    </select>
                    <IconsMd Icon={ChevronDownIcon} />
                  </div>
                  {errors.dia && <bold className="text-sm">{errors.dia}</bold>}
                </div>
                <div className="flex flex-col w-2/4">
                  <div className="flex py-4 bg-black border rounded-sm border-bordes focus-within:border-blue1">
                    <select
                      className="w-full pl-3 bg-black outline-none"
                      name="anio"
                      onChange={handleChange}
                      value={values.anio}
                    >
                      {formInputValues[0].anio.map(({ value, text }) => (
                        <option value={value}>{text}</option>
                      ))}
                    </select>
                    <IconsMd Icon={ChevronDownIcon} />
                  </div>
                  {errors.anio && <bold className="text-sm">{errors.anio}</bold>}
                </div>
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
  )
}
