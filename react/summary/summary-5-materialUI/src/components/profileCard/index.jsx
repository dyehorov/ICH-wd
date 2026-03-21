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
} from "@mui/material"

export default function ProfileCard({
  initials,
  fullName,
  firstName,
  lastName,
  roleLabel,
  currentColor,
  currentAvatarSize,
  isOnline,
  color,
  size,
  showAlert,
  cardStyle,
}) {
  return (
    <Card
      sx={{
        boxShadow:
          cardStyle === "shadow" ? "0 2px 12px rgba(0,0,0,0.10)" : "none",
        p: 5,
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
            sx={{
              width: currentAvatarSize,
              height: currentAvatarSize,
              bgcolor: currentColor,
              fontSize: size * 0.33,
              fontWeight: 600,
            }}
          >
            {initials}
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
                bgcolor: "transparent",
              }}
            />
            <Typography variant="body2" color="text.secondary">
              {isOnline ? "Онлайн" : "Офлайн"}
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

      {showAlert && (
        <Alert
          color={color}
          severity={isOnline ? "success" : "info"}
          sx={{ mb: 2 }}
        >
          {isOnline ? `${fullName} сейчас онлайн` : `${fullName} сейчас офлайн`}
        </Alert>
      )}

      <Box display="flex" justifyContent={"space-between"} gap={2}>
        <Button
          variant="contained"
          color={color}
          size={size}
          sx={{
            borderRadius: 1.5,
            textTransform: "uppercase",
            fontWeight: 700,
            fontSize: 14,
          }}
        >
          Написать
        </Button>
        <Button
          variant="outlined"
          color={color}
          size={size}
          sx={{
            borderRadius: 1.5,
            textTransform: "uppercase",
            fontWeight: 700,
            fontSize: 14,
          }}
        >
          Предложить работу
        </Button>
      </Box>
    </Card>
  )
}
