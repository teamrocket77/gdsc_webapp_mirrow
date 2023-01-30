import React from "react";
import { useTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";

const analytics = () => {
  const theme = useTheme();
  return (
    <Typography paragraph>This is the Dashboard Analytics Page</Typography>
  );
};

export default analytics;
