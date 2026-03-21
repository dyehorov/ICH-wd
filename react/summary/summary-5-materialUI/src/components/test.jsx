import { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Slider,
  RadioGroup,
  FormControlLabel,
  Radio,
  Switch,
  Chip,
  Divider,
  Grid,
  FormLabel,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import PersonIcon from "@mui/icons-material/Person";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import EmailIcon from "@mui/icons-material/Email";
import WorkIcon from "@mui/icons-material/Work";
import CodeIcon from "@mui/icons-material/Code";

const theme = createTheme({
  palette: {
    primary: { main: "#1976d2" },
    success: { main: "#2e7d32" },
    error: { main: "#d32f2f" },
    secondary: { main: "#9c27b0" },
  },
});

const roles = [
  { value: "developer", label: "💻 Разработчик" },
  { value: "designer", label: "🎨 Дизайнер" },
  { value: "manager", label: "📋 Менеджер" },
  { value: "analyst", label: "📊 Аналитик" },
];

export default function ProfileCard() {
  const [firstName, setFirstName] = useState("Анна");
  const [lastName, setLastName] = useState("Петрова");
  const [role, setRole] = useState("developer");
  const [avatarSize, setAvatarSize] = useState(49);
  const [color, setColor] = useState("primary");
  const [size, setSize] = useState("medium");
  const [isOnline, setIsOnline] = useState(false);
  const [showAlert, setShowAlert] = useState(true);
  const [cardStyle, setCardStyle] = useState("shadow");

  const initials = `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  const fullName = `${firstName} ${lastName}`.trim();

  const colorMap = {
    primary: "#1976d2",
    secondary: "#9c27b0",
    success: "#2e7d32",
    error: "#d32f2f",
  };

  const sizeMap = {
    small: avatarSize * 0.75,
    medium: avatarSize,
    large: avatarSize * 1.35,
  };

  const currentAvatarSize = sizeMap[size];
  const currentColor = colorMap[color];

  const cardSx =
    cardStyle === "shadow"
      ? { boxShadow: "0 4px 20px rgba(0,0,0,0.12)", border: "none" }
      : {
          boxShadow: "none",
          border: "1px solid",
          borderColor: "divider",
        };

  const roleLabel = roles.find((r) => r.value === role)?.label || "";

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "#f5f5f5",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 3,
        }}
      >
        <Grid container spacing={3} maxWidth={1100}>
          {/* Profile Card */}
          <Grid item xs={12} md={5}>
            <Card sx={{ borderRadius: 3, ...cardSx }}>
              <CardContent sx={{ p: 3 }}>
                <Box display="flex" alignItems="center" gap={1} mb={3}>
                  <PersonIcon sx={{ color: "text.secondary" }} />
                  <Typography variant="h6" fontWeight={600}>
                    Карточка профиля
                  </Typography>
                </Box>

                <Card
                  variant="outlined"
                  sx={{ borderRadius: 2, mb: 3, p: 2 }}
                >
                  <Box display="flex" alignItems="center" gap={2}>
                    <Avatar
                      sx={{
                        width: currentAvatarSize,
                        height: currentAvatarSize,
                        bgcolor: currentColor,
                        fontSize: currentAvatarSize * 0.35,
                        transition: "all 0.3s ease",
                      }}
                    >
                      {initials}
                    </Avatar>
                    <Box>
                      <Typography variant="subtitle1" fontWeight={600}>
                        {fullName || "Имя Фамилия"}
                      </Typography>
                      <Box display="flex" alignItems="center" gap={0.5}>
                        <FiberManualRecordIcon
                          sx={{
                            fontSize: 10,
                            color: isOnline ? "success.main" : "text.disabled",
                          }}
                        />
                        <Typography variant="caption" color="text.secondary">
                          {isOnline ? "Онлайн" : "Офлайн"}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>

                  <Box mt={2}>
                    <Chip
                      icon={<CodeIcon fontSize="small" />}
                      label={roleLabel}
                      size="small"
                      variant="outlined"
                      sx={{ borderRadius: 2 }}
                    />
                  </Box>
                </Card>

                {showAlert && (
                  <Box
                    sx={{
                      bgcolor: `${currentColor}15`,
                      border: `1px solid ${currentColor}40`,
                      borderRadius: 2,
                      p: 1.5,
                      mb: 3,
                    }}
                  >
                    <Typography variant="caption" color="text.secondary">
                      Профиль успешно обновлён
                    </Typography>
                  </Box>
                )}

                <Box display="flex" gap={2}>
                  <Button
                    variant="contained"
                    color={color}
                    startIcon={<EmailIcon />}
                    size={size}
                    sx={{
                      flex: 1,
                      borderRadius: 1,
                      textTransform: "uppercase",
                      fontWeight: 700,
                      letterSpacing: 1,
                    }}
                  >
                    Написать
                  </Button>
                  <Button
                    variant="outlined"
                    color={color}
                    startIcon={<WorkIcon />}
                    size={size}
                    sx={{
                      flex: 1,
                      borderRadius: 1,
                      textTransform: "uppercase",
                      fontWeight: 700,
                      letterSpacing: 1,
                    }}
                  >
                    Предложить работу
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Settings Panel */}
          <Grid item xs={12} md={7}>
            <Card sx={{ borderRadius: 3, ...cardSx }}>
              <CardContent sx={{ p: 3 }}>
                <Box display="flex" alignItems="center" gap={1} mb={3}>
                  <SportsEsportsIcon sx={{ color: "text.secondary" }} />
                  <Typography variant="h6" fontWeight={600}>
                    Настройки
                  </Typography>
                </Box>

                {/* Name Fields */}
                <Grid container spacing={2} mb={3}>
                  <Grid item xs={6}>
                    <TextField
                      label="Имя"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      fullWidth
                      size="small"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Фамилия"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      fullWidth
                      size="small"
                      variant="filled"
                      sx={{ "& .MuiFilledInput-root": { bgcolor: "#f5f5f5" } }}
                    />
                  </Grid>
                </Grid>

                {/* Role Selector */}
                <FormControl fullWidth size="small" sx={{ mb: 3 }}>
                  <InputLabel>Роль</InputLabel>
                  <Select
                    value={role}
                    label="Роль"
                    onChange={(e) => setRole(e.target.value)}
                  >
                    {roles.map((r) => (
                      <MenuItem key={r.value} value={r.value}>
                        {r.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                {/* Avatar Size Slider */}
                <Box mb={3}>
                  <Typography variant="body2" gutterBottom>
                    Размер аватара: {avatarSize}px
                  </Typography>
                  <Slider
                    value={avatarSize}
                    onChange={(_, v) => setAvatarSize(v)}
                    min={24}
                    max={100}
                    color="primary"
                  />
                </Box>

                <Divider sx={{ mb: 2 }} />

                {/* Color Radio */}
                <Box mb={2}>
                  <FormControl>
                    <RadioGroup
                      row
                      value={color}
                      onChange={(e) => setColor(e.target.value)}
                    >
                      {["primary", "secondary", "success", "error"].map(
                        (c) => (
                          <FormControlLabel
                            key={c}
                            value={c}
                            control={<Radio color={c} size="small" />}
                            label={
                              <Typography variant="body2" textTransform="capitalize">
                                {c === "primary"
                                  ? "Primary"
                                  : c === "secondary"
                                  ? "Secondary"
                                  : c === "success"
                                  ? "Success"
                                  : "Error"}
                              </Typography>
                            }
                          />
                        )
                      )}
                    </RadioGroup>
                  </FormControl>
                </Box>

                {/* Size Radio */}
                <Box mb={2}>
                  <FormControl>
                    <RadioGroup
                      row
                      value={size}
                      onChange={(e) => setSize(e.target.value)}
                    >
                      {["small", "medium", "large"].map((s) => (
                        <FormControlLabel
                          key={s}
                          value={s}
                          control={<Radio color="primary" size="small" />}
                          label={
                            <Typography variant="body2" textTransform="capitalize">
                              {s === "small"
                                ? "Small"
                                : s === "medium"
                                ? "Medium"
                                : "Large"}
                            </Typography>
                          }
                        />
                      ))}
                    </RadioGroup>
                  </FormControl>
                </Box>

                <Divider sx={{ mb: 2 }} />

                {/* Toggles */}
                <Box display="flex" flexDirection="column" gap={1}>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={isOnline}
                        onChange={(e) => setIsOnline(e.target.checked)}
                        size="small"
                      />
                    }
                    label={
                      <Typography variant="body2">Онлайн статус</Typography>
                    }
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        checked={showAlert}
                        onChange={(e) => setShowAlert(e.target.checked)}
                        size="small"
                        color="primary"
                      />
                    }
                    label={
                      <Typography variant="body2">Показать Alert</Typography>
                    }
                  />
                </Box>

                {/* Card Style Radio */}
                <Box mt={2}>
                  <FormControl>
                    <RadioGroup
                      row
                      value={cardStyle}
                      onChange={(e) => setCardStyle(e.target.value)}
                    >
                      <FormControlLabel
                        value="shadow"
                        control={<Radio color="primary" size="small" />}
                        label={<Typography variant="body2">С тенью</Typography>}
                      />
                      <FormControlLabel
                        value="outlined"
                        control={<Radio color="primary" size="small" />}
                        label={
                          <Typography variant="body2">С обводкой</Typography>
                        }
                      />
                    </RadioGroup>
                  </FormControl>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}
