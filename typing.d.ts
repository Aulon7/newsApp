type Article = {
  category: string;
  author: string | null;
  country: string;
  image: string | null;
  language: string;
  description: string;
  published_at: string;
  source: string;
  title: string;
  url: string;
};

type Pagination = {
  count: Int;
  limit: Int;
  offset: Int;
  total: Int;
};

type DataType = {
  pagination: Pagination;
  data: Article[];
};
type Category = 'general' | 'business' | 'entertainment' | 'health' | 'science' | 'sports' | 'technology';
