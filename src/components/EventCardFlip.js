import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import InfoIcon from "@mui/icons-material/Info";
import { useTheme } from "@mui/material/styles";
import { Stack, Grid, Typography, Button, Paper, Link } from "@mui/material";

const EventCardFlip = (props) => {
  const theme = useTheme();
  console.log("Event Props: " + props);
  const [flip, setFlip] = useState(false);
  return (
    <ReactCardFlip isFlipped={flip} flipDirection="vertical" key={props.key}>
      <Paper
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          p: 4,
          my: 10,
          mx: "auto",
          maxWidth: 1000,
          flexGrow: 1,
        }}
      >
        <Grid container spacing={5}>
          <Grid item xs={4} md={3} lg={3}>
            <Paper
              variant="outlined"
              square
              sx={{
                py: 2,
                border: 2,
              }}
            >
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={1}
              >
                <Typography color="text.secondary">
                  {props.dateWeekday}
                </Typography>
                <Typography
                  color="text.secondary"
                  sx={{ typography: { xs: "h4", sm: "h3", lg: "h2" } }}
                >
                  {props.dateDay}
                </Typography>
                <Typography color="text.secondary">
                  {props.dateMonth}, {props.dateYear}
                </Typography>
              </Stack>
            </Paper>
          </Grid>
          <Grid item xs={8} md={9} lg={9} container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography
                  gutterBottom
                  variant="h4"
                  component="div"
                  sx={{ fontSize: { xs: 22, sm: 26, md: 30, lg: 30 } }}
                >
                  {props.title}
                </Typography>
                {/* <Typography variant="body1" gutterBottom>
                  Location:{" "}
                  <a href={props.locationData}>{props.locationData}</a>
                </Typography> */}
                <Typography variant="body1" gutterBottom>
                  Location:{" "}
                  <Link
                    href={props.locationData}
                    target="_blank"
                    underline="none"
                    color={theme.palette.secondary.main}
                  >
                    {props.locationData}
                  </Link>
                </Typography>
                <Typography variant="body1">
                  Time: {props.dateTimeStart} - {props.dateTimeEnd}{" "}
                  {props.dateTimezone}
                </Typography>
              </Grid>
              <Grid item>
                <Stack direction="row" spacing={2}>
                  <Button
                    size="small"
                    variant="text"
                    startIcon={<InfoIcon />}
                    color="secondary"
                    onClick={() => setFlip(!flip)}
                  >
                    See Details
                  </Button>

                  <Button
                    size="small"
                    variant="contained"
                    startIcon={<AddCircleIcon />}
                    color="secondary"
                  >
                    Add to Calendar
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      {/* -------------Back of the event card after flipping---------------- */}
      <Paper
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          p: 4,
          my: 10,
          mx: "auto",
          maxWidth: 1000,
          flexGrow: 1,
        }}
      >
        `
        <Stack>
          <Typography
            gutterBottom
            variant="h4"
            component="div"
            sx={{ fontSize: { xs: 22, sm: 26, md: 30, lg: 30 } }}
          >
            {props.title}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Location:{" "}
            <Link
              href={props.locationData}
              target="_blank"
              underline="none"
              color={theme.palette.secondary.main}
            >
              {props.locationData}
            </Link>
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Time: {props.dateTimeStart} - {props.dateTimeEnd}{" "}
            {props.dateTimezone}
          </Typography>
          <Typography gutterBottom variant="body1" component="div">
            Description: {props.description}
          </Typography>
          <Button
            variant="text"
            color="secondary"
            onClick={() => setFlip(!flip)}
          >
            Go Back
          </Button>
        </Stack>
        `
      </Paper>
    </ReactCardFlip>
  );
};

export default EventCardFlip;

