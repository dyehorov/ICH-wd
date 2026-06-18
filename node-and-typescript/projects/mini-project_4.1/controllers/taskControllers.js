import Task from "../models/Task.js"

export const getTasks = async (req, res) => {
  try {
    const { status, startDate, endDate } = req.query

    const filter = {
      user: req.user,
    }

    if (status) {
      filter.status = status
    }

    if (startDate || endDate) {
      filter.createdAt = {}

      if (startDate) {
        filter.createdAt.$gte = new Date(startDate)
      }

      if (endDate) {
        filter.createdAt.$lte = new Date(endDate)
      }
    }

    const tasks = await Task.find(filter)

    res.status(200).json({
      success: true,
      count: tasks.length,
      tasks,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}

export const createTask = async (req, res) => {
  try {
    const { title, description } = req.body

    const newTask = await Task.create({
      title,
      description,
      user: req.user,
    })

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

export const deleteTask = async (req, res) => {
  try {
    const taskId = req.params.id
    const user = req.user

    const task = await Task.findByIdAndDelete(taskId)

    res
      .status(200)
      .json({ success: true, message: "Task successfully deleted", task })
  } catch (error) {
    res.status(500).json({ succes: false, message: error.message })
  }
}

export const updateTask = async (req, res) => {
  try {
    const { title, description, status, date } = req.body
    const user = req.user
    const taskId = req.params.id

    const updatedTask = await Task.findByIdAndUpdate(
      taskId,
      {
        title,
        description,
        status,
        user: req.user,
        createdAt: date,
      },
      {
        returnDocument: "after",
        runValidators: true,
      },
    )

    res.status(201).json({
      success: true,
      message: "Task successfully updated",
      data: updatedTask,
    })
  } catch (error) {
    console.log(error)

    res.status(500).json({ success: false, message: error.message })
  }
}
