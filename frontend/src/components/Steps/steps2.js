import { useState } from "react";
import { Formik, Field, Form } from "formik";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid";

import { IconsSm } from "../icons";
import { UserSchema2 } from "./validation";
import { LayoutStep } from "./LayoutStep";
import { FieldInput } from "components/Input/FieldInput";

export default function Steps2({ setFormData, navigation }) {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const ButtonShowPassword = () => (
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
  );
  return (
    <LayoutStep>
      <Formik
        initialValues={{
          username: "",
          password: "",
          confirmpassword: "",
        }}
        validationSchema={UserSchema2}
        onSubmit={async (values) => {
          setFormData((prev) => {
            return { ...prev, ...values };
          });

          navigation.next();
        }}
      >
        {() => (
          <Form autoComplete="off">
            <div className="flex flex-col space-y-5 mt-3">
              <FieldInput
                label="Nombre de Usuario"
                name="username"
                type="text"
                placeholder="@NoobMaster69"
              />
              <FieldInput
                label="Contraseña"
                name="password"
                showPassword={showPassword}
              >
                <ButtonShowPassword />
              </FieldInput>
              <FieldInput
                label="Repeti la contraseña"
                name="confirmpassword"
                showPassword={showPassword}
              >
                <ButtonShowPassword />
              </FieldInput>
            </div>

            <button
              type="submit"
              className="w-full py-2 font-bold rounded-full bg-blue1 mt-5"
            >
              Siguiente
            </button>
            <button
              onClick={() => navigation.previous()}
              className="w-full py-2 font-bold rounded-full bg-blue1 mt-5"
            >
              Volver
            </button>
          </Form>
        )}
      </Formik>
    </LayoutStep>
  );
}
