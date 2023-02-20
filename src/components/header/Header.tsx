import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';
import {ChangeLangButton} from "../changeLangButton/ChangeLangButton";



export function Header() {
  const { t, i18n } = useTranslation();

  const pages = [
    {
    name: t("main")
    },
    {
    name: t("profile")
    },
    {
    name: t("news")
    }
  ];

  const renderPages = pages.map((item, index) => (<Typography key={index} variant="h6" component="div">
      {item.name}
    </Typography>))


  return (
    <div>
      <Box >
      <AppBar position="static">
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Box sx={{display: "flex", gap: "30px"}}>
              {renderPages}
            </Box>
            <Box sx={{display: "flex", gap: "15px"}}>
              <Button sx={{fontSize: "20px"}} color="inherit">{t("login")}</Button>
              <ChangeLangButton/>
            </Box>
          </Toolbar>
      </AppBar>
      </Box>
    </div>
  );
}

