// React
import React from "react";

// MUI
import { Divider, Button, Stack } from "@mui/material";

// i18n
import { useTranslation } from 'react-i18next';


export function ChangeLangButton(): React.ReactElement {
  const { i18n } = useTranslation();

  const changeLanguage = ( lang: string ): void => {
    i18n.changeLanguage(lang)
  };

  const selectedLang = ( item: string ): string => i18n.language === item ? "#95959e" : "inherit";

  return (
     <Stack  display="flex" >
       <Button size="small" sx={{ fontSize: "10px", margin: "5px", backgroundColor: selectedLang("en"), color: "inherit" }} onClick={() => changeLanguage("en")}>
         En
       </Button>
       <Divider  variant="middle" color="white" />
       <Button size="small" sx={{ fontSize: "10px", margin: "5px", backgroundColor: selectedLang("uk"), color: "inherit" }}  onClick={() => changeLanguage("uk")}>
         Укр
       </Button>
     </Stack>
  );
}

