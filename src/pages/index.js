import { Box, Grid, Typography, Stack, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useSession } from "next-auth/react";
import { keyframes } from "@mui/system";
const wave = keyframes`
    from{
      margin-left: 0;
    }
    to{
      margin-left: -1600px;
    }`;
const swell = keyframes`
    0%,100%{
      transform: translate3d(0, -10px, 0);
    }
    50%{
      transform: translate3d(0, 20px, 0);
    }`;
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
      sx={{ height: "100%", width: "100vw", overflow: "hidden" }}
      mt={4}
    >
      <Grid
        container
        spacing={6}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "80vh" }}
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
              sx={{ fontSize: { xs: 22, sm: 36, md: 50, lg: 60 } }}
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
        sx={{
          height: "5%",
          width: "100%",
          position: "absolute",
          bottom: 0,
          left: 0,
          background: "#42a5f5",
        }}
      >
        <Grid
          item
          sx={{
            position: "absolute",
            top: "-198px",
            width: "6400px",
            height: "198px",
            backgroundImage: `url(/static/images/wave2.svg)`,
            backgroundRepeat: "repeat-x",
            animation: `${wave} 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite`,
            transform: "translate3d(0, 0, 0)",
            zIndex: 1,
          }}
        ></Grid>
        <Grid
          item
          sx={{
            position: "absolute",
            top: "-175px",
            width: "6400px",
            height: "198px",
            backgroundImage: `url(/static/images/wave2.svg)`,
            backgroundRepeat: "repeat-x",
            animation: `${wave} 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) -0.125s infinite, ${swell} 7s ease -1.25s infinite`,
            transform: "translate3d(0, 0, 0)",
            opacity: 10,
            zIndex: 2,
          }}
        ></Grid>
      </Grid>
    </Box>
  );
}
