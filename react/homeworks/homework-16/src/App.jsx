import { useState } from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogTitle from "@mui/material/DialogTitle"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import "./App.css"

function App() {
  const [open, setOpen] = useState(false)

  return (
    <Box className="app-shell">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="h1" sx={{ flexGrow: 1 }}>
            My Material UI App
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" className="app-content">
        <Typography variant="h3" component="h2" gutterBottom>
          Welcome to the App
        </Typography>
        <Typography variant="body1" color="text.secondary" className="app-text">
          Click the button below to open the dialog window.
        </Typography>
        <Button variant="contained" size="large" onClick={() => setOpen(true)}>
          Open Dialog
        </Button>
      </Container>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Dialog Window</DialogTitle>
        <DialogContent>
          <DialogContentText>
            This is a sample Material UI dialog. You can close it using the
            buttons below or by clicking outside the dialog.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Close</Button>
          <Button variant="contained" onClick={() => setOpen(false)}>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

export default App
