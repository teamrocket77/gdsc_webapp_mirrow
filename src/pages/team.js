import * as React from "react";
import { Stack, Typography, Container } from "@mui/material";

import ProfileCard from "../components/ProfileCard";

export default function team() {
  return (
    <Container sx={{justifyContent:"center", alignItems:"center"}} maxWidth="lg">
      <Stack mt={10} spacing={3} sx={{justifyContent:"center", alignItems:"center"}}>
        <Typography gutterBottom variant="h4" component="div">
          Leadership
        </Typography>
        <ProfileCard />
      </Stack>
      <Stack mt={10} spacing={3} sx={{justifyContent:"center", alignItems:"center"}}>
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
