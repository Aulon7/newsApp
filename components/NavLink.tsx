import Link from 'next/link';

interface CategoryInterface {
  category: string;
  isActive: boolean;
}

const NavLink = ({ category, isActive }: CategoryInterface) => {
  return (
    <Link href={`/news/${category}`} className={`navLink ${isActive && 'underline decoration-red-500 underline-offset-4 font-bold text-lg'}`}>
      {category}
    </Link>
  );
};

export default NavLink;
