// React
import * as React from "react";

// MUI
import {Box, CircularProgress} from "@mui/material";

// Common
import { style } from "./IsLoadingStyle";


export const IsLoading: React.FC = () => {
  return (
    <Box sx={style}>
      <CircularProgress />
    </Box>
  )
}