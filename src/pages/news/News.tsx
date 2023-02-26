// React
import * as React from "react";

// MUI
import {Box, Button, Typography} from "@mui/material";

// i18n
import { t } from "i18next";

// Common
import { Header } from "../../components/header/Header";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { fetchMoreData,fetchData } from "../../fetchData/fetchData";
import { setLoading, setPosts } from "../../redux/slices/dataSlice";
import NewsCard from "../../components/newCard/NewsCard";
import { IsLoading } from "../../components/IsLoading/IsLoading";

interface IDeleteItem {
  (id?: number): void
}

const style = {
  newsCard: {
    padding: "50px",
    gap: "20px",
    display: "flex",
    flexDirection: "column"
  },

  moreButton: {
    justifyContent: "center",
    display: "flex",
    paddingBottom: "20px"
  }
}

export const News = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { posts, isLoading, isAllDataLoaded } = useAppSelector((state) => state.data);
  const [visiblePosts, setVisiblePosts] = React.useState(posts);
  const [curPage, setCurPage] = React.useState<number>(2);

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

  const handleDelete = (id: number): void => {
    const newPosts = visiblePosts.filter((object) => object.id !== id);
    dispatch(setPosts(newPosts));
  };

  // Displaying the news or loading caption
  const renderItem =
    visiblePosts.length > 1 ? (
      <Box sx={style.newsCard}>
        {visiblePosts.map((object) => (
            <NewsCard key={object.id} deleteItem={handleDelete as IDeleteItem} {...object} />
        ))}
      </Box>
    ) : (
      <IsLoading/>
    );

  const renderMoreButton = isAllDataLoaded ? (
    <Typography>{t("phrases.noMore")}</Typography>
  ) : (
    !isLoading && (
      <Button size="large" variant="contained" onClick={handleShowMore}>
        {t("buttons.showMore")}
      </Button>
    )
  );

  return (
    <div>
      <Header />
      {renderItem}
        <Box sx={style.moreButton}>
          {renderMoreButton}
        </Box>
    </div>
  );
};