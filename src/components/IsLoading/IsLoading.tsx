// React
import * as React from "react";

// MUI
import {Box, CircularProgress} from "@mui/material";

const style = {
  display: "flex",
  position: "absolute",
  left: "50%",
  margin: "0 auto",
  top: "50%",
  transform: "translate(-50%, -50%)"
}

export const IsLoading = (): React.ReactElement => {
  return (
    <Box sx={style}>
      <CircularProgress />
    </Box>
  )
}