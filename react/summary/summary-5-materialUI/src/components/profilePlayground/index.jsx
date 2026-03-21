import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import { useState } from "react"
import BasicCard from "../card"

export default function ProfilePlayground() {
  const [firstName, setFirstName] = useState("Max")
  const [lastName, setLastName] = useState("Verstappen")
  const [role, setRole] = useState("developer")
  const [avatarSize, setAvatarSize] = useState(49)
  const [color, setColor] = useState("primary")
  const [size, setSize] = useState("medium")
  const [isOnline, setIsOnline] = useState(false)
  const [showAlert, setShowAlert] = useState(true)
  const [cardStyle, setCardStyle] = useState("shadow")

  const sharedCardProps = {
    firstName,
    lastName,
    role,
    avatarSize,
    color,
    size,
    isOnline,
    showAlert,
    cardStyle,
    setFirstName,
    setLastName,
    setRole,
    setAvatarSize,
    setColor,
    setSize,
    setIsOnline,
    setShowAlert,
    setCardStyle,
  }

  return (
    <Box p={"25px 50px"}>
      <Grid
        container
        spacing={5}
        justifyContent={"center"}
        alignItems="stretch"
        sx={{ width: "fit-content", maxWidth: "100%", mx: "auto" }}
      >
        <Grid>
          <BasicCard
            card={"profile"}
            cardTitle={"Profile card"}
            {...sharedCardProps}
          />
        </Grid>
        <Grid>
          <BasicCard
            card={"settings"}
            cardTitle={"Settings"}
            {...sharedCardProps}
          />
        </Grid>
      </Grid>
    </Box>
  )
}
