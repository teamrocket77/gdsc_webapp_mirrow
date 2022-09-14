import * as React from "react";
import { Typography, Container, Stack, Button } from "@mui/material";
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
    <Container
      display="flex"
      justifyContent="center"
      alignItems="center"
      maxWidth="lg"
      overflow="hidden"
    >
      <Stack
        spacing={5}
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
      >
        <Typography
          variant="h4"
          mt={5}
          color={theme.palette.primary}
          sx={{ flexGrow: 1 }}
          gutterBottom
          component="div"
          marginTop={10}
        >
          JOIN US ON...
        </Typography>

        <Button
          sx={{
            borderRadius: 35,
            borderColor: "#7289D9",
            color: "#000",
            // fontSize: { xs: "15px", sm: "15px", md: "18px", lg: "18px" },
            fontSize: "18px",
            width: { xs: "18em", sm: "30em", md: "40em", lg: "40em" },
            height: "3em",
            "&:hover": {
              border: "#7289D9",
              color: "#FFF",
              backgroundColor: "#7289D9",
            },
          }}
          variant="outlined"
          href="https://discord.gg/jQpFr6ZRXg"
        >
          Discord
        </Button>

        <Button
          sx={{
            borderRadius: 35,
            borderColor: "#A0C3FF",
            color: "#000",
            fontSize: "18px",
            width: { xs: "18em", sm: "30em", md: "40em", lg: "40em" },
            height: "3em",
            "&:hover": {
              border: "#A0C3FF",
              color: "#FFF",
              backgroundColor: "#A0C3FF",
            },
          }}
          variant="outlined"
          href="https://www.linkedin.com/groups/12557765"
        >
          LinkedIn
        </Button>

        <Button
          sx={{
            borderRadius: 35,
            borderColor: "#45A5F5",
            color: "#000",
            fontSize: "18px",
            width: { xs: "18em", sm: "30em", md: "40em", lg: "40em" },
            height: "3em",
            "&:hover": {
              border: "#45A5F5",
              color: "#FFF",
              backgroundColor: "#45A5F5",
            },
          }}
          variant="outlined"
          href="https://twitter.com/gdscksu"
        >
          Twitter
        </Button>

        <Button
          sx={{
            borderRadius: 35,
            borderColor: "#FBBC05",
            color: "#000",
            fontSize: "18px",
            width: { xs: "18em", sm: "30em", md: "40em", lg: "40em" },
            height: "3em",
            "&:hover": {
              border: "#FBBC05",
              color: "#FFF",
              backgroundColor: "#FBBC05",
            },
          }}
          variant="outlined"
          href="https://www.instagram.com/gdscksu"
        >
          Instagram
        </Button>

        <Button
          sx={{
            borderRadius: 35,
            borderColor: "#BB001B",
            color: "#000",
            fontSize: "18px",
            width: { xs: "18em", sm: "30em", md: "40em", lg: "40em" },
            height: "3em",
            "&:hover": {
              border: "#BB001B",
              color: "#FFF",
              backgroundColor: "#BB001B",
            },
          }}
          variant="outlined"
          href="https://www.youtube.com/channel/UCO3Yz1Nj6qkIZkHF9RS9UvA"
        >
          YouTube
        </Button>
      </Stack>
    </Container>
  );
}
