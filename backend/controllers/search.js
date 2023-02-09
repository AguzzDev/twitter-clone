import PostMessage from "../models/post.js"
import User from "../models/user.js"

export const fetchSearch = async (req, res) => {
  try {
    const post = await PostMessage.find(
      req.query.trend
        ? { hash: `#${req.query.q}` }
        : { content: { $regex: req.query.q, $options: "i" } }
    ).sort({
      createdAt: "desc",
    })
    const user = await User.find({
      $or: [
        { username: { $regex: req.query.q, $options: "i" } },
        { name: { $regex: req.query.q, $options: "i" } },
      ],
    })

    res.status(200).json({ post, user })
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}
