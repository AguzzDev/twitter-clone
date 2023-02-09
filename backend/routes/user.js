import express from "express"

import {
  login,
  register,
  getUserById,
  updateUser,
  deleteAccount,
  getAllUsers,
  getUserPostsLike
} from "../controllers/user.js"
import { verifyToken } from "../middleware/auth.js"

const router = express.Router()

router.post("/login", login)
router.post("/register", register)

router.get("/liked", verifyToken, getUserPostsLike)
router.get("/:id", getUserById)
router.get("/", verifyToken, getAllUsers)

router.put("/:id", verifyToken, updateUser)
router.delete("/:id", verifyToken, deleteAccount)
export default router
