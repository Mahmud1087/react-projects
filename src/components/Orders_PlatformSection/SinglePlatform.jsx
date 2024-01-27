const SinglePlatform = ({
  platform,
  amount,
  percent,
  progressBgColor,
  progress,
}) => {
  return (
    <section className='flex flex-col gap-3 font-jakarta text-sm'>
      <p className='text-[#22242C] font-semibold'>{platform}</p>

      <div
        className={`relative w-full p-1 rounded-full bg-[#F5F5F5] ${progressBgColor} ${progress} before:absolute before:left-0 before:top-0 before:h-full before:rounded-full`}
      ></div>

      <section className='flex justify-between items-center text-[#525252]'>
        <p>{amount}</p>
        <p>+{percent}%</p>
      </section>
    </section>
  );
};
export default SinglePlatform;
