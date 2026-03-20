import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  TextField,
  Button,
  Paper,
} from "@mui/material"

import { useState } from "react"

function AppBarComponent() {
  const [inputValues, setInputValues] = useState({})

  const handleSubmit = event => {
    event.preventDefault()

    const name = event.target.elements["name"].value
    const email = event.target.elements["email"].value

    setInputValues({ name: name, email: email })

    event.target.reset()
  }

  return (
    <Box
      padding="4px"
      style={{ backgroundColor: "#f5f5f5", minHeight: "100vh" }}
    >
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Material UI Form</Typography>
        </Toolbar>
      </AppBar>

      <Box padding="24px">
        <Paper elevation={3} style={{ padding: "24px", marginBottom: "24px" }}>
          <Typography variant="h4" gutterBottom>
            Enter your data
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              label="Name"
              margin="normal"
              fullWidth
              variant="outlined"
              required
              name="name"
            />

            <TextField
              label="Email"
              margin="normal"
              fullWidth
              variant="outlined"
              required
              name="email"
              type="email"
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              style={{ marginTop: "16px" }}
            >
              Send
            </Button>
          </form>
        </Paper>

        <Paper elevation={3} style={{ padding: "24px" }}>
          <Typography variant="h5" gutterBottom>
            Entered data:
          </Typography>

          <Typography>
            <strong>Name:</strong> {inputValues.name}
          </Typography>

          <Typography>
            <strong>Email:</strong> {inputValues.email}
          </Typography>
        </Paper>
      </Box>
    </Box>
  )
}
export default AppBarComponent
