import { gql } from 'graphql-request';

const fetchData = async (category?: Category | string, keywords?: string) => {
  const query = gql`
    query News($access_key: String!, $categories: String!, $keywords: String) {
      myQuery(access_key: $access_key, categories: $categories, countries: "us, gb", sort: "published_desc", keywords: $keywords) {
        data {
          author
          category
          country
          description
          image
          language
          published_at
          source
          title
          url
        }
        pagination {
          count
          limit
          offset
          total
        }
      }
    }
  `;

  const response = await fetch('https://zaraza.stepzen.net/api/getting-started/__graphql', {
    method: 'POST',
    next: { revalidate: 20 },
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
    },
    body: JSON.stringify({
      query,
      variables: {
        access_key: process.env.MEDIASTACK_API_KEY,
        categories: category,
        keywords: keywords,
      },
    }),
  });

  const responseData = await response.json();

  const data = responseData?.data?.myQuery;
  return data;
};

export default fetchData;
