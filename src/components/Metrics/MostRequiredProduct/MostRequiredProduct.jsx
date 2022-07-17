import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllOrders, getAllProducts, getOrderItems } from "../../../Redux/Actions"
import { Chart as ChartJS, ArcElement, Tooltip, Legend, BarElement, Title, CategoryScale, LinearScale } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import '../Metrics.scss'
ChartJS.register(ArcElement, Tooltip, Legend);



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
   // eslint-disable-next-line 
    const products = useSelector(store => store.products)
    const orderItems = useSelector(store => store.orderItems)
    const dispatch = useDispatch()
    let names = [...new Set(orderItems.map(i => i.product))]
    useEffect(()=>{
      dispatch(getOrderItems())
    },
     // eslint-disable-next-line 
    [])

    useEffect(()=>{
      console.log('orderItems',orderItems)
      console.log(names)
    },
     // eslint-disable-next-line 
    [orderItems])

    const data = {
      // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      labels: names,
      datasets: [
        {
          // eslint-disable-next-line 
          label: '# of Votes',
          // data: [12, 19, 3, 5, 2, 3],
          data: orderItems.map(i => i.quantity),
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        },
      ],
    };

  useEffect(() => {
    dispatch(getAllOrders())
    dispatch(getAllProducts())
  }, 
   // eslint-disable-next-line 
  [])

  // useEffect(()=>{
  //   console.log(order)
  // },[order])

  return <div className="container datas">
    
    <h1 className="mt-5">Best selling products</h1>
    <hr />

    <div className="lower-10" style={{width:"100%"}}>

    <div className="sells-year">
           <Doughnut data={data} />;
    </div>
  </div>
  </div>
}