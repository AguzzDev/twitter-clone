import axios from "axios"

const API = axios.create({ baseURL: "http://localhost:4000" })

const APITOKEN = () => {
  const user = JSON.parse(localStorage.getItem("profile"))

  return axios.create({
    baseURL: "http://localhost:4000",
    headers: { token: `Bearer ${user.token}` },
  })
}

export const fetchPosts = () => API.get("/posts")
export const fetchPostById = (id) => API.get(`/posts/${id}`)
export const getPostByUser = (id) => API.get(`/posts/user/${id}`)
export const createPost = (data) => APITOKEN().post("/posts", data)
export const likePost = (id) => APITOKEN().put(`/posts/${id}`)
export const deletePost = (id) => APITOKEN().delete(`/posts/${id}`)

export const login = (formData) => API.post("/users/login", formData)
export const register = (formData, values) =>
  API.post("/users/register", { formData, values })
export const getUserById = (id) => API.get(`/users/${id}`)
export const updateProfile = (data, id) => APITOKEN().put(`/users/${id}`, data)
export const deleteAccount = (id) => APITOKEN().delete(`/users/${id}`)
