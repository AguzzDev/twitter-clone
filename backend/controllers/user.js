import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"

import User from "../models/user.js"
import PostMessage from "../models/post.js"
dotenv.config()

const jwtSecret = process.env.JWT_SECRET

export const login = async (req, res) => {
  const { usernameOrEmail, password } = req.body

  try {
    const existingUser = await User.findOne({
      $or: [{ username: `@${usernameOrEmail}` }, { email: usernameOrEmail }],
    })

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

    const { email, password: p, ...others } = existingUser._doc
    res.status(200).json({ ...others, token })
  } catch (error) {
    res.status(500).json(error)
  }
}
export const register = async (req, res) => {
  const values = req.body
  try {
    const existingUserByEmail = await User.findOne({ email: values.email })
    if (existingUserByEmail)
      return res.status(400).json({ message: "El email ya existe" })

    const existingUserByUsername = await User.findOne({
      username: values.username,
    })
    if (existingUserByUsername)
      return res.status(400).json({ message: "El username ya existe" })

    if (values.password !== values.confirmpassword)
      return res.status(400).json({ message: "Las contraseñas no coinciden" })

    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(values.password, salt)

    const userValues = {
      ...values,
      username: `@${values.username.trim().replace("@", "")}`,
      password: hashPassword,
    }

    const { confirmpassword, ...restValues } = userValues
    const result = await User.create(restValues)

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

    const user = await User.findOne(
      {
        username: { $regex: `^${usernameWithArroba}$`, $options: "i" },
      },
      { password: 0, email: 0 }
    )

    if (!user) {
      return res.status(203).json({ message: "No existe este usuario" })
    }

    res.status(200).json(user._doc)
  } catch (error) {
    res.status(500).json(error.message)
  }
}
export const getUserPostsLike = async (req, res) => {
  try {
    const data = []
    const user = await User.findById(req.user._id, { password: 0, email: 0 })

    for (let x = 0; x < user.postLikes.length; x++) {
      const postLiked = await PostMessage.findById(user.postLikes[x].postId)

      data.push({ ...data, ...postLiked._doc })
    }

    res.status(200).json(data)
  } catch (error) {
    res.status(500).json(error.message)
  }
}
export const getAllUsers = async (req, res) => {
  try {
    const user = await User.find(
      { _id: { $ne: req.user._id } },
      { password: 0, email: 0 }
    )

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
      { userImage: req.body.userImage }
    )

    const userLikes = await PostMessage.find({
      likeCount: { $elemMatch: { id: req.user._id } },
    })

    if (userLikes) {
      userLikes.forEach(async (post) => {
        await PostMessage.findByIdAndUpdate(post._id, {
          $set: {
            "likeCount.$[].userImage": req.body.userImage,
          },
        })
      })
    }

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
    const user = await User.findByIdAndDelete(req.user._id)

    await PostMessage.deleteMany({ userId: req.params.id })

    res.status(200).json(user)
  } catch (error) {
    res.status(500).json(error.message)
  }
}
