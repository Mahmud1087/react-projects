import { useState } from 'react';
import searchIcon from '../../assets/images/searchIcon.png';

const SearchBox = () => {
  const [search, setSearch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='w-fit border-none sm:border-solid border border-[#dadddd] rounded-3xl px-3 py-2 lg:w-[18rem]'
    >
      <div className='flex justify-center items-center gap-3'>
        <img src={searchIcon} alt='search icon' className='w-5' />
        <input
          type='search'
          value={search}
          placeholder='Search...'
          onChange={(e) => setSearch(e.target.value)}
          className='hidden font-inter text-sm border-none w-full bg-transparent placeholder:text-sm placeholder:font-inter focus:outline-none lg:flex'
        />
      </div>
    </form>
  );
};
export default SearchBox;
