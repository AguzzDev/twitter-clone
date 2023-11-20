import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import http from "http";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";

dotenv.config();

import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/user.js";
import trendRoutes from "./routes/trend.js";
import searchRoutes from "./routes/search.js";

const app = express();
const server = http.createServer(app);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors({ origin: process.env.CORS_ORIGIN }));
app.use(morgan("dev"));

app.use("/posts", postRoutes);
app.use("/users", userRoutes);
app.use("/trends", trendRoutes);
app.use("/search", searchRoutes);

mongoose
  .connect(process.env.DB_CNN, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() =>
    server.listen(process.env.PORT, () =>
      console.log(`Server open on port ${process.env.PORT}`)
    )
  )
  .catch((error) => console.log(error.message));
