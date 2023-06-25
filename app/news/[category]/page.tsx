import fetchData from '@libs/fetchData';
import ListPage from '@components/ListPage';

interface NewsCategoryProps {
  params: { category: Category };
}
const NewsCategory = async ({ params: { category } }: NewsCategoryProps) => {
  const data: DataType = await fetchData(category);

  console.log('data', data);

  return (
    <div>
      <h1 className='headerTitle'>{category}</h1>
      <ListPage data={data} />
    </div>
  );
};

export default NewsCategory;
