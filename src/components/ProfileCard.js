import * as React from "react";
import {
  Card,
  Typography,
  Avatar,
  Container,
  Grid,
  Stack,
} from "@mui/material";
//Need to install icon package: `npm install @mui/icons-material`
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LinkIcon from "@mui/icons-material/Link";
import { red } from "@mui/material/colors";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function profilecard() {
  return (
    <Container sx={{justifyContent:"center", alignItems:"center"}} maxWidth="lg">
      <Grid
        container
        sx={{justifyContent:"center", alignItems:"center"}}
        spacing={4}
        columns={{ xs: 2, sm: 8, md: 16 }}
      >
        {Array.from(Array(4)).map((_, index) => (
          <Grid
            item
            sx={{justifyContent:"center", alignItems:"center"}}
            display="flex"
            xs={2}
            sm={4}
            md={4}
            key={index}
          >
            {/* ------------ Card Content --------------- */}
            <Card sx={{ maxWidth: 215, px: 5, py: 3 }}>
              <Grid
                container
                spacing={1.5}
                direction="column"
                sx={{justifyContent:"center", alignItems:"center"}}
              >
                <Grid item>
                  <Avatar
                    mt={5}
                    sx={{ bgcolor: red[500], width: 100, height: 100 }}
                  >
                    A
                  </Avatar>
                </Grid>
                <Grid item>
                  <Typography> Name</Typography>
                </Grid>
                <Grid item>
                  <Typography> Roles</Typography>
                </Grid>
                <Grid item>
                  <Stack direction="row" spacing={2}>
                    <LinkIcon />
                    <LinkedInIcon />
                    <GitHubIcon />
                  </Stack>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
