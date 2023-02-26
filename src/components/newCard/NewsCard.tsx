// React
import React from "react";

// MUI
import { Box, Card, CardActions, CardContent, Button, Typography } from '@mui/material';

// i18n
import { useTranslation } from "react-i18next";

interface IPosts {
  userId?: number,
  id?: number,
  title?: string,
  body?: string,
  deleteItem: (id?: number) => void
}

export default function NewsCard(props: IPosts): React.ReactElement {
  const { t } = useTranslation();

  return (
    <Card key={props.id} sx={{ gap: "30px", display: "flex" }}>
      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
          <Box sx={{display: "flex", alignItems: "baseline"}}>
            <Typography sx={{ fontSize: 16 }} >
              {t("titles.title")}
            </Typography>
            <Typography sx={{ paddingLeft: "7px", fontSize: 14 }} color="text.secondary" gutterBottom>
              {props.title}
            </Typography>
          </Box>
          <CardActions sx={{ alignItems: "flex-start" }} >
            <Button variant="outlined" sx={{display: "inline-block"}} onClick={() => props.deleteItem?.(props.id)} size="small">{t("buttons.deleteNews")}</Button>
          </CardActions>
        </Box>
        <Typography variant="body2">
          {props.body},
          {props.body},
          {props.body},
          {props.body}.
        </Typography>
      </CardContent>
    </Card>
  );
}