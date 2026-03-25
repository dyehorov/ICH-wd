import Box from "@mui/material/Box"
import Button from "@mui/material/Button"

export default function MyComponent() {
  return (
    <Box
      sx={{
        backgroundColor: "lightblue",
        p: "16px",
        m: "8px",
        borderRadius: 1,
      }}
    >
      <Button
        sx={{
          color: "white",
          backgroundColor: "blue",
          p: "12px",
          fontWeight: "bold",
          "&:hover": {
            backgroundColor: "blue",
          },
        }}
      >
        Styled MUI Button
      </Button>
    </Box>
  )
}
