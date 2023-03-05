// React
import React from "react"

// Common
import { Header } from "../../components/header/Header";
import { Box, Divider, Typography } from "@mui/material";
import ukraine from "../../assets/image/map.jpg"
import { styles } from "./MainStyle";


export const Main: React.FC = () => {
  const dateNow = new Date();
  const day = dateNow.getDate();
  const month = dateNow.toLocaleString('default', { month: 'long' });
  const year = dateNow.getFullYear();

  return (
    <div>
      <Header/>
      <div style={styles.content}>
        <Box sx={styles.newsPaperName}>
          <div style={styles.emptyBlock}></div>
          <Typography variant="h1" fontWeight="bold">
            The Ukrainian news
          </Typography>
          <Typography style={styles.date} variant="h6" >
            {day} {month} {year}
          </Typography>
        </Box>
        <Divider variant="middle"/>
        <Box style={styles.imageBlock}>
          <img style={styles.image} alt="error" src={ukraine}/>
        </Box>
      </div>
    </div>
  )
}