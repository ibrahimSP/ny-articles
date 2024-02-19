export enum ArticleMediaSize {
  Thumbnail,
  Medium,
  Large,
}

export interface MediaMetaData {
  url: string;
}

export interface ArticleMedia {
  "media-metadata": MediaMetaData[];
}

export interface NYArticle {
  id: number;
  abstract: string;
  byline: string;
  media: ArticleMedia[];
  published_date: string;
  section: string;
  title: string;
  url: string;
}
