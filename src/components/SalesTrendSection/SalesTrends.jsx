import TrendStat from './TrendStat';
import TrendsChart from './TrendsChart';

const SalesTrends = () => {
  return (
    <div className='flex flex-col gap-3 py-2 px-3 m-auto mt-[58px] sm:gap-4 sm:p-4 sm:flex-row sm:ml-[60px] sm:mt-[63px] '>
      <TrendsChart />
      <TrendStat />
    </div>
  );
};
export default SalesTrends;
