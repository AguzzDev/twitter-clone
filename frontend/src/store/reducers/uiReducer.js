import { types } from "../types/types"

const initialState = {
  open: false
}

export const uiReducer = (ui = initialState, action) => {
  switch (action.type) {
    case types.uiOpenModal:
      return {
        ...ui,
        open: true
      }
    case types.uiCloseModal:
      return {
        ...ui,
        open: false
      }

    default:
      return ui
  }
}

