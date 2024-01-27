import SideBar from './components/SideBarSection/SideBar';
import Hero from './components/HeroSection/Hero';
import SalesTrends from './components/SalesTrendSection/SalesTrends';
import OrderPlatform from './components/Orders_PlatformSection/OrderPlatform';
import { useState } from 'react';

const App = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prevToggle) => !prevToggle);
  };

  return (
    <>
      <Hero toggle={toggle} handleToggle={handleToggle} />
      <SideBar toggle={toggle} />
      <SalesTrends />
      <OrderPlatform />
    </>
  );
};
export default App;
