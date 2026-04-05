import { useState } from "react"
import {
  Box,
  Button,
  Typography,
  ThemeProvider,
  createTheme,
  CssBaseline,
} from "@mui/material"
import styled from "@emotion/styled"
import "./App.css"

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1565c0",
    },
    secondary: {
      main: "#ff8f00",
    },
    background: {
      default: "#f4f7fb",
      paper: "#ffffff",
    },
    text: {
      primary: "#1f2937",
    },
  },
})

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9",
    },
    secondary: {
      main: "#ffb74d",
    },
    background: {
      default: "#0f172a",
      paper: "#1e293b",
    },
    text: {
      primary: "#e2e8f0",
    },
  },
})

const ThemeToggleButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.getContrastText(theme.palette.primary.main),
  borderRadius: "14px",
  padding: "12px 24px",
  fontWeight: 700,
}))

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev)
  }

  const currentTheme = isDarkMode ? darkTheme : lightTheme

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: 2,
          bgcolor: "background.default",
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: 480,
            textAlign: "center",
            p: 4,
            borderRadius: 4,
            bgcolor: "background.paper",
            boxShadow: 6,
          }}
        >
          <Typography variant="h4" component="h1" gutterBottom>
            {isDarkMode ? "Dark Theme" : "Light Theme"}
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, color: "text.primary" }}>
            Change theme
          </Typography>
          <ThemeToggleButton variant="contained" onClick={toggleTheme}>
            Change to {isDarkMode ? "light" : "dark"} theme
          </ThemeToggleButton>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default App
