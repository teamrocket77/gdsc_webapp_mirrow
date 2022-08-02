import React from "react";
import {
  Stack,
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

const About = () => (
  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    minHeight="100vh"
    sx={{ height: "75%" }}
  >
    <Card
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack
        direction={{ xs: "column", sm: "column", md: "row", lg: "row" }}
        spacing={{ xs: 1, md: 3 }}
        alignItems="center"
        justifyContent="center"
      >
        <CardContent sx={{ m: "30" }}>
          <Typography gutterBottom variant="h5" component="div">
            About Us
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            style={{ display: "inline-block", whiteSpace: "pre-line" }}
          >
            Google Developer Student Clubs (GDSC) are community groups for
            university students interested in Google developer technologies.{" "}
            {"\n"}
            Students from all undergraduate or graduate programs with an
            interest in growing as a developer are welcome. {"\n"}By joining a
            GDSC, students grow their knowledge in a peer-to-peer learning
            environment and build solutions for local businesses and their
            community.
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          heigh="140"
          alt="team picture"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXRUnyNvt35eNGpley13X7C-lXCgT7GZC9uA&usqp=CAU"
        />
      </Stack>
    </Card>
  </Box>
);

export default About;
