// React
import { Link } from "react-router-dom";
import * as React from "react";

// MUI
import { Typography, CardContent, CardActions, Card } from '@mui/material';

// i18n
import { useTranslation } from "react-i18next";

// Common
import { AppContext } from "../../App";
import { ImprovedButton } from "../Button/Button";
import { styles } from "./AuthCardStyle";


export const AuthCard: React.FC = () => {
  const { t } = useTranslation();
  const { handleClearStorage } = React.useContext(AppContext);

  const personString = localStorage.getItem("person");
  const user = personString ? JSON.parse(personString) : null;

  return (
      <Card sx={styles.wrapper}>
        <CardContent sx={styles.cardContent}>
          <Typography sx={styles.cardText}>
            {t("placeholders.yourUsername")}: {user.username}
          </Typography>
          <Typography sx={styles.cardText}>
            {t("phrases.hi")}
          </Typography>
        </CardContent>
        <CardActions sx={styles.buttonContainer}>
          <Link to="/" style={styles.buttonLink}>
            <ImprovedButton onClick={handleClearStorage} text={t("buttons.logout")}/>
          </Link>
        </CardActions>
      </Card>
  )
};