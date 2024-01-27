import logo from '../../assets/images/Vector.png';
import { menuIcons } from '../../data';
import LightDarkButtons from './LightDarkButtons';

const MenuLinks = () => {
  return (
    <section className=' flex flex-col justify-center items-center w-fit gap-5 sm:gap-12 lg:gap-6 '>
      <img src={logo} alt='logo' className='w-8 ' />
      {menuIcons.map(({ id, icon }) => {
        return (
          <img
            key={id}
            src={icon}
            alt={`menu icon ${id}`}
            className='w-[1.2rem]'
          />
        );
      })}
      <LightDarkButtons />
    </section>
  );
};
export default MenuLinks;
