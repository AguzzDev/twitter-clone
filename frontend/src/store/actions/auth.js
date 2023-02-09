import * as api from "api"
import { types } from "store/types/types"

export const login = (formData, history) => async (dispatch) => {
  dispatch({ type: types.uiLoadAuth })
  const response = await fetch("http://localhost:5000/users/login", {
    method: "POST",
    body: JSON.stringify(formData),
    headers: {
      "Content-type": "application/json",
    },
  })
  const data = await response.json()

  dispatch({
    type: types.login,
    payload: { data, error: data.message || null },
  })
  if (!data.message) {
    history.go("/home")
  }
}

export const register = (value, history) => async (dispatch) => {
  const response = await fetch("http://localhost:5000/users/register", {
    method: "POST",
    body: JSON.stringify(value),
    headers: {
      "Content-type": "application/json",
    },
  })
  const data = await response.json()

  dispatch({
    type: types.register,
    payload: { data, error: data.message || null },
  })
  if (!data.message) {
    history.go("/home")
  }
}

export const logout = (history) => async (dispatch) => {
  try {
    dispatch({ type: types.logout })

    history.go("/")
  } catch (error) {
    console.log(error)
  }
}

export const deleteAccount = (id) => async (dispatch) => {
  try {
    await api.deleteAccount(id)

    dispatch({ type: types.logout })
  } catch (error) {
    console.log(error)
  }
}
