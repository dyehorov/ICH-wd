import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import { useState } from "react"
import BasicCard from "../card"

export default function ProfilePlayground() {
  const [profileSettings, setProfileSettings] = useState({
    firstName: "Max",
    lastName: "Verstappen",
    role: "developer",
    avatarSize: 49,
    avatarImage: "",
    color: "primary",
    size: "medium",
    isOnline: false,
    showAlert: true,
    cardStyle: "shadow",
  })

  const sharedCardProps = {
    profileSettings,
    setProfileSettings,
  }

  return (
    <Box p={"25px 50px"}>
      <Grid
        container
        spacing={5}
        justifyContent={"center"}
        alignItems="stretch"
        sx={{ maxWidth: 1200, mx: "auto" }}
      >
        <Grid size={{ xs: 12, lg: 6 }}>
          <BasicCard
            card={"profile"}
            cardTitle={"Profile Card"}
            {...sharedCardProps}
          />
        </Grid>
        <Grid size={{ xs: 12, lg: 6 }}>
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
