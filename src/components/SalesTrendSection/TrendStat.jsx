import { trendStats } from '../../data';
import SingleStat from './SingleStat';

const TrendStat = () => {
  return (
    <div className='flex flex-col gap-3 w-full sm:grid sm:grid-cols-2 sm:w-1/2 sm:gap-3 lg:w-2/5 '>
      {trendStats.map((trendInfo) => {
        return <SingleStat key={trendInfo.id} {...trendInfo} />;
      })}
    </div>
  );
};
export default TrendStat;
