import { Box, Grid, Typography, Stack, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useSession } from "next-auth/react";

export default function Index() {
  const theme = useTheme();
  const { data: session, status } = useSession();

  // If the client session is loading, do this.
  // Todo: Replace with a nice loading screen.
  if (status === "loading") {
    return <p>Loading Session</p>;
  }

  return (
    <Box
      component="div"
      sx={{ height: "100vh", width: "100vw", overflow: "hidden" }}
      mt={4}
    >
      <Grid
        container
        spacing={6}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "60vh" }}
      >
        <Grid item>
          <Stack
            direction="row"
            sx={{ overflow: "hidden" }}
            justifyContent="center"
            alignItems="center"
            spacing={1.5}
          >
            <Box
              component="img"
              sx={{ height: "auto", width: "9%" }}
              alt="Google Developer Student Club Logo"
              src="/static/images/gdsc_logo.png"
            />

            <Typography
              variant="h2"
              component="div"
              color={theme.palette.primary.alternate}
              sx={{ fontSize: { xs: 22, sm: 36, md: 46, lg: 50 } }}
            >
              Google Developer Student Club
            </Typography>
          </Stack>
          <Stack spacing={4} justifyContent="center" alignItems="center">
            <Typography
              variant="h3"
              component="div"
              color={theme.palette.primary.alternate}
              sx={{ fontSize: { xs: 20, sm: 26, md: 26, lg: 36 } }}
            >
              Kennesaw State University
            </Typography>
            {/*-----Hashtag--------*/}
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Typography
                sx={{ fontSize: { xs: 12, sm: 17, md: 17, lg: 17 } }}
                component="div"
                color={theme.palette.hashtags.main}
              >
                #developerstudentclubs
              </Typography>

              <Typography
                sx={{ fontSize: { xs: 12, sm: 17, md: 17, lg: 17 } }}
                component="div"
                color={theme.palette.hashtags.main}
              >
                #googlestudents
              </Typography>

              <Typography
                sx={{ fontSize: { xs: 12, sm: 17, md: 17, lg: 17 } }}
                component="div"
                color={theme.palette.hashtags.main}
              >
                #growwithgoogle
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        {/*----Button-------*/}
        <Grid item>
          <Button variant="contained" color="secondary">
            Get Started
          </Button>
        </Grid>
      </Grid>
      {/*-----Wavesvg-------*/}
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ ml: -70, mt: -0.7 }}
      >
        <Grid item sx={{ mt: 10, zIndex: 3 }}>
          <Box
            component="img"
            sx={{ height: 250.61, width: 2671.24 }}
            alt=""
            src="/static/images/wave.svg"
          />
        </Grid>
        <Grid item sx={{ mt: -37, zIndex: 2 }}>
          <Box
            component="img"
            sx={{ height: 250.61, width: 2671.24 }}
            alt=""
            src="/static/images/wave.svg"
          />
        </Grid>
        <Grid item sx={{ mt: -37, zIndex: 1 }}>
          <Box
            component="img"
            sx={{ height: 250.61, width: 2671.24 }}
            alt=""
            src="/static/images/wave.svg"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
