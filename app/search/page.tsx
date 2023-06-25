import fetchData from '@libs/fetchData';
import ListPage from '@components/ListPage';

interface SearchPageProps {
  searchParams?: { term: string };
}
const SearchPage = async ({ searchParams }: SearchPageProps) => {
  const data: DataType = await fetchData('general', searchParams?.term);
  return (
    <div>
      <h1 className='headerTitle'>Search Results: {searchParams?.term}</h1>
      <ListPage data={data} />
    </div>
  );
};

export default SearchPage;
