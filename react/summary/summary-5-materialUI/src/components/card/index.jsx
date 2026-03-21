import { Card, CardContent, Typography } from "@mui/material"

import PersonIcon from "@mui/icons-material/Person"
import SettingsIcon from "@mui/icons-material/Settings"

import ProfileCard from "../profileCard"
import SettingsCard from "../settingsCard"

const colorMap = {
  primary: "#1976d2",
  secondary: "#9c27b0",
  success: "#2e7d32",
  error: "#d32f2f",
}

const roles = [
  { value: "developer", label: "💻 Developer" },
  { value: "designer", label: "🎨 Designer" },
  { value: "manager", label: "📋 Manager" },
  { value: "analyst", label: "📊 Analyst" },
]

export default function BasicCard({
  card,
  cardTitle,
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
}) {
  const initials = `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase()
  const fullName = `${firstName} ${lastName}`.trim()

  const roleLabel = roles.find(r => r.value === role)?.label || ""

  const currentColor = colorMap[color]

  return (
    <Card
      sx={{
        minWidth: 320,
        maxWidth: 550,
        width: "100%",
        height: "100%",
        borderTop:
          card === "settings" ? `4px solid ${currentColor}` : undefined,
      }}
    >
      <CardContent sx={{ height: "100%" }}>
        <Typography
          variant="h2"
          fontSize={25}
          fontWeight={500}
          lineHeight={1}
          mb={3}
        >
          {card === "profile" ? <PersonIcon /> : <SettingsIcon />}
          {cardTitle}
        </Typography>

        {card === "profile" ? (
          <ProfileCard
            initials={initials}
            fullName={fullName}
            firstName={firstName}
            lastName={lastName}
            roleLabel={roleLabel}
            currentColor={currentColor}
            currentAvatarSize={avatarSize}
            isOnline={isOnline}
            color={color}
            size={size}
            showAlert={showAlert}
            cardStyle={cardStyle}
          />
        ) : (
          <SettingsCard
            firstName={firstName}
            lastName={lastName}
            role={role}
            roles={roles}
            avatarSize={avatarSize}
            color={color}
            size={size}
            isOnline={isOnline}
            showAlert={showAlert}
            cardStyle={cardStyle}
            setFirstName={setFirstName}
            setLastName={setLastName}
            setRole={setRole}
            setAvatarSize={setAvatarSize}
            setColor={setColor}
            setSize={setSize}
            setIsOnline={setIsOnline}
            setShowAlert={setShowAlert}
            setCardStyle={setCardStyle}
          />
        )}
      </CardContent>
    </Card>
  )
}
