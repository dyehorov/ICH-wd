/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { useState } from "react"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography"
import MyComponent from "./components/myComponent"

const appTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#4fc3f7",
    },
    background: {
      default: "#0f172a",
      paper: "#111c34",
    },
  },
  typography: {
    fontFamily: '"Segoe UI", sans-serif',
  },
})

const layoutStyles = css`
  min-height: 100vh;
  padding: 32px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ContentBox = styled(Box)`
  width: min(100%, 760px);
  display: grid;
  gap: 20px;
`

const StyledInput = styled(TextField)`
  background: rgba(255, 255, 255, 0.06);
  border-radius: 14px;
`

const StyledButton = styled("button")`
  border: 0;
  border-radius: 14px;
  padding: 14px 20px;
  font-size: 16px;
  font-weight: 700;
  color: #04111f;
  background-color: #4fc3f7;
  cursor: pointer;
`

const StyledCard = styled(Card)`
  border-radius: 18px;
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.25);
`

// const darkTheme = createTheme({
//   palette: {
//     mode: "dark",
//   },
// })

// const dynamicBtnStyles = active => css`
//   background: ${active ? "blue" : "grey"};
//   border: 0;
//   border-radius: 3px;
//   box-shadow: 0 3px 5px 2px
//     ${active ? "rgba(255, 105, 135, 0.3)" : "rgba(0, 0, 0, 0.3)"};
//   color: ${active ? "white" : "black"};
//   height: 48px;
//   padding: 0 30px;
// `

// const buttonStyle = css`
//   background-color: red;
//   border: 0;
//   border-radius: 3px;
//   box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);
//   color: white;
//   height: 48px;
//   padding: 0 30px;
// `

// const Container = styled("div")({
//   width: "100%",
//   display: "flex",
//   justifyContent: "center",
//   gap: 45,
// })

// const MyButton = styled("button")({
//   background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
//   border: 0,
//   borderRadius: 3,
//   boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
//   color: "white",
//   height: 48,
//   padding: "0 30px",
//   cursor: "pointer",
// })

export default function App() {
  const [inputValue, setInputValue] = useState("")
  const [displayText, setDisplayText] = useState("")

  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <Box css={layoutStyles}>
        <ContentBox>
          <StyledInput
            label="Enter text"
            variant="outlined"
            fullWidth
            value={inputValue}
            onChange={event => setInputValue(event.target.value)}
          />

          <StyledButton
            onClick={() => setDisplayText(inputValue || "Input is empty.")}
          >
            Show Text
          </StyledButton>

          <StyledCard>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Text from the field
              </Typography>
              <Typography variant="body1">{displayText}</Typography>
            </CardContent>
          </StyledCard>
        </ContentBox>
      </Box>
      {/* <Container>
        <MyButton>Register</MyButton>
        <MyButton>Login</MyButton>
        <button css={buttonStyle}>Click me</button>
        <Button
          css={dynamicBtnStyles(active)}
          onClick={() => setActive(prev => !prev)}
        >
          Dynamic button ({active ? "Active" : "Inactive"})
        </Button>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <h1>Lorem ipsum dolor sit amet.</h1>
        </ThemeProvider>
      </Container>
      <MyComponent /> */}
    </ThemeProvider>
  )
}
