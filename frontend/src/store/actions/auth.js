import * as api from "../../api"

export const login = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.login(formData)

    dispatch({ type: "AUTH", data })
    history.push("/home")
  } catch (error) {
    console.log(error)
  }
}

export const register = (formData, values, history) => async (dispatch) => {
  try {
    const { data } = await api.register(formData, values)

    dispatch({ type: "AUTH", data })
    history.push("/home")
  } catch (error) {
    console.log(error)
  }
}

export const logout = (history) => async (dispatch) => {
  try {
    dispatch({ type: "LOGOUT" })
    
    history.push("/")
  } catch (error) {
    console.log(error)
  }
}

export const deleteAccount = (id) => async (dispatch) => {
  try {
    await api.deleteAccount(id)

    dispatch({ type: "LOGOUT" })
  } catch (error) {
    console.log(error)
  }
}
