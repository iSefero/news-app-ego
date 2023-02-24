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
  }

  const selectedLang = ( item: string ): string => i18n.language === item ? "black" : "inherit";

  return (
     <Stack  display="flex" >
       <Button sx={{ fontSize: "10px", color: selectedLang("en") }}  onClick={() => changeLanguage("en")}>
         En
       </Button>
       <Divider variant="middle" color="white" />
       <Button sx={{ fontSize: "10px", color: selectedLang("uk") }}  onClick={() => changeLanguage("uk")}>
         Укр
       </Button>
     </Stack>
  );
}

