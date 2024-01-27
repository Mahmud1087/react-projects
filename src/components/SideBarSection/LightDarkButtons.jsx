import lightMode from '../../assets/images/light-mode.png';
import darkMode from '../../assets/images/darkmode.png';

const LightDarkButtons = () => {
  return (
    <div className=' p-2 flex flex-col gap-5 rounded-full w-fit bg-white'>
      <aside>
        <img src={lightMode} alt='light mode icon' className='w-5' />
      </aside>
      <aside>
        <img src={darkMode} alt='dark mode icon' className='w-5' />
      </aside>
    </div>
  );
};
export default LightDarkButtons;
