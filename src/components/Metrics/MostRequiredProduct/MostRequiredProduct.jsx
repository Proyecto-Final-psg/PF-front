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
import { useState } from "react";


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
  const orderItems = useSelector(store => store.orderItems)
  let result = orderItems.reduce((acc, curr) => {
    const index = acc.findIndex(item => item.product === curr.product)
    index > -1 ? acc[index].quantity += curr.quantity : acc.push({
      product: curr.product,
      quantity: curr.quantity
    })
    return acc
  }, [])


  const [filterView, setFilterView] = useState(10)
  const [topSells, setTopSells] = useState(result)
  const dispatch = useDispatch()
  // let names = [...new Set(orderItems.map(i => i.product))]
  useEffect(() => {
    dispatch(getOrderItems())
  },
    // eslint-disable-next-line 
    [])

  


  // result = result.slice(0,10)
  result.sort((b, a) => a.quantity - b.quantity); // b - a for reverse sort

  useEffect(()=>{
    if(filterView !== 'all'){
      result = result.slice(0,filterView)
    }
  },[filterView])


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

  const labels = topSells.map(i => i.product);
  console.log('labels',labels)
  const data = {
    labels,
    datasets: [
      {
        label: 'Sold',
        data: topSells.map(i => i.quantity),
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

  function filterSellingView(e){
    console.log('entre')
    setFilterView(e.target.value)
  }

  useEffect(()=>{
     console.log('cambió a',filterView)
    //  if(!filterView) setTopSells(result.slice(0,10))

    if(filterView !== 'all')
      result = result.slice(0,filterView)
    else{
      result = orderItems.reduce((acc, curr) => {
        const index = acc.findIndex(item => item.product === curr.product)
        index > -1 ? acc[index].quantity += curr.quantity : acc.push({
          product: curr.product,
          quantity: curr.quantity
        })
        return acc
      }, [])

    }
      setTopSells(result)
  },[filterView])

  return <div className="container datas">

    <h1 className="mt-5 custom-title">Best selling products</h1>
    <span>Showing</span>
    <select className="select" name="" id="" onChange={filterSellingView}>
      <option value="all">All Products</option>
      <option value="10" selected>Top 10</option>
      <option value="20">Top 20</option>
    </select>

    <div className="lower-10" style={{ width: "100%" }}>

      <div className="sells-year">
        <Bar options={options} data={data} />
      </div>
    </div>
  </div>
}