import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllProducts } from "../../../Redux/Actions"
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, ArcElement, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import '../Metrics.scss'

// ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export function MostRequiredProduct() {
    const products = useSelector(store => store.products)
    const dispatch = useDispatch()
   
  // YEAR CHART
  const options = {
    responsive: true,
    interaction: {
      mode: 'index' /*as const*/,
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: 'Sells of 2022',
      },
    },
    scales: {
      y: {
        type: 'linear' /*as const*/,
        display: true,
        position: 'left' /*as const*/,
      },
      y1: {
        type: 'linear' /*as const*/,
        display: true,
        position: 'right' /*as const*/,
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  const data2 = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: products.map(p => p.stock),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        yAxisID: 'y',
      },
      {
        label: 'Dataset 2',
        data: products.map(p => p.name),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        yAxisID: 'y1',
      },
    ],
  };



  useEffect(() => {
    dispatch(getAllProducts())
  }, [])

  return <div className="container datas">
    
    <h1 className="mt-5">Best selling products</h1>
    <hr />

    <div className="lower-10" style={{width:"100%"}}>

    <div className="sells-year">
      <Line options={options} data={data2} />
    </div>
  </div>
  </div>
}