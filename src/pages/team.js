import * as React from "react";
import { Stack, Typography, Container } from "@mui/material";

import ProfileCard from "../components/ProfileCard";
import { red } from "@mui/material/colors";

export default function team() {
  return (
    <Container maxWidth="lg">
      <Stack mt={10} spacing={3} justifyContent="center" alignItems="center">
        <Typography gutterBottom variant="h4" component="div">
          Leadership
        </Typography>
        <ProfileCard />
      </Stack>
      <Stack mt={10} spacing={3} justifyContent="center" alignItems="center">
        <Typography gutterBottom variant="h4" component="div">
          Core Team
        </Typography>
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
      </Stack>
    </Container>
  );
}
