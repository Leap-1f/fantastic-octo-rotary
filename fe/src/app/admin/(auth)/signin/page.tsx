"use client";
import { FaArrowRight } from "react-icons/fa6";
import { useState, useEffect, use } from "react";
import { TextField, Button, Box, Stack, Typography } from "@mui/material";
import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";
export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailOk, setEmailOk] = useState(false);
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  async function register() {
    const res = await fetch("http://localhost:8080/user/login", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.status === 400) {
          setError(res.message);
        } else {
          localStorage.setItem("token", res.token);
        }
      });
  }
  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  function CheckMailValidity() {
    if (
      email
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      setEmailOk(true);
    } else {
      setEmailOk(false);
    }
  }
  function checkFormValidity() {
    if (password === "" || email === "") {
      setError("Please fill all fields");
      return false;
    } else if (emailOk === false) {
      setError("Invalid email");
      return false;
    } else {
      return true;
    }
  }
  useEffect(() => {
    CheckMailValidity();
  }, [email]);
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
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setEmail(event.target.value);
              }}
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
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setPassword(event.target.value);
              }}
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
            onClick={() => {
              const valid = checkFormValidity();
              console.log(valid);
              if (valid === true) {
                register();
                console.log("register");
              } else {
                handleClick();
              }
            }}
          >
            Log in.
          </Button>
          <Snackbar
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
            message={error}
          />
        </Stack>
      </Stack>
    </Box>
  );
}
