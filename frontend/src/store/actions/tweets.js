import * as api from "../../api"
import { types } from "../types/types"

export const getTweets = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts()

    dispatch({ type: types.LoadTweets, payload: data })
  } catch (error) {
    console.log(error.message)
  }
}

export const getPostsById = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchPostById(id)

    dispatch({ type: types.LoadOneTweet, payload: data })
  } catch (error) {
    console.log(error.message)
  }
}

export const getPostsByUser = (id) => async (dispatch) => {
  try {
    const { data } = await api.getPostByUser(id)

    dispatch({ type: types.LoadTweets, payload: data })
  } catch (error) {
    console.log(error.message)
  }
}
export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post)

    dispatch({ type: types.CreateTweet, payload: data })
  } catch (error) {
    console.log(error.message)
  }
}

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id)

    dispatch({ type: types.LikeTweet, payload: data })
  } catch (error) {
    console.log(error.message)
  }
}

export const deletePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.deletePost(id)

    dispatch({ type: types.DeleteTweet, payload: data })
  } catch (error) {
    console.log(error.message)
  }
}
