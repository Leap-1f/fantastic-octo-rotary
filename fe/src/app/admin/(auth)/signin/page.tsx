"use client";
import { FaArrowRight } from "react-icons/fa6";

import { TextField, Button, Box, Stack, Typography } from "@mui/material";
export default function Page() {
  return (
    <Box
      sx={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Stack
        spacing={4}
        direction="column"
        width={{
          width: "19%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "1%",
          borderRadius: "10px",
          border: "1px solid #ccc",
        }}
      >
        <Typography sx={{ fontWeight: "Bold", fontSize: "32px", pt: "1vh" }}>
          Бүртгүүлэх
        </Typography>
        <Stack direction="column" spacing={3} sx={{ width: "100%" }}>
          <Stack direction="column" spacing={1}>
            <Typography sx={{ fontSize: "16px", fontWeight: "300" }}>
              Таны имэйл
            </Typography>
            <TextField
              placeholder="Имэйл"
              variant="outlined"
              sx={{ width: "100%", bgcolor: "#F7F7F8" }}
            />
          </Stack>
          <Stack direction="column" spacing={1} sx={{ width: "100%" }}>
            <Typography sx={{ fontSize: "16px", fontWeight: "300" }}>
              Таны password
            </Typography>
            <TextField
              placeholder="Password"
              variant="outlined"
              sx={{ width: "100%", bgcolor: "#F7F7F8" }}
            />
          </Stack>

          <Button
            variant="contained"
            size="large"
            sx={{
              bgcolor: "black",
              color: "white",
              width: "100%",
              transition: "all 0.3s",
              mb: "1vh",
              borderBottom: "1px solid #ccc",
              ":hover": {
                transform: "scale(1.05)",
                color: "white",
                width: "100%",
                bgcolor: "black",
              },
            }}
            endIcon={<FaArrowRight />}
          >
            Дараах
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
