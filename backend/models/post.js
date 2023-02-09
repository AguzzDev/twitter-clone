import mongoose from "mongoose"

const postSchema = mongoose.Schema(
  {
    userId: { type: String },
    name: { type: String },
    username: { type: String },
    userImage: { type: String },
    range: { type: String },
    content: { type: String },
    selectedFile: { type: Array },
    hash: { type: String },
    likeCount: [
      {
        userId: { type: String },
      },
    ],
    comments: [
      {
        userId: { type: String },
        name: { type: String },
        username: { type: String },
        userImage: { type: String },
        range: { type: String },
        content: { type: String },
        selectedFile: { type: Array },
        createdAt: { type: Date, default: Date.now },
        likeCount: [
          {
            userId: { type: String },
          },
        ],
      },
    ],
  },
  { timestamps: true }
)

const PostMessage = mongoose.model("PostMessage", postSchema)

export default PostMessage
