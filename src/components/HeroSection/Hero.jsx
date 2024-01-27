import SearchBox from './SearchBox';
import User from './User';
import calendar from '../../assets/images/calendar.png';

const Hero = ({ handleToggle, toggle }) => {
  return (
    <main className='flex justify-between items-center fixed right-0 left-0 top-0 bg-[#fafafa] border border-solid border-b-[#e5eaef] p-2 sm:ml-[60px] sm:px-6 sm:py-3 '>
      <p className='text-[#26282c] text-lg font-jakarta font-bold sm:text-xl'>
        Dashboard
      </p>
      <div className='flex gap-8'>
        <SearchBox />
        <div className='hidden sm:flex sm:justify-center sm:w-fit sm:items-center sm:gap-x-2'>
          <img src={calendar} alt='calendar icon' className='w-4' />
          <p className=' font-medium font-inter text-[#26282C] text-sm'>
            November 15, 2023
          </p>
        </div>
        <User handleToggle={handleToggle} toggle={toggle} />
      </div>
    </main>
  );
};
export default Hero;
