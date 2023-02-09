import express from "express"

import { fetchSearch } from "../controllers/search.js"

const router = express.Router()

router.get("/", fetchSearch)

export default router
