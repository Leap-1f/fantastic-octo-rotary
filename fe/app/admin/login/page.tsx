"use client";
import { TextField, Button, Box, Stack, Typography } from "@mui/material";
export default function Page() {
  return (
    <Stack
      spacing={4}
      sx={{
        width: "20vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      direction="column"
    >
      <Typography variant="h4">Бүртгүүлэх</Typography>
      <TextField label="Name" variant="outlined"></TextField>
      <Button variant="contained" size="large">
        Submit
      </Button>
    </Stack>
  );
}
