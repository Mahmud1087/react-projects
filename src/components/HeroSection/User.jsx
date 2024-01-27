import profileImage from '../../assets/images/Profile.png';
import arrowDown from '../../assets/images/arrow-down.png';
import notificationBell from '../../assets/images/notification-bell.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const User = ({ handleToggle, toggle }) => {
  return (
    <main className='flex justify-center items-center gap-4 w-fit'>
      <div className='hidden sm:block border border-solid border-[#dadddd] rounded-full p-[9px]'>
        <img src={notificationBell} alt='Notification bell' className='w-4' />
      </div>
      <div className='flex justify-center items-center w-fit gap-2 border-solid border border-[#dadddd] rounded-full px-1 py-[3px]'>
        <img src={profileImage} alt='Profile image' className='w-7 sm:w-8' />
        <section className='flex flex-col text-right font-inter'>
          <p className='hidden text-[#26282C] text-[11px] font-semibold sm:text-xs sm:block '>
            Justin Bergson
          </p>
          <p className='hidden text-[#787486] text-[10px] font-medium sm:text-[11px] sm:block '>
            Justin@gmail.com
          </p>
        </section>
        <img src={arrowDown} alt='Arrow Down icon' className='w-5' />
      </div>

      <button
        className='sm:hidden transition-all duration-500 border-none'
        onClick={handleToggle}
      >
        {toggle ? <FaTimes /> : <FaBars />}
      </button>
    </main>
  );
};
export default User;
