export interface NewsPack {
  news: News[];
  totalCount: number;
}

export interface News {
  id?: number;
  categoryType: string;
  description: string;
  fullUrl: string;
  publishedDate: string;
  title: string;
  titleImageUrl: string;
  url?: string;
}
