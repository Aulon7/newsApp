import Link from 'next/link';
import NavigationBar from './NavigationBar';
import Search from './Search';
import DarkMode from './DarkMode';
const Header = () => {
  return (
    <header>
      <div className='grid grid-cols-2 p-5'>
        <Link href='/' prefetch={false}>
          <h1 className='font-serif text-4xl'>
            <span className='underline decoration-6 decoration-red-700'>ABC</span> News
          </h1>
        </Link>
        <div className='flex items-center justify-end space-x-2'>
          <DarkMode />
        </div>
      </div>
      <NavigationBar />
      <Search />
    </header>
  );
};

export default Header;
