import Article from './Article';

interface ListProps {
  data: DataType;
}
const ListPage = ({ data }: ListProps) => {
  return (
    <main className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 gap-10'>
      {data?.data.map((article) => (
        <Article key={article.title} article={article} />
      ))}
    </main>
  );
};

export default ListPage;
