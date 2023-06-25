/* eslint-disable @next/next/no-img-element */
import ReadButton from './ReadButton';

interface ArticleProps {
  article: Article;
}

const Article = ({ article }: ArticleProps) => {
  const articleDate = new Date(article.published_at);
  const currentDate = new Date();

  const timeDiff = currentDate.getTime() - articleDate.getTime();
  const minutesDiff = Math.floor(timeDiff / (1000 * 60));
  const hoursDiff = Math.floor(timeDiff / (1000 * 60 * 60));

  let timeStamp;
  if (hoursDiff > 0) {
    timeStamp = hoursDiff + ' hours ago';
  } else {
    timeStamp = minutesDiff + ' minutes ago';
  }
  return (
    <article className='bg-slate-100 dark:bg-slate-800 flex flex-col rounded-lg shadow-sm hover:scale-105 hover:shadow-lg hover:bg-slate-200 transition-all duration-200 ease-out overflow-hidden'>
      <img
        src={article?.image !== null ? article?.image : 'https://www.edisonresearch.com/wp-content/uploads/2020/10/ABC-1.png'}
        alt={article.title}
        className='h-56 w-full object-cover rounded-t-lg shadow-md'
        width={300}
        height={300}
      />

      <div className='flex-1 flex flex-col'>
        <div className='flex-1 flex flex-col p-5'>
          <h2 className='font-bold font-serif'>{article.title}</h2>
          <section className='mt-2 flex-1'>
            <p className='text-xs line-clamp-5'>{article.description}</p>
          </section>
          <footer className='text-xs text-center ml-auto flex space-x-1 pt-5 italic text-gray-400'>
            <p>{article.source}</p>
            <p>{timeStamp}</p>
          </footer>
        </div>
        <ReadButton article={article} />
      </div>
    </article>
  );
};

export default Article;
