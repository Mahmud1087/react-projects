import MenuLinks from './MenuLinks';
import OtherMenuLinks from './OtherMenuLinks';

const SideBar = ({ toggle }) => {
  return (
    <div
      className={`${
        toggle ? 'right-0' : ' -right-1/2'
      } fixed top-0 w-fit flex flex-col justify-between h-[calc(100vh-52px)] mt-[52px] items-center bg-[#f7f8fa] border-r-[#ebecf2] border-solid border-r-[1px] p-3 transition-all duration-500 sm:left-0 sm:pb-12 sm:mt-0 sm:h-screen lg:pb-6 `}
    >
      <MenuLinks />
      <OtherMenuLinks />
    </div>
  );
};
export default SideBar;
