import * as api from "api"
import { types } from "store/types/types"

export const getTweets = () => async (dispatch) => {
  try {
    dispatch({ type: types.uiLoadPost, payload: { value: "tweets" } })
    const { data, status } = await api.fetchPosts()

    dispatch({ type: types.LoadTweets, payload: { data, status } })
  } catch (error) {
    console.log(error.message)
  }
}
export const getTrends = () => async (dispatch) => {
  try {
    dispatch({ type: types.uiLoadPost, payload: { value: "trends" } })
    const { data, status } = await api.fetchTrends()

    dispatch({ type: types.LoadTrends, payload: { data, status } })
  } catch (error) {
    console.log(error.message)
  }
}
export const getPostsById = (id) => async (dispatch) => {
  try {
    dispatch({ type: types.uiLoadPost, payload: { value: "tweet" } })
    const { data, status } = await api.fetchPostById(id)

    dispatch({ type: types.LoadOneTweet, payload: { data, status } })
  } catch (error) {
    console.log(error.message)
  }
}
export const getPostsByUser = (id) => async (dispatch) => {
  try {
    dispatch({ type: types.uiLoadPost, payload: { value: "tweets" } })
    const { data, status } = await api.getPostByUser(id)

    dispatch({ type: types.LoadTweets, payload: { data, status } })
  } catch (error) {
    console.log(error.message)
  }
}
export const fetchSearch = (q) => async (dispatch) => {
  try {
    dispatch({ type: types.uiLoadPost, payload: { value: "search" } })
    const queryIsHash = q.includes("#") ? q.substring(1) : q

    const { data, status } = await api.fetchSearch({
      query: queryIsHash,
      isTrend: q.includes("#"),
    })
    dispatch({ type: types.LoadSearch, payload: { data, status } })
  } catch (error) {
    console.log(error.message)
  }
}
export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post)

    dispatch({ type: types.CreateTweet, payload: data })
    dispatch(getTweets())
    dispatch(getTrends())
  } catch (error) {
    console.log(error.message)
  }
}
export const likePost = (id, history) => async (dispatch) => {
  try {
    await api.likePost(id)
    history.location.pathname.includes("status")
      ? dispatch(getPostsById(id))
      : dispatch(getTweets())
  } catch (error) {
    console.log(error.message)
  }
}
export const createComment =
  ({ data, id }) =>
  async (dispatch) => {
    try {
      await api.createComment(data, id)
      dispatch(getPostsById(id))
    } catch (error) {
      console.log(error.message)
    }
  }
export const deleteComment =
  ({ tweetId, id }) =>
  async (dispatch) => {
    try {
      await api.deleteComment(tweetId, id)
      dispatch(getPostsById(tweetId))
    } catch (error) {
      console.log(error.message)
    }
  }
export const deletePost = (id, history) => async (dispatch) => {
  try {
    const { data } = await api.deletePost(id)
    history.push("/home")

    dispatch({ type: types.DeleteTweet, payload: data })
  } catch (error) {
    console.log(error.message)
  }
}
