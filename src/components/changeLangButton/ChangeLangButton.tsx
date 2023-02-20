import * as React from 'react';
import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';
import {Divider, Stack} from "@mui/material";


export function ChangeLangButton() {
  const { i18n } = useTranslation();
  const [ lang, setLang] = React.useState("en")

  React.useEffect(() => {
    i18n.changeLanguage("en")
  },[])

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang)
    setLang(lang)
  }

  return (
     <Stack  display="flex" >
       <Button sx={{fontSize: "10px", color: lang === "en" ? "black" :"inherit"}}  onClick={() => changeLanguage("en")}>
         En
       </Button>
       <Divider color="white" />
       <Button sx={{fontSize: "10px", color: lang === "uk" ? "black" :"inherit"}}  onClick={() => changeLanguage("uk")}>
         Укр
       </Button>
     </Stack>
  );
}

