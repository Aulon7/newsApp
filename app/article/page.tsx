/* eslint-disable @next/next/no-img-element */
import { notFound } from 'next/navigation';
interface ArticleDetailsProps {
  searchParams?: Article;
}
const ArticleDetails = ({ searchParams }: ArticleDetailsProps) => {
  if ((searchParams && Object.entries(searchParams).length === 0) || !searchParams) {
    return notFound();
  }

  const article: Article = searchParams;

  return (
    <article>
      <section className='flex flex-col lg:flex-row pb-24 px-0 lg:px-10'>
        {article.image && (
          <img className='h-50 max-w-md mx-auto md:max-w-lg lg:max-w-xl object-cover rounded-lg shadow-md' src={article?.image} alt={article.title} />
        )}
        <div className='px-10'>
          <h1 className='headerTitle'>{article.title}</h1>
          <div className='flex divide-x-2 space-x-2'>
            <h2 className='font-bold'>Written by: {article.author}</h2>
            <h2 className='font-bold pl-4'>Source: {article.source}</h2>
            <p className='pl-4'>{article.published_at}</p>
          </div>
          <p className='pt-4'>{article.description}</p>
        </div>
      </section>
    </article>
  );
};

export default ArticleDetails;
