'use client';

import { categories } from '@mockdata';
import { usePathname } from 'next/navigation';
import NavLink from './NavLink';

const NavigationBar = () => {
  const pathName = usePathname();

  const isActive = (path: string) => {
    return pathName?.split('/').pop() === path;
  };
  return (
    <nav className='grid grid-cols-4 md:grid-cols-7 text-xs md:text-base gap-4 pb-7 max-w-6xl mx-auto border-b'>
      {categories.map((category) => (
        <NavLink key={category} category={category} isActive={isActive(category)} />
      ))}
    </nav>
  );
};

export default NavigationBar;
