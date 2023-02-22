// MUI
import { Divider, Button, Stack } from "@mui/material";

// i18n
import { useTranslation } from 'react-i18next';


export function ChangeLangButton() {
  const { i18n } = useTranslation();

  const changeLanguage = ( lang: string ) => {
    i18n.changeLanguage(lang)
  }

  const selectedLang = ( item: string ) => i18n.language === item ? "black" : "inherit";

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

