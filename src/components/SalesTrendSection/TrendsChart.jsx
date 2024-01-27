// import { useState } from 'react';
import BarChart from './BarChart';

const TrendsChart = () => {
  // const [shortBy, setShortBy] = useState({})

  return (
    <div className=' w-full flex flex-col gap-5 bg-white rounded-2xl p-4 sm:w-1/2 sm:px-4 sm:py-4 lg:w-3/5 '>
      <header className='flex justify-between items-center'>
        <p className='font-jakarta font-semibold text-[#26282C] text-base sm:text-lg '>
          Sales Trends
        </p>
        <div className='font-jakarta flex justify-between items-center gap-3 text-[#3A3F51]'>
          <p className=' text-xs sm:text-sm'>Short by:</p>
          <select
            name='shortBy'
            id='short_by'
            className='px-2 py-[4px] text-[9px] border border-solid border-[#E1DFDF] rounded-full bg-transparent focus:outline-none sm:text-[13px] sm:py-[6px] '
          >
            <option value='weekly'>Weekly</option>
            <option value='daily'>Daily</option>
            <option value='monthly'>Monthly</option>
            <option value='yearly'>Yearly</option>
            <option value='hourly'>Hourly</option>
          </select>
        </div>
      </header>
      <div>
        <BarChart />
      </div>
    </div>
  );
};
export default TrendsChart;
