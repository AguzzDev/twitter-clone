import React, { useState } from "react"
import { useStep } from "react-hooks-helper"

import Steps1 from "./steps1"
import Steps2 from "./steps2"
import Steps3 from "./steps3"

const steps = [{ id: "step1" }, { id: "step2" }, { id: "step3" }]
export const AllSteps = () => {
  const [formData, setFormData] = useState("")
  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  })

  const props = { formData, setFormData, navigation }

  switch (step.id) {
    case "step1":
      return <Steps1 {...props} />
    case "step2":
      return <Steps2 {...props} />
    case "step3":
      return <Steps3 {...props} />
  }
}
