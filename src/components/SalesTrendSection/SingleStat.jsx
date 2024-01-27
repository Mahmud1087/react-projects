const SingleStat = ({
  id,
  icon,
  img,
  text,
  value,
  dollar,
  stat,
  statIcon,
  desc,
  uptrend,
}) => {
  return (
    <section className='flex flex-col gap-6 bg-white rounded-2xl p-4 sm:gap-3 lg:gap-5'>
      <article className='flex justify-between items-center'>
        <div className='border border-solid border-[#E6E6E6] rounded-full p-3 sm:p-[9px]'>
          <img src={icon} alt={`Stat icon ${id}`} className='w-5 sm:w-4' />
        </div>
        <img src={img} alt='trend image' className='w-32 sm:w-16 lg:w-fit' />
      </article>

      <p className='text-[#898989] text-xl font-jakarta font-semibold sm:text-base'>
        {text}
      </p>
      <p className='text-[#3A3F51] text-2xl font-bold font-jakarta sm:text-xl'>{`${
        dollar ? '$' : ''
      }${value}`}</p>

      <aside className='flex gap-6 items-center sm:justify-between sm:items-start sm:gap-2 sm:flex-col lg:justify-between lg:flex-row'>
        <div
          className={`flex gap-1 justify-center items-center px-3 py-1 rounded-full ${
            uptrend ? 'bg-[#34caa51f]' : 'bg-[#ed544e1f]'
          } w-fit`}
        >
          <img src={statIcon} alt='icon' className='w-4 sm:w-full' />
          <p
            className={`${
              uptrend ? 'text-[#34CAA5]' : 'text-[#ED544E]'
            } text-sm sm:text-[11px] font-jakarta`}
          >
            {stat}%
          </p>
        </div>
        <p className='text-lg text-[#606060] sm:text-sm lg:text-right '>
          {desc}
        </p>
      </aside>
    </section>
  );
};
export default SingleStat;
