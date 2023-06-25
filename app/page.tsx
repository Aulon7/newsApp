import ListPage from '@components/ListPage';
import fetchData from '@libs/fetchData';
import { categories } from '@mockdata';

const HomePage = async () => {
  const newsDataHandler: DataType = await fetchData(categories.join(','));

  return (
    <div>
      <ListPage data={newsDataHandler} />
    </div>
  );
};

export default HomePage;
