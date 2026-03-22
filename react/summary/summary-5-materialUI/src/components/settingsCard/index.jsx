import {
  Box,
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
  Divider,
  Grid,
  Typography,
} from "@mui/material"

const colorRadioButtons = ["primary", "secondary", "success", "error"]

const sizeRadioButtons = ["small", "medium", "large"]

export default function SettingsCard({
  profileSettings,
  setProfileSettings,
  roles,
}) {
  const {
    firstName,
    lastName,
    role,
    avatarSize,
    avatarImage,
    color,
    size,
    isOnline,
    showAlert,
    cardStyle,
  } = profileSettings

  const handleAvatarChange = event => {
    const file = event.target.files?.[0]

    if (!file) return

    const reader = new FileReader()

    reader.onload = () => {
      setProfileSettings({
        ...profileSettings,
        avatarImage: reader.result,
      })
    }

    reader.readAsDataURL(file)
  }

  return (
    <>
      <Grid container spacing={2} mb={3}>
        <Grid item xs={6}>
          <TextField
            label="First Name"
            value={firstName}
            onChange={event =>
              setProfileSettings({
                ...profileSettings,
                firstName: event.target.value,
              })
            }
            fullWidth
            size="small"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Last Name"
            value={lastName}
            onChange={event =>
              setProfileSettings({
                ...profileSettings,
                lastName: event.target.value,
              })
            }
            fullWidth
            size="small"
            variant="filled"
            sx={{ "& .MuiFilledInput-root": { bgcolor: "#f5f5f5" } }}
          />
        </Grid>
      </Grid>

      <FormControl fullWidth size="small" sx={{ mb: 3 }}>
        <InputLabel>Role</InputLabel>
        <Select
          value={role}
          label="Role"
          onChange={event =>
            setProfileSettings({
              ...profileSettings,
              role: event.target.value,
            })
          }
        >
          {roles.map(role => (
            <MenuItem key={role.value} value={role.value}>
              {role.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Box mb={3}>
        <Typography variant="body2" gutterBottom>
          Avatar size: {avatarSize}px
        </Typography>
        <Slider
          value={avatarSize}
          onChange={(_, value) =>
            setProfileSettings({
              ...profileSettings,
              avatarSize: value,
            })
          }
          min={24}
          max={100}
          color={color}
        />
        <Button
          component="label"
          variant="outlined"
          color={color}
          sx={{
            mt: 2,
            alignSelf: "flex-start",
          }}
        >
          {avatarImage ? "Change Avatar Photo" : "Upload Avatar Photo"}
          <input
            type="file"
            accept="image/*"
            hidden
            onChange={handleAvatarChange}
          />
        </Button>
      </Box>

      <Divider sx={{ mb: 2 }} />

      <Box mb={2}>
        <RadioGroup
          row
          value={color}
          onChange={event =>
            setProfileSettings({
              ...profileSettings,
              color: event.target.value,
            })
          }
        >
          {colorRadioButtons.map(color => (
            <FormControlLabel
              key={color}
              value={color}
              control={<Radio color={color} size="small" />}
              label={
                <Typography variant="body2" textTransform="capitalize">
                  {color}
                </Typography>
              }
            />
          ))}
        </RadioGroup>
      </Box>

      <Box mb={2}>
        <RadioGroup
          row
          value={size}
          onChange={event =>
            setProfileSettings({
              ...profileSettings,
              size: event.target.value,
            })
          }
        >
          {sizeRadioButtons.map(size => (
            <FormControlLabel
              key={size}
              value={size}
              control={<Radio color={color} size="small" />}
              label={
                <Typography variant="body2" textTransform="capitalize">
                  {size}
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
              onChange={event =>
                setProfileSettings({
                  ...profileSettings,
                  isOnline: event.target.checked,
                })
              }
              size="small"
              color={color}
            />
          }
          label={<Typography variant="body2">Online status</Typography>}
        />
        <FormControlLabel
          control={
            <Switch
              checked={showAlert}
              onChange={event =>
                setProfileSettings({
                  ...profileSettings,
                  showAlert: event.target.checked,
                })
              }
              size="small"
              color={color}
            />
          }
          label={<Typography variant="body2">Show Alert</Typography>}
        />
      </Box>

      <Box mt={2}>
        <RadioGroup
          row
          value={cardStyle}
          onChange={event =>
            setProfileSettings({
              ...profileSettings,
              cardStyle: event.target.value,
            })
          }
        >
          <FormControlLabel
            value="shadow"
            control={<Radio color={color} size="small" />}
            label={<Typography variant="body2">Shadow</Typography>}
          />
          <FormControlLabel
            value="outlined"
            control={<Radio color={color} size="small" />}
            label={<Typography variant="body2">Border</Typography>}
          />
        </RadioGroup>
      </Box>
    </>
  )
}
