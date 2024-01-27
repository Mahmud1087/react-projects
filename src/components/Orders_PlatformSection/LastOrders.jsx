import { lastOrders } from '../../data';
import SingleOrder from './SingleOrder';

const LastOrders = () => {
  return (
    <div className=' h-fit w-full bg-white rounded-2xl flex flex-col gap-5 py-3 px-5 sm:py-4 sm:px-8 lg:w-3/5 '>
      <header className='font-jakarta flex justify-between items-center'>
        <p className='font-semibold text-[#26282C] text-base sm:text-lg'>
          Last Orders
        </p>
        <a
          href='#seeall'
          className='text-[#34CAA5] hover:text-[#2c8a72] text-sm transition-all sm:text-base'
        >
          See All
        </a>
      </header>

      <article className='flex justify-between w-inherit text-[#9CA4AB] font-jakarta text-xs sm:text-sm '>
        <p className='w-[33%] sm:w-[60%]'>Name</p>
        <p className='w-2/5 sm:w-[40%]'>Date</p>
        <p className='w-[35%] sm:w-[30%]'>Amount</p>
        <p className='w-[22%] sm:w-[30%]'>Status</p>
        <p className='w-[10%] sm:w-[25%]'>Invoice</p>
      </article>

      <section className='w-inherit'>
        {lastOrders.map((order) => {
          return <SingleOrder key={order.id} {...order} />;
        })}
      </section>
    </div>
  );
};
export default LastOrders;
