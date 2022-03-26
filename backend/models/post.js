import mongoose from "mongoose"

const postSchema = mongoose.Schema(
  {
    userId: { type: String },
    name: { type: String },
    username: { type: String },
    userImage: { type: String },
    isAdmin: { type: Boolean },
    content: { type: String },
    selectedFile: { type: String },
    likeCount: [{ id: { type: String } }],
  },
  { timestamps: true }
)

const PostMessage = mongoose.model("PostMessage", postSchema)

export default PostMessage
