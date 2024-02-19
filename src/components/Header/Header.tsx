import "./style.scss";
import React from "react";
import { Typography } from "@mui/material";
import { Logo } from "../Logo/Logo";

export const AppHeader = () => {
  return (
    <div id="header">
      <Logo />
      <Typography variant="h6">NY Times Most Popular Articles</Typography>
    </div>
  );
};
