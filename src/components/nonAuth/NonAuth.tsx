// React
import * as React from "react";
import { useNavigate } from "react-router-dom";

// MUI
import { Box, Card, CardContent, Typography } from "@mui/material";

// i18n
import { useTranslation } from "react-i18next";

// Common
import { styles } from "./NonAuthStyle";

type ClearTimer = () => void;

export const NonAuth: React.FC = () => {
  const { t } = useTranslation();
  const [ time, setTime ] = React.useState<number>(5);
  const navigate = useNavigate();

  // Countdown and homepage jump
  React.useEffect((): ClearTimer => {
    const intervalId = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    if (time === 0) {
      clearInterval(intervalId);
      navigate('/');
    }

    return () => clearInterval(intervalId);
  }, [time, navigate]);

  return (
    <Card >
      <CardContent sx={styles.wrapper}>
        <Typography sx={styles.text}>
          {t("phrases.redirecting")}
        </Typography>
        <Box sx={styles.lowerText}>
          <Typography sx={styles.text} >
            {t("phrases.redirectingTimer")}
          </Typography>
          <Typography sx={styles.timerText}>
            {time}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  )
}


