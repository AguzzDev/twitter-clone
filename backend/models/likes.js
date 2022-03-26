import mongoose from "mongoose"

const likesSchema = mongoose.Schema(
  {
    userId: { type: String, required: true },
    username: { type: String, required: true },
    post: { type: Array, required: true },
  },
  { timestamps: true }
)

export default mongoose.model("Likes", likesSchema)
