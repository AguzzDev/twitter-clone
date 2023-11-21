import { Formik, Form } from "formik";

import { formInputValues } from "data/formInputValues";
import { UserSchema } from "../Steps/validation";
import { LayoutStep } from "./LayoutStep";
import { FieldInput } from "../Input/FieldInput";
import { SelectInput } from "../Input/SelectInput";

export default function Steps1({ setFormData, navigation }) {
  return (
    <LayoutStep>
      <h1 className="my-5 text-2xl font-bold">Crea tu cuenta</h1>

      <Formik
        initialValues={{ name: "", email: "", mes: "", dia: "", anio: "" }}
        validationSchema={UserSchema}
        onSubmit={async (values) => {
          await setFormData(values);
          navigation.next();
        }}
      >
        {() => (
          <Form data-test-id="form" autoComplete="off">
            <section className="flex flex-col space-y-4">
              <FieldInput
                label="Nombre"
                name="name"
                type="text"
                placeholder="Nombre"
              />
              <FieldInput
                label="Correo"
                name="email"
                type="text"
                placeholder="example@example.com"
              />

              <div className="pt-3">
                <h1 className="font-bold">Fecha de nacimiento</h1>
                <p className="text-sm text-gray-400">
                  Esta información no será pública. Confirma tu propia edad,
                  incluso si esta cuenta es para una empresa, una mascota u otra
                  cosa.
                </p>
              </div>
              <div className="flex justify-between pt-2 space-x-5">
                <SelectInput name="mes" data={formInputValues[0].mes} />
                <SelectInput name="dia" data={formInputValues[0].dia} />
                <SelectInput name="anio" data={formInputValues[0].anio} />
              </div>
            </section>

            <button
              type="submit"
              className="w-full py-2 font-bold rounded-full bg-blue1 mt-5"
            >
              Siguiente
            </button>
          </Form>
        )}
      </Formik>
    </LayoutStep>
  );
}
