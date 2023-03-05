// React
import React from "react"

// Material UI
import { Button } from "@mui/material"

// Common
import {IButton} from "../../types/types";


export const ImprovedButton: React.FC<IButton> = (props) => {
  return (
    <Button
      sx={{
        backgroundColor: props?.sx?.bg || "black",
        color: props?.sx?.color || "white",
        fontSize: props?.sx?.fontSize || "20px",
        boxShadow: "none",
        gap: "20px",
        margin: props?.sx?.margin,
        "&:hover": {
          backgroundColor: props?.sx?.bg || "black" ,
          opacity: 1,
          boxShadow: "none"
        }
    }}
      size="small"
      onClick={props.onClick}
      type="submit"
      variant="contained"
    >
      {props.text}
    </Button>
  )
}