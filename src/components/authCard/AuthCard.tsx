// React
import { Link } from "react-router-dom";
import * as React from "react";

// MUI
import { Typography, CardContent, CardActions, Card, Button } from '@mui/material';

// i18n
import { useTranslation } from "react-i18next";

// Common
import { AppContext } from "../../App";


export const AuthCard = (): React.ReactElement => {
  const { t } = useTranslation();
  const { handleClearStorage } = React.useContext(AppContext);

  const personString = localStorage.getItem("person");
  const user = personString ? JSON.parse(personString) : null;

  return (
    <div >
      <Card sx={{ display: "inline-block" }}>
        <CardContent sx={{gap: "10px", display: "flex", flexDirection: "column"}}>
          <Typography>
            {t("placeholders.yourUsername")}: {user.username}
          </Typography>
          <Typography>
            {t("phrases.hi")}
          </Typography>
        </CardContent>
        <CardActions sx={{justifyContent: "center"}}>
          <Link to="/" style={{ textDecoration: "none"}}>
            <Button variant="contained" onClick={handleClearStorage} size="small">{t("buttons.logout")}</Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  )
};