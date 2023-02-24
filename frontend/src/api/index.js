import axios from 'axios'

const url = 'https://twitter-backend-bdv9.onrender.com'
const API = axios.create({ baseURL: url })

const APITOKEN = () => {
  const user = JSON.parse(localStorage.getItem('profile'))

  return axios.create({
    baseURL: url,
    headers: { token: `Bearer ${user.token}` }
  })
}

export const fetchPosts = () => API.get('/posts')
export const fetchTrends = () => API.get('/trends')
export const fetchPostById = (id) => API.get(`/posts/${id}`)
export const fetchSearch = ({ query, isTrend }) =>
  isTrend
    ? API.get(`/search?q=${query}&trend=true`)
    : API.get(`/search?q=${query}`)
export const createPost = (data) => APITOKEN().post('/posts', data)
export const createComment = (data, id) =>
  APITOKEN().put(`/posts/createComments/${id}`, data)
export const deleteComment = (tweetId, id) =>
  APITOKEN().put(`/posts/deleteComments/${tweetId}`, { id })
export const likePost = (id) => APITOKEN().put(`/posts/${id}`)
export const deletePost = (id) => APITOKEN().delete(`/posts/${id}`)
export const getUserById = (id) => API.get(`/users/${id}`)
export const getAllUsers = () => APITOKEN().get('/users')
export const getPostByUser = (id) => API.get(`/posts/user/${id}`)
export const getPostsLiked = () => APITOKEN().get('/users/liked')
export const updateProfile = (data, id) => APITOKEN().put(`/users/${id}`, data)
export const deleteAccount = (id) => APITOKEN().delete(`/users/${id}`)
