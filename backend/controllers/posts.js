import PostMessage from "../models/post.js"
import User from "../models/user.js"

export const getPosts = async (req, res) => {
  try {
    const post = await PostMessage.find({}).sort({ createdAt: "desc" })

    if (post.length === 0) {
      return res.sendStatus(204)
    }

    res.status(200).json(post)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}
export const getPostById = async (req, res) => {
  try {
    const postId = await PostMessage.findById(req.params.id, {
      password: 0,
      email: 0,
    })

    const userLikes = []
    for (const { userId } of postId.likeCount) {
      const users = await User.findById(userId)
      userLikes.push(users)
    }

    res.status(200).json({ ...postId._doc, likeCount: userLikes })
  } catch (error) {
    res.status(204).json({ message: error })
  }
}
export const getPostByUser = async (req, res) => {
  try {
    const userPosts = await PostMessage.find({ userId: req.params.id }).sort({
      createdAt: "desc",
    })
    res.status(200).json(userPosts)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}
export const createPost = async (req, res) => {
  const { content, file } = req.body.data

  try {
    const newPost = await PostMessage.create({
      name: req.user.name,
      username: req.user.username,
      userImage: req.user.userImage,
      userId: req.user._id,
      range: req.user.range,
      content: content,
      selectedFile: file ? file : [],
      hash:
        content
          .split(" ")
          .filter((value) => value.slice(0, 1).includes("#"))
          .join()
          .replace(/\n/g, "") || null,
    })
    res.status(201).json(newPost)
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}
export const deletePost = async (req, res) => {
  try {
    const findPost = await PostMessage.findById(req.params.id)
    if (req.user._id != findPost.userId && req.user.range != "own") {
      return res.status(403).json({ message: "No tenes permisos" })
    }
    const deletePost = await PostMessage.findByIdAndDelete(req.params.id)

    deletePost.likeCount.map(async ({ userId }) => {
      await User.findByIdAndUpdate(userId, {
        $pull: {
          postLikes: {
            postId: deletePost._id,
          },
        },
      })
    })
    res.status(200).json(deletePost)
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}
export const likePost = async (req, res) => {
  try {
    const post = await PostMessage.findById(req.params.id)
    const userAlreadyLiked = post.likeCount.filter(({ userId }) =>
      userId.includes(req.user._id)
    )

    if (userAlreadyLiked.length === 0) {
      const newLike = await PostMessage.findByIdAndUpdate(req.params.id, {
        $push: {
          likeCount: {
            userId: req.user._id,
          },
        },
      })
      const post = await PostMessage.findById(req.params.id)
      await User.findByIdAndUpdate(req.user._id, {
        $push: {
          postLikes: {
            postId: post._id,
          },
        },
      })

      return res.status(200).json(newLike)
    } else {
      const deleteLike = await PostMessage.findByIdAndUpdate(req.params.id, {
        $pull: { likeCount: { userId: req.user._id } },
      })
      await User.findByIdAndUpdate(req.user._id, {
        $pull: { postLikes: { postId: req.params.id } },
      })
      res.status(201).json(deleteLike)
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
export const createComment = async (req, res) => {
  try {
    const { content, file } = req.body
    const { _id: userId, name, username, userImage, range } = req.user

    const newComment = await PostMessage.findByIdAndUpdate(req.params.id, {
      $push: {
        comments: {
          userId,
          name,
          username,
          userImage,
          range,
          content,
          selectedFile: file ? file : [],
        },
      },
    })
    res.status(201).json(newComment)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
export const deleteComment = async (req, res) => {
  try {
    const findPost = await PostMessage.findById(req.params.id)
    if (req.user._id != findPost.userId && req.user.range != "own") {
      return res.status(403).json({ message: "No tenes permisos" })
    }
    const deleteComment = await PostMessage.findByIdAndUpdate(req.params.id, {
      $pull: {
        comments: {
          _id: req.body.id,
        },
      },
    })
    res.status(200).json(deleteComment)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
