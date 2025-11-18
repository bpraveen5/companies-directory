import React from "react";
import { Box, CircularProgress } from "@mui/material";

export default function Loading() {
  return (
    <Box py={6} display="flex" justifyContent="center">
      <CircularProgress />
    </Box>
  );
}
