import { useState } from "react"
import { Form, Input, Button, Card, Typography, Flex } from "antd"
import "./App.css"

export default function App() {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")

  const handleSubmit = values => {
    setName(values.name)
    setDescription(values.description)
  }

  return (
    <Flex gap={"medium"} align="center" vertical style={{ padding: "30px" }}>
      <Form
        onFinish={handleSubmit}
        name="basic"
        style={{ width: 600, display: "flex", flexDirection: "column" }}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          rules={[{ required: true, message: "Please input description!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Card variant="outlined" style={{ width: 600 }}>
        <Typography.Title level={3}>Submitted data</Typography.Title>

        <p>Name: {name}</p>
        <p>Desctiption: {description}</p>
      </Card>
    </Flex>
  )
}
