import { Form, Input, Button } from "antd"

export default function LoginForm() {
  const [form] = Form.useForm()

  const handleSubmit = values => {
    console.log("Form data: ", values)
  }

  const handleFailedSubmit = error => {
    console.log("Form errors: ", error)
  }

  return (
    <Form
      form={form}
      name="login"
      onFinish={handleSubmit}
      onFinishFailed={handleFailedSubmit}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: "Username is required!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Password is required!" }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}
