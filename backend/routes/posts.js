import express from "express"
import {
  createPost,
  deletePost,
  getPosts,
  getPostById,
  likePost,
  getPostByUser
} from "../controllers/posts.js"
import { verifyToken } from "../middleware/auth.js"

const router = express.Router()

router.get("/", getPosts)
router.get("/:id", getPostById)
router.get("/user/:id", getPostByUser)

router.post("/", verifyToken, createPost)
router.delete("/:id", verifyToken, deletePost)
router.put("/:id", verifyToken, likePost)

export default router
