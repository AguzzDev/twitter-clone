import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import morgan from "morgan"

dotenv.config()

import postRoutes from "./routes/posts.js"
import userRoutes from "./routes/user.js"

const app = express()

const Whitelist = ["http://localhost:3000"]

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors({ origin: Whitelist }))
app.use(morgan("dev"))

app.use("/posts", postRoutes)
app.use("/users", userRoutes)

const CONNECTION_URL = process.env.DB_CNN
const PORT = process.env.PORT || 5000

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => app.listen(PORT, () => console.log(`Server abierto en ${PORT}`)))
  .catch((error) => console.log(error.message))
