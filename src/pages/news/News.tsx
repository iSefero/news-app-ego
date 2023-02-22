// React
import * as React from "react";

// MUI
import { Box, Button } from "@mui/material";

// i18n
import { t } from "i18next";

// Common
import { Header } from "../../components/header/Header";
import { useAppSelector } from "../../redux/store";

interface IDeleteItem {
  (arg?: number): void
}

const LazyNewsCard = React.lazy(() => import("../../components/newCard/NewsCard"));

export const News = () => {
  const { posts } = useAppSelector((state) => state.data);
  const [ visiblePosts, setVisiblePosts ] = React.useState(posts.slice(0, 5));

  // Prevent rendering of empty objects
  React.useEffect(() => {
    if (posts.length > 0) {
      setVisiblePosts(posts.slice(0, 5));
    }
  }, [posts]);

  // When you click, it shows the new 5 objects from the array
  function handleShowMore() {
    const nextIndex = visiblePosts.length + 5;
    setVisiblePosts(posts.slice(0, nextIndex));
  }

  // Deletes the selected news
  const handleDelete = ( id: number ) => {
    const index = visiblePosts.findIndex((object) => object.id === id);
    if (index !== -1) {
      setVisiblePosts([...visiblePosts.slice(0, index), ...visiblePosts.slice(index + 1)]);
    }
  };

  // Displaying the news or loading caption
  const renderItem =
    visiblePosts.length > 0 ? (
      <Box sx={{ padding: "50px", gap: "20px", display: "flex", flexDirection: "column" }}>
        {visiblePosts.map((object) => (
          <React.Suspense key={object.id} fallback={<div>Loading...</div>}>
            <LazyNewsCard deleteItem={handleDelete as IDeleteItem} {...object} />
          </React.Suspense>
        ))}
      </Box>
    ) : (
      <div>Loading...</div>
    );

  return (
    <div>
      <Header />
      {renderItem}
        <Box sx={{ justifyContent: "center", display: "flex", paddingBottom: "20px" }}>
          <Button size="large" variant="contained" onClick={handleShowMore}>{t("buttons.showMore")}</Button>
        </Box>
    </div>
  );
};