import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllOrders, getAllProducts } from "../../../Redux/Actions"
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
import '../Metrics.scss'

// ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function MostRequiredProduct() {
    const products = useSelector(store => store.products)
    const orderItems = useSelector(store => store.order)
    const dispatch = useDispatch()
   
     const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top' ,
        },
        title: {
          display: true,
          text: 'Chart.js Bar Chart',
        },
      },
    };
    
    const labels = products.map(p => p.name);
    
     const data = {
      labels,
      datasets: [
        {
          label: 'Dataset 1',
          data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
          label: 'Dataset 2',
          data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
      ],
    };


  useEffect(() => {
    dispatch(getAllOrders())
    dispatch(getAllProducts())
  }, [])

  useEffect(()=>{
    console.log(order)
  },[order])

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