import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"

import User from "../models/user.js"
import PostMessage from "../models/post.js"
dotenv.config()

const jwtSecret = process.env.JWT_SECRET

export const login = async (req, res) => {
  const { email, password } = req.body
  try {
    const existingUser = await User.findOne({ email })

    if (!existingUser)
      return res.status(400).json({ message: "El usuario no existe" })

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    )

    if (!isPasswordCorrect)
      return res.status(404).json({ message: "Contraseña incorrecta" })

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      jwtSecret,
      { expiresIn: "30d" }
    )

    const { ...others } = existingUser._doc
    res.status(200).json({ ...others, token })
  } catch (error) {
    res.status(500).json(error)
  }
}
export const register = async (req, res) => {
  const values = [{ ...req.body.formData, ...req.body.values }]
  const { name, email, mes, dia, anio, username, password, confirmpassword } =
    values[0]

  try {
    const existingUser = await User.findOne({ email })

    if (existingUser)
      return res.status(400).json({ message: "El usuario ya existe" })

    if (password !== confirmpassword)
      return res.status(400).json({ message: "Las contraseñas no coinciden" })

    const salt = await bcrypt.genSalt(12)
    const hashPassword = await bcrypt.hash(password, salt)

    const result = await User.create({
      email,
      name,
      username: `@${username}`,
      password: hashPassword,
      confirmpassword: hashPassword,
      dia,
      mes,
      anio,
    })

    const token = jwt.sign({ email: result.email, id: result._id }, jwtSecret, {
      expiresIn: "30d",
    })

    const { ...others } = result._doc
    res.status(200).json({ ...others, token })
  } catch (error) {
    res.status(500).json(error.message)
  }
}

export const getUserById = async (req, res) => {
  try {
    const usernameWithArroba = `@${req.params.id}`

    const user = await User.findOne({
      username: { $regex: `^${usernameWithArroba}$`, $options: "i" },
    })

    res.status(200).json(user)
  } catch (error) {
    res.status(500).json(error.message)
  }
}

export const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.user._id, req.body, {
      new: true,
    })

    await PostMessage.updateMany(
      { username: req.user.username },
      { userImage: req.body.userImage },
    )
    
    const token = jwt.sign({ email: user.email, id: user._id }, jwtSecret, {
      expiresIn: "30d",
    })

    const { ...others } = user._doc
    res.status(200).json({ ...others, token })
  } catch (error) {
    res.status(500).json(error.message)
  }
}

export const deleteAccount = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id)

    await PostMessage.deleteMany({ userId: req.params.id })

    res.status(200).json(user)
  } catch (error) {
    res.status(500).json(error.message)
  }
}