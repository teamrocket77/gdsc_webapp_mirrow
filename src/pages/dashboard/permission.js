import React from "react";
import { useTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";

const permission = () => {
  const theme = useTheme();
  return (
    <Typography paragraph>
      This is the Dashboard Current Team - Permission Page
    </Typography>
  );
};

export default permission;
