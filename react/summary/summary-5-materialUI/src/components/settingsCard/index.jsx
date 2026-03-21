import {
  Box,
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
  Divider,
  Grid,
  Typography,
} from "@mui/material"

export default function SettingsCard({
  firstName,
  lastName,
  role,
  roles,
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
  return (
    <>
      <Grid container spacing={2} mb={3}>
        <Grid item xs={6}>
          <TextField
            label="Имя"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            fullWidth
            size="small"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Фамилия"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
            fullWidth
            size="small"
            variant="filled"
            sx={{ "& .MuiFilledInput-root": { bgcolor: "#f5f5f5" } }}
          />
        </Grid>
      </Grid>

      <FormControl fullWidth size="small" sx={{ mb: 3 }}>
        <InputLabel>Роль</InputLabel>
        <Select
          value={role}
          label="Роль"
          onChange={e => setRole(e.target.value)}
        >
          {roles.map(r => (
            <MenuItem key={r.value} value={r.value}>
              {r.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Box mb={3}>
        <Typography variant="body2" gutterBottom>
          Размер аватара: {avatarSize}px
        </Typography>
        <Slider
          value={avatarSize}
          onChange={event => setAvatarSize(event.target.value)}
          min={24}
          max={100}
          color={color}
        />
      </Box>

      <Divider sx={{ mb: 2 }} />

      <Box mb={2}>
        <RadioGroup row value={color} onChange={e => setColor(e.target.value)}>
          {["primary", "secondary", "success", "error"].map(c => (
            <FormControlLabel
              key={c}
              value={c}
              control={<Radio color={c} size="small" />}
              label={
                <Typography variant="body2" textTransform="capitalize">
                  {c.charAt(0).toUpperCase() + c.slice(1)}
                </Typography>
              }
            />
          ))}
        </RadioGroup>
      </Box>

      <Box mb={2}>
        <RadioGroup row value={size} onChange={e => setSize(e.target.value)}>
          {["small", "medium", "large"].map(s => (
            <FormControlLabel
              key={s}
              value={s}
              control={<Radio color={color} size="small" />}
              label={
                <Typography variant="body2" textTransform="capitalize">
                  {s.charAt(0).toUpperCase() + s.slice(1)}
                </Typography>
              }
            />
          ))}
        </RadioGroup>
      </Box>

      <Divider sx={{ mb: 2 }} />

      <Box display="flex" flexDirection="column" gap={1}>
        <FormControlLabel
          control={
            <Switch
              checked={isOnline}
              onChange={e => setIsOnline(e.target.checked)}
              size="small"
              color={color}
            />
          }
          label={<Typography variant="body2">Онлайн статус</Typography>}
        />
        <FormControlLabel
          control={
            <Switch
              checked={showAlert}
              onChange={e => setShowAlert(e.target.checked)}
              size="small"
              color={color}
            />
          }
          label={<Typography variant="body2">Показать Alert</Typography>}
        />
      </Box>

      <Box mt={2}>
        <RadioGroup
          row
          value={cardStyle}
          onChange={e => setCardStyle(e.target.value)}
        >
          <FormControlLabel
            value="shadow"
            control={<Radio color={color} size="small" />}
            label={<Typography variant="body2">С тенью</Typography>}
          />
          <FormControlLabel
            value="outlined"
            control={<Radio color={color} size="small" />}
            label={<Typography variant="body2">С обводкой</Typography>}
          />
        </RadioGroup>
      </Box>
    </>
  )
}
