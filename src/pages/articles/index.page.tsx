import React from "react";
import { CircularProgress, Stack, Typography } from "@mui/material";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import { blue } from "@mui/material/colors";
import { Error } from "@mui/icons-material";
import { useGetArticles } from "../../apis/ny-articles/get-articles.service";
import { ArticleMediaSize } from "../../config/types";
import { PageLayout } from "../../components/PageLayout/PageLayout";

const ArticlesPage = () => {
  const { data: articles, isLoading, error } = useGetArticles();

  if (isLoading) {
    return (
      <Stack
        sx={{
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CircularProgress size={32} sx={{ color: blue[900] }} />
      </Stack>
    );
  }

  if (error) {
    return (
      <Stack
        sx={{
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          gap: 3,
        }}
      >
        <Error color="error" sx={{ width: "70px", height: "70px" }} />
        <Typography variant="h6">Error: {error.message}</Typography>
      </Stack>
    );
  }

  return (
    <PageLayout>
      <Stack gap={2} flexDirection={"row"} flexWrap={"wrap"}>
        {articles &&
          articles.length > 0 &&
          articles.map(({ id, abstract, title, section, media }) => {
            const mediaMetaData = media[0]?.["media-metadata"] || [];
            const { url: mediaUrl = "" } =
              mediaMetaData[ArticleMediaSize.Large] || [];

            return (
              <ArticleCard
                id={id}
                key={`article-${id}`}
                abstract={abstract}
                mediaUrl={mediaUrl}
                section={section}
                title={title}
              />
            );
          })}
      </Stack>
    </PageLayout>
  );
};

export default ArticlesPage;
