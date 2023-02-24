import * as api from 'api'
import { types } from 'store/types/types'

export const getUserById = (id) => async (dispatch) => {
  try {
    dispatch({ type: types.uiLoadProfile, payload: { value: 'profile' } })
    const { data, status } = await api.getUserById(id)

    dispatch({ type: types.getProfile, payload: { data, status } })
  } catch (error) {
    console.log(error)
  }
}

export const getPostsLiked = () => async (dispatch) => {
  try {
    dispatch({ type: types.uiLoadProfile, payload: { value: 'postLiked' } })
    const { data, status } = await api.getPostsLiked()

    dispatch({ type: types.getPostsLiked, payload: { data, status } })
  } catch (error) {
    console.log(error)
  }
}

export const getAllUsers = () => async (dispatch) => {
  try {
    dispatch({ type: types.uiLoadProfile, payload: { value: 'profiles' } })
    const { data, status } = await api.getAllUsers()

    dispatch({ type: types.getAllUsers, payload: { data, status } })
  } catch (error) {
    console.log(error)
  }
}

export const updateProfile = (params) => async (dispatch) => {
  try {
    const { data } = await api.updateProfile(params, params.user)

    dispatch({ type: types.update, data })
  } catch (error) {
    console.log(error)
  }
}
