'use client';

import { useRouter } from 'next/navigation';

interface ReadButtonProps {
  article: Article;
}
const ReadButton = ({ article }: ReadButtonProps) => {
  const router = useRouter();
  const readClickHandler = () => {
    const queryString = Object.entries(article)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');

    router.push(`article?${queryString}`);
  };

  return (
    <button onClick={readClickHandler} className='bg-red-400 h-10 rounded-b-lg dark:text-gray-900 hover:bg-red-500'>
      Read More
    </button>
  );
};

export default ReadButton;
