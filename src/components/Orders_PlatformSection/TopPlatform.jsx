import { topPlatform } from '../../data';
import SinglePlatform from './SinglePlatform';

const TopPlatform = () => {
  return (
    <section className='h-fit flex flex-col gap-6 w-full bg-white px-5 py-4 mb-5 rounded-2xl sm:px-6 lg:w-2/5'>
      <header className='font-jakarta flex justify-between items-center'>
        <p className='font-semibold text-[#26282C] text-base sm:text-lg'>
          Top Platform
        </p>
        <a
          href='#seeall'
          className='text-[#34CAA5] text-sm hover:text-[#2c8a72] transition-all sm:text-base'
        >
          See All
        </a>
      </header>

      <div className='flex flex-col gap-5'>
        {topPlatform.map((platform) => {
          return <SinglePlatform key={platform.id} {...platform} />;
        })}
      </div>
    </section>
  );
};
export default TopPlatform;
