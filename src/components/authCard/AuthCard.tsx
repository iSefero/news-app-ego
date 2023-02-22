// React
import { Link} from "react-router-dom";
import * as React from "react";

// MUI
import { Typography, CardContent, CardActions, Card, Button } from '@mui/material';

// i18n
import { useTranslation } from "react-i18next";

// Common
import { AppContext } from "../../App";


export const AuthCard = () => {
  const { t } = useTranslation();
  const { handleClearStorage } = React.useContext(AppContext);

  const username = localStorage.getItem("username");
  const password = localStorage.getItem("password");

  return (
    <div >
      <Card sx={{ display: "inline-block" }}>
        <CardContent>
          <Typography>
            {t("placeholders.yourUsername")}: {username}
          </Typography>
          <Typography>
            {t("placeholders.yourPassword")}: {password}
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