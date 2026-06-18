import Task from "../models/Task.js"

export const getTasks = async (req, res) => {
  try {
    const user = req.user

    console.log(user)

    const tasks = await Task.find({
      user: user.id,
    })

    console.log(tasks)

    res.status(200).json({ success: true, tasks, user })
  } catch (error) {
    res.status(500).json({ succes: false, message: error.message })
  }
}

export const createTask = async (req, res) => {
  try {
    const { title, description } = req.body
    const user = req.user

    const newTask = {
      title,
      description,
      user: user.id,
    }

    await Task.create(newTask)

    res.status(201).json({
      success: true,
      message: "Task successfully created",
      data: newTask,
    })
  } catch (error) {
    console.log(error)

    res.status(500).json({ success: false, message: error.message })
  }
}
