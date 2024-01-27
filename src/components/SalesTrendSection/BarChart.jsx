import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      border: {
        dash: [4, 3],
        color: 'transparent',
      },
    },
  },
};

const labels = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const data = {
  labels,
  datasets: [
    {
      label: '',
      data: [
        6000, 10500, 2600, 25000, 9000, 45000, 9000, 15000, 9000, 15000, 32000,
        4000, 30000, 23000, 50000,
      ],
      backgroundColor: 'rgba(52, 202, 165, 0.10)',
      hoverBackgroundColor: '#34CAA5',
      borderRadius: 50,
    },
  ],
};

const App = () => {
  return <Bar options={options} data={data} />;
};
export default App;
