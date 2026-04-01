import { Box, List, Checkbox, Button, Modal, Input, InputGroup } from "rsuite"

import "rsuite/dist/rsuite.css"
import { useState } from "react"

export default function TasksComponent() {
  const [tasks, setTasks] = useState([])
  const [inputValue, setInputValue] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false)

  const onAddTask = () => {
    const newTask = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    }

    setTasks(prev => [...prev, newTask])

    setInputValue("")
    setIsModalOpen(false)
  }

  return (
    <Box p={20}>
      <Button onClick={() => setIsModalOpen(true)} mb={10}>
        Add new task
      </Button>
      <Modal
        keyboard={false}
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <Modal.Header>
          <Modal.Title>Add new task</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <InputGroup mb={20}>
            <Input
              placeholder="Enter a task"
              value={inputValue}
              onChange={setInputValue}
            />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setIsModalOpen(false)} appearance="subtle">
            Cancel
          </Button>
          <Button onClick={onAddTask} appearance="primary">
            Add Task
          </Button>
        </Modal.Footer>
      </Modal>

      <List bordered>
        {tasks.length === 0 ? (
          <List.Item>No items</List.Item>
        ) : (
          tasks.map(item => (
            <List.Item
              key={item.id}
              style={{ display: "flex", alignItems: "center" }}
            >
              {item.text} <Checkbox ml={"auto"} checked={item.completed} />
            </List.Item>
          ))
        )}
      </List>
    </Box>
  )
}
