const SingleOrder = ({ img, name, amount, date, invoice, status, icon }) => {
  return (
    <article className='flex justify-between items-center w-inherit text-sm font-jakarta border-t border-[#EDF2F6] py-4'>
      <section className='w-[33%] sm:w-[60%] flex items-center gap-2'>
        <img src={img} alt='Profile image' className='hidden sm:block w-7' />
        <p className='text-[#3A3F51] text-xs font-semibold sm:text-base'>
          {name}
        </p>
      </section>

      <p className='text-[#737373] text-xs w-2/5 sm:w-[40%] sm:text-base'>
        {date}
      </p>
      <p className='text-[#0D062D] font-semibold w-[35%] sm:w-[30%] text-xs sm:text-base'>
        {amount}
      </p>
      <p
        className={`${
          status === 'Paid' ? 'text-[#34CAA5]' : 'text-[#ed544e]'
        } text-[10px] w-[25%] sm:w-[30%] sm:text-xs`}
      >
        {status}
      </p>

      <a href='#view' className='flex gap-1 sm:w-[25%]'>
        <img
          src={icon}
          alt='Invoice Icon'
          className='hidden sm:block w-4 h-4'
        />
        <p className='text-[#0D062D] text-[10px] hover:text-blue-900 transition-all sm:text-xs'>
          {invoice}
        </p>
      </a>
    </article>
  );
};
export default SingleOrder;
