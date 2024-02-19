import { useQuery } from "@tanstack/react-query";
import { API_KEY } from "../../config/constants";
import { ARTICLE_ENDPOINT } from "../../config/endpoints";
import { NYArticle } from "../../config/types";
import axios from "axios";

const fetchArticles = async () => {
  try {
    const data: { data: { results: NYArticle[] } } = await axios.get(
      ARTICLE_ENDPOINT,
      {
        params: { "api-key": API_KEY },
      }
    );

    return data.data.results;
  } catch (e) {
    console.error("Fetching articles failed: ", e);
    return [];
  }
};

export const useGetArticles = () => {
  return useQuery({
    queryKey: ["articles"],
    queryFn: fetchArticles,
  });
};
