import React from "react";
import { useTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";

const memberlist = () => {
  const theme = useTheme();
  return (
    <Typography paragraph>
      This is the Dashboard Current Team Page - Member List
    </Typography>
  );
};

export default memberlist;
