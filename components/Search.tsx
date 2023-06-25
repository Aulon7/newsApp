'use client';

import { useRouter } from 'next/navigation';
import React, { FormEvent, useState } from 'react';
const Search = () => {
  const [searchInput, setSearchInput] = useState('');
  const router = useRouter();

  const inputSearchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const searchFormHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchInput) return;

    router.push(`/search?term=${searchInput}`);
  };

  return (
    <form className='max-w-6xl mx-auto flex justify-between items-center px-5 border-b' onSubmit={searchFormHandler}>
      <input
        type='text'
        value={searchInput}
        onChange={inputSearchHandler}
        placeholder='Search input'
        className='flex-1 w-full h-14 rounded-sm outline-none placeholder-gray-500 text-black-100 bg-transparent dark:text-white mr-10'
      />
      <button
        type='submit'
        disabled={!searchInput}
        className='py-2 px-8 rounded-xl bg-slate-800 text-white dark:text-black dark:bg-white disabled:bg-gray-400 disabled:cursor-not-allowed'
      >
        Search
      </button>
    </form>
  );
};

export default Search;
