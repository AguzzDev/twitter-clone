import jwt from "jsonwebtoken"
import User from "../models/user.js"

export const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers["token"].split(" ")[1]

    if (!token) return res.status(403).json({ message: "No token valid" })

    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.userId = decoded.id

    const user = await User.findById(req.userId, { password: 0 })
    if (!user) return res.status(404).json({ message: "User no found" })
    req.user= user

    next()
  } catch (error) {
    res.status(500).json({ message: "Unathorized" })
  }
}

