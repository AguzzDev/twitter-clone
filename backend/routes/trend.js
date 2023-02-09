import express from "express"

import { getTrends } from "../controllers/trend.js"

const router = express.Router()

router.get("/", getTrends)

export default router
