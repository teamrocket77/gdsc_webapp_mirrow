import React from "react";
import { Stack, Box, Grid, Typography, Paper, Card } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import BackgroundCircle from "../components/backgroundCircle";

const About = () => {
  const theme = useTheme();
  return (
    <Box
      // display="flex"
      display="inline-block"
      maxWidth="100vw"
      component="div"
      sx={{
        marginY: { xs: 10, sm: 10, md: 10, lg: 20 },
        marginX: { xs: 10, sm: 10, md: 10, lg: 20 },
      }}
    >
      <Paper elevation="1">
        <Grid
          container
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            // paddingX: { xs: 5, sm: 5, md: 10, lg: 10 },
            padding: 10,
          }}
        >
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              paddingRight: { xs: 0, sm: 0, md: 10, lg: 20 },
            }}
          >
            <Typography
              gutterBottom
              variant="h4"
              component="div"
              color={theme.palette.themeColor.blue}
            >
              About Us
            </Typography>
            <Typography variant="body1" color="text.secondary" marginBottom={3}>
              We are a group of students who desire to bring both technical
              knowledge and products through our Google Community. Together with
              our teams and active community, we will make a great impact to not
              only our own local communities but worldwide as well.
            </Typography>
            <Stack marginBottom={3}>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                color={theme.palette.themeColor.red}
              >
                Connect
              </Typography>
              <Typography variant="body1" color="text.secondary">
                A place where you can meet people with the same interests as
                yourself, work together in different departments, provide
                resources for others, and become a close community
              </Typography>
            </Stack>
            <Stack marginBottom={3}>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                color={theme.palette.themeColor.green}
              >
                Grow
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Apply your newly found knowledge to create fantastic solutions
                to local issues. Improve your skills, your resume, and your
                network. A great way to give back to your community by assisting
                others in their learning.
              </Typography>
            </Stack>
            <Stack marginBottom={3}>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                color={theme.palette.themeColor.yellow}
              >
                Learn
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Hands-on workshops, seminars, presentations, and
                project-building activities - both online and in-person - held
                by those who help lead our community, which will allow you to
                learn about a variety of technical topics and develop new
                skills.
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXRUnyNvt35eNGpley13X7C-lXCgT7GZC9uA&usqp=CAU"
              alt="team_picture"
              height="auto"
              width="70%"
            />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default About;
