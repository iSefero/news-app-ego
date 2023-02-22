// React
import * as React from "react";
import { useNavigate } from "react-router-dom";

// MUI
import { Box, Card, CardContent, Typography } from "@mui/material";

// i18n
import { useTranslation } from "react-i18next";


export const NonAuthCard = () => {
  const { t } = useTranslation();
  const [ time, setTime ] = React.useState(5);
  const navigate = useNavigate();

  // Countdown and homepage jump
  React.useEffect(() => {
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
    <div>
      <Card sx={{ display: "inline-block" }}>
        <CardContent sx={{ display: "flex", flexDirection: "column" }}>
          <Typography>
            {t("phrases.redirecting")}
          </Typography>
          <Box sx={{ display: "flex", gap: "10px", alignItems: "baseline" }}>
            <Typography >
              {t("phrases.redirectingTimer")}
            </Typography>
            <Typography sx={{ fontSize: "35px" }}>
               {time}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </div>
  )
}


