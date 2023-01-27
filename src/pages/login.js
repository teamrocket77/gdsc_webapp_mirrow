import {
  FormControlLabel,
  Checkbox,
  Link,
  Box,
  TextField,
  Grid,
  Typography,
  Button,
  Paper,
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { useTheme, createTheme, ThemeProvider } from "@mui/material/styles";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

const theme = createTheme();

export default function SignIn() {
  const router = useRouter();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    try {
      const session = await signIn("credentials", {
        username: data.get('username'),
        password: data.get('password'),
        callbackUrl: `${window.location.origin}/dashboard`
      })

      if (session && session.user) {
        console.log("USER IS SIGNED IN & SESSION IS VALID.");
      }
    } catch(error) {
      console.log("ERROR: ", error);
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "90vh", marginTop: 0.6 }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(/static/images/loginbg.png)`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container></Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
