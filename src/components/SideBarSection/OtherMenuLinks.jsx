import { otherMenuIcons } from '../../data';

const OtherMenuLinks = () => {
  return (
    <div className='flex flex-col justify-center items-center w-fit gap-6 sm:gap-12 lg:gap-6'>
      {otherMenuIcons.map(({ id, icon }) => {
        return (
          <img
            key={id}
            src={icon}
            alt={`Other menu icon ${id}`}
            className='w-[1.2rem]'
          />
        );
      })}
    </div>
  );
};
export default OtherMenuLinks;
