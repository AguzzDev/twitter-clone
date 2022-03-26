import { useState } from "react"

export const useModal = (ref) => {
  const [open, setOpen] = useState(false)
  const handleOpen = (num) => {
    console.log(ref.current.value);
    console.log(num)
    // if (refModal.current.value == e) {
    //   setOpen(true)
    // }
  }
  const handleClose = () => {
    setOpen(false)
  }
  return { open, handleOpen, handleClose }
}
