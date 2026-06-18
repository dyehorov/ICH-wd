import express from "express"
import authMiddleware from "../middlewares/authMiddleware.js"
import { getTasks, createTask } from "../controllers/taskControllers.js"

const router = express.Router()

router.get("/tasks", authMiddleware, getTasks)

router.post("/tasks", authMiddleware, createTask)

// router.get("/tasks", authMiddleware, getTasks)

// router.get("/tasks", authMiddleware, getTasks)

export default router
