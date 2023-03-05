// React
import * as React from "react";

// MUI
import {Box, Typography} from "@mui/material";

// i18n
import { t } from "i18next";

// Common
import { Header } from "../../components/header/Header";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { fetchMoreData,fetchData } from "../../fetchData/fetchData";
import { setLoading, setPosts } from "../../redux/slices/dataSlice";
import { NewsCard } from "../../components/newsCard/NewsCard";
import { IsLoading } from "../../components/IsLoading/IsLoading";
import { ImprovedButton } from "../../components/Button/Button";
import {styles} from "./NewsStyle";

interface IDeleteItem {
  (urlToImage?: string): void
}

export const News: React.FC = () => {
  const dispatch = useAppDispatch();
  const { posts, isLoading, isAllDataLoaded } = useAppSelector((state) => state.data);
  const [visiblePosts, setVisiblePosts] = React.useState(posts);
  const [curPage, setCurPage] = React.useState<number>(2);

  console.log(visiblePosts)

  React.useEffect((): void => {
    dispatch(setLoading(false))
    fetchData(dispatch);
  }, [dispatch]);

  React.useEffect((): void => {
    if (posts.length > 0) {
      setVisiblePosts(posts);
    }
  }, [posts]);

  const handleShowMore = (): void => {
    setCurPage( curPage + 1);
    fetchMoreData(dispatch, curPage);
  };

  const handleDelete = (urlToImage: string): void => {
    const newPosts = visiblePosts.filter((object) => object.urlToImage !== urlToImage);
    dispatch(setPosts(newPosts));
  };

  // Displaying the news or loading caption
  const renderItem =
    visiblePosts.length > 1 ? (
      <Box sx={styles.newsCard}>
        {visiblePosts.map((object) => (
            <NewsCard key={object.urlToImage} deleteItem={handleDelete as IDeleteItem} {...object} />
        ))}
      </Box>
    ) : (
      <IsLoading/>
    );

  const renderMoreButton = isAllDataLoaded ? (
    <Typography>{t("phrases.noMore")}</Typography>
  ) : (
    !isLoading && (
      <ImprovedButton onClick={handleShowMore} text={t("buttons.showMore")}/>
    )
  );

  return (
    <div>
      <Header />
      <Box style={styles.content}>
        {renderItem}
      </Box>
        <Box sx={styles.moreButton}>
          {renderMoreButton}
        </Box>
    </div>
  );
};