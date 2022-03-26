import { types } from "../types/types"

const initialState = {
  profile: false,
}

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.getProfile:
      return {
        ...state,
        profile: action.data,
      }

    default:
      return state
  }
}
