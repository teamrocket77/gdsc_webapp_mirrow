import React from "react";
import { useTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";

const applications = () => {
  const theme = useTheme();
  return (
    <Typography paragraph>This is the Dashboard Application Page</Typography>
  );
};

export default applications;
