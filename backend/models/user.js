import mongoose from "mongoose"

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    description: { type: String, default: "Escribe una descripcion" },
    mes: { type: String, required: true },
    dia: { type: String, required: true },
    anio: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    confirmpassword: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
    location: { type: String, default: "Internet" },
    userImage: { type: String, default: "" },
    userBanner: { type: String, default: "" },
  },
  { timestamps: true }
)

export default mongoose.model("User", userSchema)
