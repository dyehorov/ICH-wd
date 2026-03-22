import {
  Alert,
  Box,
  Card,
  Typography,
  Avatar,
  Chip,
  Button,
  Divider,
  Badge,
  Tooltip,
} from "@mui/material"

export default function ProfileCard({
  initials,
  fullName,
  firstName,
  lastName,
  role,
  roleLabel,
  currentColor,
  currentAvatarSize,
  avatarImage,
  isOnline,
  color,
  size,
  showAlert,
  cardStyle,
}) {
  const offerButtonLabels = {
    developer: "Offer a Project",
    designer: "Offer a Design Job",
    manager: "Offer a Vacancy",
    analyst: "Offer an Internship",
  }

  const currentOfferLabel = offerButtonLabels[role] || "Offer a Job"

  const handleMessageClick = () => {
    window.alert(`Write a message for ${fullName}`)
  }

  const handleOfferClick = () => {
    const isConfirmed = window.confirm(`Do you want to offer a job to ${fullName}?`)

    if (isConfirmed) {
      window.alert(`Application sent! ${fullName} will receive the offer`)
      return
    }

    window.alert("Sending cancelled")
  }

  const handleReminderClick = () => {
    window.alert("Thanks for reading!")
  }

  return (
    <Card
      sx={{
        boxShadow:
          cardStyle === "shadow" ? "0 2px 12px rgba(0,0,0,0.10)" : "none",
        p: 6,
        bgcolor: "#fff",
      }}
      variant={cardStyle === "outlined" ? "outlined" : undefined}
    >
      <Box display="flex" alignItems="flex-start" gap={2} mb={2}>
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant="dot"
          invisible={!isOnline}
          sx={{
            "& .MuiBadge-badge": {
              bgcolor: "success.main",
              boxShadow: theme => `0 0 0 2px ${theme.palette.background.paper}`,
              width: 12,
              height: 12,
              borderRadius: "50%",
            },
          }}
        >
          <Avatar
            src={avatarImage || undefined}
            sx={{
              width: currentAvatarSize,
              height: currentAvatarSize,
              bgcolor: currentColor,
              fontSize: currentAvatarSize * 0.33,
              fontWeight: 600,
            }}
          >
            {!avatarImage && initials}
          </Avatar>
        </Badge>
        <Box>
          <Typography variant="h6" fontWeight={700} lineHeight={1.3}>
            {firstName} {lastName}
          </Typography>
          <Box display="flex" alignItems="center" gap={0.5} mt={0.3}>
            <Box
              component="span"
              sx={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                border: "1.5px solid",
                borderColor: isOnline ? "success.main" : "#9e9e9e",
                display: "inline-block",
                bgcolor: isOnline ? "success.main" : "transparent",
              }}
            />
            <Typography
              variant="body2"
              color={isOnline ? "success.main" : "text.secondary"}
            >
              {isOnline ? "Online" : "Offline"}
            </Typography>
          </Box>
        </Box>
      </Box>

      <Chip
        label={roleLabel}
        variant="outlined"
        sx={{
          borderRadius: "20px",
          fontWeight: 400,
          fontSize: 14,
          height: 32,
          borderColor: currentColor,
          color: currentColor,
          mb: 5,
        }}
      />

      <Divider sx={{ mb: 2 }} />

      <Box sx={{ minHeight: 74, mb: 2 }}>
        {showAlert && (
          <Alert
            severity="warning"
            action={
              <Button color="inherit" size="small" onClick={handleReminderClick}>
                Got it
              </Button>
            }
            sx={{
              width: "100%",
              "& .MuiAlert-message": {
                minWidth: 0,
              },
              "& .MuiAlert-action": {
                alignItems: "center",
                pl: 1,
              },
            }}
          >
            Do not forget to upload an avatar!
          </Alert>
        )}
      </Box>

      <Box display="flex" flexDirection="column" gap={1} mb={3}>
        <Alert severity="success" sx={{ py: 0 }}>
          Great! MUI is working
        </Alert>
        <Alert severity="info" sx={{ py: 0 }}>
          Try changing the button colors
        </Alert>
        <Alert severity="warning" sx={{ py: 0 }}>
          Do not forget the attributes
        </Alert>
        <Alert severity="error" sx={{ py: 0 }}>
          There are no errors, everything is great!
        </Alert>
      </Box>

      <Box display="flex" justifyContent={"space-between"} gap={2}>
        <Tooltip title="Click to message">
          <Button
            variant="contained"
            color={color}
            size={size}
            onClick={handleMessageClick}
            sx={{
              borderRadius: 1.5,
              textTransform: "uppercase",
              fontWeight: 700,
              fontSize: 14,
            }}
          >
            Message
          </Button>
        </Tooltip>
        <Tooltip title="Click to send offer">
          <Button
            variant="outlined"
            color={color}
            size={size}
            onClick={handleOfferClick}
            sx={{
              borderRadius: 1.5,
              textTransform: "uppercase",
              fontWeight: 700,
              fontSize: 14,
            }}
          >
            {currentOfferLabel}
          </Button>
        </Tooltip>
      </Box>
    </Card>
  )
}
