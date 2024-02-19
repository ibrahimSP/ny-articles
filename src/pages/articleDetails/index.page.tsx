import React from "react";
import { CircularProgress, IconButton, Stack, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import { useGetArticles } from "../../apis/ny-articles/get-articles.service";

import { useMemo } from "react";
import { ArrowBack, Error } from "@mui/icons-material";

import { useParams } from "react-router";
import { ArticleMediaSize } from "../../config/types";
import ArticleDetails from "../../components/ArticleDetails/ArticleDetails";
import { PageLayout } from "../../components/PageLayout/PageLayout";
import { Link } from "react-router-dom";

const ArticleDetailsPage = () => {
  const { id: articleId } = useParams();
  const { data: articles, isLoading, error } = useGetArticles();

  const articleDetails = useMemo(() => {
    if (articles && articleId) {
      const parsedId = parseInt(articleId);
      return articles.find(({ id }) => id === parsedId);
    }
  }, [articles, articleId]);

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

  if (!articleDetails) {
    return (
      <Stack
        sx={{
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Error color="error" sx={{ width: "70px", height: "70px" }} />
        <Typography variant="h6">Error: 404 Article not found</Typography>
      </Stack>
    );
  }

  const { abstract, byline, media, published_date, section, title, url } =
    articleDetails;

  const mediaMetaData = media[0]["media-metadata"] || [];
  const { url: mediaUrl = "" } = mediaMetaData[ArticleMediaSize.Large] || [];

  return (
    <PageLayout>
      <Link className="back-link" to="/">
        <IconButton sx={{ width: "fit-content", borderRadius: "8px", gap: 1 }}>
          <ArrowBack />
          <Typography variant="button">Back</Typography>
        </IconButton>
      </Link>
      <ArticleDetails
        title={title}
        abstract={abstract}
        mediaUrl={mediaUrl}
        section={section}
        byline={byline}
        published_date={published_date}
        url={url}
      />
    </PageLayout>
  );
};

export default ArticleDetailsPage;
