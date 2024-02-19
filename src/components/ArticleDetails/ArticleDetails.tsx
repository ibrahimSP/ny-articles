import "./style.scss";
import React from "react";
import { Chip, Stack, Typography } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { Link } from "react-router-dom";

export interface ArticleDetailsProps {
  title: string;
  abstract: string;
  mediaUrl: string;
  section: string;
  byline: string;
  published_date: string;
  url: string;
}

const ArticleDetails = (props: ArticleDetailsProps) => {
  const { title, abstract, mediaUrl, section, byline, published_date, url } =
    props;

  return (
    <Stack className="article-details" gap={2} flexWrap={"wrap"}>
      <Stack gap={4} alignItems={"center"} maxWidth={700} margin={"auto"}>
        <img
          src={mediaUrl}
          title={title}
          width={400}
          alt={title}
          style={{ borderRadius: "12px" }}
        />

        <Stack>
          <Stack flexDirection={"row"} justifyContent={"space-between"} gap={2}>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{
                mb: 2,
              }}
            >
              {title}
            </Typography>
            <Chip label={section} color="info" sx={{ maxWidth: "80px" }} />
          </Stack>
          <Stack flexDirection={"row"} justifyContent={"space-between"} gap={2}>
            <Typography gutterBottom variant="body1" color={blueGrey[400]}>
              {byline}
            </Typography>
            <Typography gutterBottom variant="body1" color={blueGrey[400]}>
              {published_date}
            </Typography>
          </Stack>
          <Typography className="label" variant="body1" color="text.secondary">
            Abstract:
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {abstract}
          </Typography>
          <Typography className="label" variant="body1" color="text.secondary">
            Content URL:
          </Typography>
          <Typography variant="body1" color="text.secondary">
            <Link to={url} target="_blank" color={"cadetblue"}>
              {title}
            </Link>
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ArticleDetails;
