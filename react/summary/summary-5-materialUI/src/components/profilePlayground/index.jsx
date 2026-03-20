import Grid from "@mui/material/Grid"

export default function ProfilePlayground() {
  return (
    <Grid container spacing={2}>
      <Grid size={4}>
        <Item>size=4</Item>
      </Grid>
      <Grid size={4}>
        <Item>size=4</Item>
      </Grid>
    </Grid>
  )
}
