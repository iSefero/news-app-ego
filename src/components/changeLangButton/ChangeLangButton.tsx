// React
import React from "react";

// MUI
import { Divider, Stack } from "@mui/material";

// i18n
import { useTranslation } from 'react-i18next';
import { ImprovedButton } from "../Button/Button";
import { styles } from "./ChangeLangButtonStyle";


export const ChangeLangButton: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = ( lang: string ): void => {
    i18n.changeLanguage(lang)
  };

  const selectedLang = ( item: string ): string => i18n.language === item ? "#95959e" : "inherit";

  return (
     <Stack  display="flex" >
       <ImprovedButton
         sx={styles(selectedLang("en"))}
         onClick={() => changeLanguage("en")}
         text="En"/>
       <Divider  variant="middle" color="white" />
       <ImprovedButton
         sx={styles(selectedLang("uk"))}
         onClick={() => changeLanguage("uk")}
         text="Укр"/>
     </Stack>
  );
}

