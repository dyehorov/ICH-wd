import { Box, Typography, TextField, Button, Paper } from "@mui/material"
import { useState } from "react"

export default function Calculator() {
  const [result, setResult] = useState(null)

  const handleSubmit = (event, operation) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget.form)

    const firstNumber = Number(formData.get("number_1"))
    const secondNumber = Number(formData.get("number_2"))
    let result = null

    switch (operation) {
      case "add":
        result = firstNumber + secondNumber
        break
      case "subtract":
        result = firstNumber - secondNumber
        break
      case "multiply":
        result = firstNumber * secondNumber
        break
      case "divide":
        result =
          secondNumber !== 0
            ? firstNumber / secondNumber
            : "Cannot divide by zero"
        break
      default:
        return
    }

    setResult(result)

    event.currentTarget.form.reset()
  }

  return (
    <Box
      padding="4px"
      style={{ backgroundColor: "#f5f5f5", minHeight: "100vh" }}
    >
      <Box padding="24px">
        <Paper elevation={3} style={{ padding: "24px", marginBottom: "24px" }}>
          <Typography variant="h4" gutterBottom>
            Calculator
          </Typography>

          <form>
            <TextField
              label="Number 1"
              margin="normal"
              fullWidth
              variant="outlined"
              required
              name="number_1"
              type="number"
            />

            <TextField
              label="Number 2"
              margin="normal"
              fullWidth
              variant="outlined"
              required
              name="number_2"
              type="number"
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              style={{ marginTop: "16px" }}
              onClick={event => handleSubmit(event, "add")}
            >
              Add
            </Button>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              style={{ marginTop: "16px" }}
              onClick={event => handleSubmit(event, "subtract")}
            >
              Subtract
            </Button>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              style={{ marginTop: "16px" }}
              onClick={event => handleSubmit(event, "multiply")}
            >
              Multiply
            </Button>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              style={{ marginTop: "16px" }}
              onClick={event => handleSubmit(event, "divide")}
            >
              Divide
            </Button>
          </form>
        </Paper>

        <Typography variant="h5" gutterBottom>
          Result: {result}
        </Typography>
      </Box>
    </Box>
  )
}
