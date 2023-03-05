// React
import React from "react";

// MUI
import { Box, Card, CardActions, CardContent, Typography } from '@mui/material';

// i18n
import { useTranslation } from "react-i18next";

// Common
import { IPost } from "../../types/types";
import { ImprovedButton } from "../Button/Button";
import { styles } from "./NewsCardStyle";

interface INewsCard extends IPost{
  deleteItem?: (urlToImage?: string) => void
}

export const NewsCard: React.FC<INewsCard> = (props) => {
  const { t } = useTranslation();

  const date = props.publishedAt?.substring(0, 10);

  return (
    <Card variant="outlined" key={props.urlToImage} sx={styles.wrapper}>
      <CardContent>
        <Box sx={styles.newsContent}>
          <Box sx={styles.imageBlock}>
            <img alt="error" src={props.urlToImage} style={styles.image}/>
            <CardActions>
              <ImprovedButton onClick={() => props.deleteItem?.(props.urlToImage)} text={t("buttons.deleteNews")}/>
            </CardActions>
          </Box>
          <Typography sx={styles.title} fontWeight="800">
            {props.title}
          </Typography>
          <Typography sx={styles.title}>
            {props.description}
          </Typography>
          <Typography style={styles.mainContent} variant="body2">
            {props.content}
          </Typography>
        </Box>
        <Box sx={styles.aboutNews}>
          <Typography style={styles.aboutNewsText} variant="body2">
            {props.author}
          </Typography>
          <Typography style={styles.aboutNewsText} variant="body2">
            {t("phrases.published")} {date}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}