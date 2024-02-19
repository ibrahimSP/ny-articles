import ArticlesPage from "../pages/articles/index.page";
import ArticleDetailsPage from "../pages/articleDetails/index.page";
import { RouteObject } from "react-router";

export const ROUTES: RouteObject[] = [
  {
    path: "/",
    element: <ArticlesPage />,
  },
  {
    path: ":id",
    element: <ArticleDetailsPage />,
  },
];
