import LastOrders from './LastOrders';
import TopPlatform from './TopPlatform';

const OrderPlatform = () => {
  return (
    <div className='w-inherit px-3 py-1 flex flex-col gap-3 sm:px-4 sm:ml-[60px] sm:gap-4 lg:flex-row'>
      <LastOrders />
      <TopPlatform />
    </div>
  );
};
export default OrderPlatform;
