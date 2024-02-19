import "./style.scss";
import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { blueGrey } from "@mui/material/colors";

export interface ArticleCardProps {
  id: number;
  title: string;
  abstract: string;
  mediaUrl: string;
  section: string;
}

const ArticleCard = ({
  id,
  title,
  abstract,
  mediaUrl,
  section,
}: ArticleCardProps) => {
  return (
    <Card className="article-card" sx={{ borderRadius: "8px" }}>
      <CardActionArea>
        <Link
          className="card-link"
          to={`/${id}`}
          style={{ textDecoration: "none" }}
        >
          <div className="card-content-wrapper">
            <CardMedia
              className="card-media"
              sx={{ height: 200 }}
              image={mediaUrl || "/default.png"}
              title={title}
            />
            <CardContent>
              <Stack
                flexDirection={"row"}
                justifyContent={"space-between"}
                gap={1}
              >
                <Typography
                  className="article-title"
                  gutterBottom
                  variant="h6"
                  component="div"
                  color={blueGrey[700]}
                  sx={{
                    mb: 2,
                    height: "48px",
                    width: "80%",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: "2",
                    WebkitBoxOrient: "vertical",
                    lineHeight: "24px",
                  }}
                >
                  {title}
                </Typography>
                <Chip label={section} color="info" sx={{ maxWidth: "80px" }} />
              </Stack>
              <Typography
                className="article-abstract"
                sx={{
                  height: "48px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: "2",
                  WebkitBoxOrient: "vertical",
                  lineHeight: "24px",
                }}
                variant="body1"
                color="text.secondary"
              >
                {abstract}
              </Typography>
            </CardContent>
          </div>
        </Link>
      </CardActionArea>
    </Card>
  );
};

export default ArticleCard;
