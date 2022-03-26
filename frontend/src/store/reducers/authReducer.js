const initialState = {
  authData: null,
}

export const authReducer = (auth = initialState, action) => {
  switch (action.type) {
    case "AUTH":
    case "UPDATE":
      localStorage.setItem("profile", JSON.stringify({ ...action.data }))

      return {
        ...auth,
        authData: JSON.parse(localStorage.getItem("profile")),
      }
    case "LOGOUT":
      localStorage.removeItem("profile")
      return {
        ...auth,
        authData: null,
      }

    default:
      return auth
  }
}
