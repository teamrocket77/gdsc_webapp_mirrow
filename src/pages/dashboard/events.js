import React from "react";
import { useTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";

const events = () => {
  const theme = useTheme();
  return <Typography paragraph>This is the Dashboard Event Page</Typography>;
};

export default events;
