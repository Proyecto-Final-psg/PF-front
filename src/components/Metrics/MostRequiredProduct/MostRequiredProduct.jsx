import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllOrders, getAllProducts, getOrderItems } from "../../../Redux/Actions"
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
   // eslint-disable-next-line 
    const products = useSelector(store => store.products)
    const orderItems = useSelector(store => store.orderItems)
    const dispatch = useDispatch()
   
    useEffect(()=>{
      dispatch(getOrderItems())
    },
     // eslint-disable-next-line 
    [])

    useEffect(()=>{
      // console.log('orderItems',orderItems)
    },
     // eslint-disable-next-line 
    [orderItems])

     const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top' ,
        },
        title: {
          display: true,

        },
      },
    };
    
    const labels = [...new Set(orderItems.map(p => p.product))]
    

   
  
  var holder = {};
  
  orderItems.forEach(function(d) {
    if (holder.hasOwnProperty(d.product)) {
      holder[d.product] = holder[d.product] + d.quantity;
    } else {
      holder[d.product] = d.quantity;
    }
  });
  
  var obj2 = [];
  
  for (var prop in holder) {
    obj2.push({ product: prop, quantity: holder[prop] });
  }
  
     const data = {
      labels,
      datasets: [
        {
          label: 'Products sold',
           // eslint-disable-next-line 
          data: labels.map((p) => obj2.map(o => {
             // eslint-disable-next-line 
                if(o.product == p)
                  return o.quantity
              })),
          backgroundColor: 'green'
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
        <Bar options={options} data={data} />
    </div>
  </div>
  </div>
}