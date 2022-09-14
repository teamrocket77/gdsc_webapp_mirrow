import { Grid } from "@mui/material";

const BackgroundCircle = (props) => {
  let color = props.color;

  return (
    <Grid
      container
      item
      overflow="hidden"
      sx={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Grid
        item
        sx={{
          position: "fixed",
          ml: { xs: "-68vw", sm: "-38vw", md: "-38vw", lg: "-38vw" },
          width: { xs: "600px", sm: "600px", md: "750px", lg: "750px" },
          height: "783.74px",
          backgroundImage: `url(/static/images/background_circle_${color}.svg)`,
          backgroundRepeat: "no-repeat",
          zIndex: -1,
        }}
      ></Grid>
      <Grid
        item
        sx={{
          position: "fixed",
          ml: { xs: "32vw", sm: "52vw", md: "62vw", lg: "58vw" },
          mt: "6vh",
          width: { xs: "600px", sm: "600px", md: "750px", lg: "750px" },
          height: "783.74px",
          backgroundImage: `url(/static/images/background_circle_${color}.svg)`,
          backgroundRepeat: "no-repeat",
          transform: "rotate(180deg)",
          opacity: "0.5",
          zIndex: -1,
        }}
      ></Grid>
    </Grid>
  );
};

export default BackgroundCircle;
