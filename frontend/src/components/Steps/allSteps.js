import React, { useState } from "react";
import { useStep } from "react-hooks-helper";

import Steps1 from "./steps1";
import Steps2 from "./steps2";

const defaultData = {
  name: "",
  email: "",
  mes: "",
  dia: "",
  anio: "",
  username: "",
  arroba: "",
  password: "",
  confirmpassword: ""
};

const steps = [
  { id: "step1" },
  { id: "step2" },
  { id: "step3" },
];
export const AllSteps = () => {
  const [formData, setFormData] = useState(defaultData);
  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  });

  const props = { formData, setFormData, navigation };

  switch (step.id) {
    case "step1":
      return <Steps1 {...props} />;
    case "step2":
      return <Steps2 {...props} />;
  }
};