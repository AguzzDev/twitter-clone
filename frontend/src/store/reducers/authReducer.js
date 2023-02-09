import { types } from "store/types/types"

const initialState = {
  data: null,
  loading: true,
  error: null,
}

export const authReducer = (auth = initialState, action) => {
  switch (action.type) {
    case types.uiLoadAuth:
      return {
        ...auth,
        loading: true,
      }
    case types.login:
    case types.register:
    case types.update:
      !action.payload.error &&
        localStorage.setItem("profile", JSON.stringify(action.payload.data))

      return {
        error: action.payload.error,
        loading: false,
        data: JSON.parse(localStorage.getItem("profile")) || [],
      }
    case types.logout:
      localStorage.removeItem("profile")
      return {
        error: null,
        loading: false,
        data: null,
      }

    default:
      return auth
  }
}
