import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllOrders, getAllProducts, getOrderItems } from "../../../Redux/Actions"
import '../Metrics.scss'
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
      // console.log('orderItems',orderItems)
      // console.log(names)
    },
     // eslint-disable-next-line 
    [orderItems])

    const result = orderItems.reduce((acc, curr) => {
      const index = acc.findIndex(item => item.product === curr.product)
      index > -1 ? acc[index].quantity += curr.quantity : acc.push({
        product: curr.product,
        quantity: curr.quantity
      })
      return acc
    }, [])

    result.sort((b,a) => a.quantity - b.quantity); // b - a for reverse sort


    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          
        },
      },
    };
    
    const labels = result.map(i => i.product);
    
     const data = {
      labels,
      datasets: [
        {
          label: 'Sold',
          data: result.map(i => i.quantity),
          backgroundColor: 'green',
        }
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
    
    <h1 className="mt-5 custom-title">Best selling products</h1>


    <div className="lower-10" style={{width:"100%"}}>

    <div className="sells-year">
    <Bar options={options} data={data} />
    </div>
  </div>
  </div>
}