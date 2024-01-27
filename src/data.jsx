// Images for Menu Icons
import menuIcon1 from './assets/images/category.png';
import menuIcon2 from './assets/images/trend-up.png';
import menuIcon3 from './assets/images/profile-2user.png';
import menuIcon4 from './assets/images/box.png';
import menuIcon5 from './assets/images/discount-shape.png';
import menuIcon6 from './assets/images/info-circle.png';

// Images for Other Menu Icons
import OtherMenuIcon1 from './assets/images/arrow-right.png';
import OtherMenuIcon2 from './assets/images/setting.png';
import OtherMenuIcon3 from './assets/images/logout.png';

// Images for Trend stats
import statIcon1 from './assets/images/box-tick.png';
import statIcon2 from './assets/images/3d-rotate.png';
import statIcon3 from './assets/images/shopping-cart.png';
import statIcon4 from './assets/images/coin.png';
import statImg1 from './assets/images/uptrend.png';
import statImg2 from './assets/images/downtrend.png';
import icon1 from './assets/images/trending-up.png';
import icon2 from './assets/images/trending-down.png';

// Images for Last orders
import image1 from './assets/images/user5.png';
import image2 from './assets/images/user1.png';
import image3 from './assets/images/user2.png';
import image4 from './assets/images/user3.png';
import image5 from './assets/images/user4.png';
import orderIcon1 from './assets/images/document-download.png';

export const menuIcons = [
  { id: 1, icon: menuIcon1 },
  { id: 2, icon: menuIcon2 },
  { id: 3, icon: menuIcon3 },
  { id: 4, icon: menuIcon4 },
  { id: 5, icon: menuIcon5 },
  { id: 6, icon: menuIcon6 },
];

export const otherMenuIcons = [
  { id: 1, icon: OtherMenuIcon1 },
  { id: 2, icon: OtherMenuIcon2 },
  { id: 3, icon: OtherMenuIcon3 },
];

export const trendStats = [
  {
    id: 1,
    icon: statIcon1,
    img: statImg1,
    text: 'Total Order',
    value: '350',
    dollar: false,
    stat: 23.5,
    statIcon: icon1,
    desc: 'vs. previous month',
    uptrend: true,
  },
  {
    id: 2,
    icon: statIcon2,
    img: statImg2,
    text: 'Total Refund',
    value: '270',
    dollar: false,
    stat: 23.5,
    statIcon: icon2,
    desc: 'vs. previous month',
    uptrend: false,
  },
  {
    id: 3,
    icon: statIcon3,
    img: statImg2,
    text: 'Average Sales',
    value: '1567',
    dollar: false,
    stat: 23.5,
    statIcon: icon2,
    desc: 'vs. previous month',
    uptrend: false,
  },
  {
    id: 4,
    icon: statIcon4,
    img: statImg1,
    text: 'Total Income',
    value: '350,000',
    dollar: true,
    stat: 23.5,
    statIcon: icon1,
    desc: 'vs. previous month',
    uptrend: true,
  },
];

export const lastOrders = [
  {
    id: 1,
    img: image1,
    name: 'Marcus Bergson',
    date: 'Nov 15, 2023',
    amount: '$80,000',
    status: 'Paid',
    icon: orderIcon1,
    invoice: 'View',
  },
  {
    id: 2,
    img: image2,
    name: 'Jaydon Vaccaro',
    date: 'Nov 15, 2023',
    amount: '$150,000',
    status: 'Refund',
    icon: orderIcon1,
    invoice: 'View',
  },
  {
    id: 3,
    img: image3,
    name: 'Corey Schleifer',
    date: 'Nov 14, 2023',
    amount: '$87,000',
    status: 'Paid',
    icon: orderIcon1,
    invoice: 'View',
  },
  {
    id: 4,
    img: image4,
    name: 'Cooper Press',
    date: 'Nov 14, 2023',
    amount: '$100,000',
    status: 'Refund',
    icon: orderIcon1,
    invoice: 'View',
  },
  {
    id: 5,
    img: image5,
    name: 'Philip Lubin',
    date: 'Nov 13, 2023',
    amount: '$78,000',
    status: 'Paid',
    icon: orderIcon1,
    invoice: 'View',
  },
];

export const topPlatform = [
  {
    id: 1,
    platform: 'Book Bazaar',
    amount: '$2,500,000',
    percent: 15,
    progressBgColor: 'before:bg-[#6160DC]',
    progress: 'before:w-[50%]',
  },
  {
    id: 2,
    platform: 'Artisan Aisle',
    amount: '$1,800,000',
    percent: 10,
    progressBgColor: 'before:bg-[#54C5EB]',
    progress: 'before:w-[40%]',
  },
  {
    id: 3,
    platform: 'Toy Troop',
    amount: '$1,200,000',
    percent: 8,
    progressBgColor: 'before:bg-[#FFB74A]',
    progress: 'before:w-[20%]',
  },
  {
    id: 4,
    platform: 'XStore',
    amount: '$2,200,000',
    percent: 11,
    progressBgColor: 'before:bg-[#FF4A55]',
    progress: 'before:w-[20%]',
  },
];
