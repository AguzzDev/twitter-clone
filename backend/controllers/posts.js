import PostMessage from "../models/post.js"

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find()
    res.status(200).json(postMessages)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const getPostById = async (req, res) => {
  try {
    const postId = await PostMessage.findById(req.params.id)

    res.status(200).json(postId)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const getPostByUser = async (req, res) => {
  try {
    const userPosts = await PostMessage.find({ userId: req.params.id })

    res.status(200).json(userPosts)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const createPost = async (req, res) => {
  const { content, selectedFile } = req.body

  try {
    const newPost = await PostMessage.create({
      name: req.user.name,
      username: req.user.username,
      userImage: req.user.userImage,
      userId: req.user._id,
      isAdmin: req.user.isAdmin,
      content: content,
      selectedFile: selectedFile,
    })

    res.status(201).json(newPost)
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}

export const deletePost = async (req, res) => {
  try {
    const deletePost = await PostMessage.findByIdAndDelete(req.params.id)
    res.status(200).json(deletePost)
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}

export const likePost = async (req, res) => {
  try {
    const userAlreadyLiked = await PostMessage.findById(req.params.id)

    if (userAlreadyLiked.likeCount.length === 0) {
      const newLike = await PostMessage.findByIdAndUpdate(req.params.id, {
        $push: { likeCount: { id: req.user._id } },
      })
      return res.status(200).json(newLike)
    }

    const deleteLike = await PostMessage.findByIdAndUpdate(req.params.id, {
      $pull: { likeCount: { id: req.user._id} },
    })
    res.status(409).json(deleteLike)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
