import * as api from "../../api"
import { types } from "../types/types"

export const getUserById = (id) => async (dispatch) => {
  try {
    const { data } = await api.getUserById(id)

    dispatch({ type: types.getProfile, data })
  } catch (error) {
    console.log(error)
  }
}

export const updateProfile = (params) => async (dispatch) => {
  console.log(params);
  try {
    const { data } = await api.updateProfile(params, params.user)

    dispatch({ type: "UPDATE", data })
  } catch (error) {
    console.log(error)
  }
}
