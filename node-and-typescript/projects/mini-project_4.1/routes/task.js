import express from "express"
import authMiddleware from "../middlewares/authMiddleware.js"
import {
  getTasks,
  createTask,
  deleteTask,
  updateTask,
} from "../controllers/taskControllers.js"

const router = express.Router()

router.get("/tasks", authMiddleware, getTasks)

router.post("/tasks", authMiddleware, createTask)

router.delete("/tasks/:id", authMiddleware, deleteTask)

router.put("/tasks/:id", authMiddleware, updateTask)

export default router
