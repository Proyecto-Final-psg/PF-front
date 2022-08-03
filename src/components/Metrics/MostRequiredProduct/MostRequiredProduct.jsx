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
  const [topSells, setTopSells] = useState(result.sort((b, a) => a.quantity - b.quantity))
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getOrderItems())
  },
    // eslint-disable-next-line 
    [])

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

  function filterSellingView(e) {
    setFilterView(e.target.value)
  }

  let aux = null;

  function filter() {
    if (filterView !== 'all') {
      aux = result.slice(0, filterView)
    }
    else {

      aux = orderItems.reduce((acc, curr) => {
        const index = acc.findIndex(item => item.product === curr.product)
        index > -1 ? acc[index].quantity += curr.quantity : acc.push({
          product: curr.product,
          quantity: curr.quantity
        })

        return acc
      }, [])

    }
    aux.sort((b, a) => a.quantity - b.quantity)
    setTopSells(aux)
  }

  return <div className="container datas">

    <h1 className="mt-5 custom-title">
      Best selling products
      <span id="bestSell" className="iconMenu material-symbols-outlined">trending_up</span>
    </h1>
    <span>Showing</span>
    <div className="filter-orders">
      <select className="select" name="" id="" onChange={filterSellingView}>
        <option value="all">All Products</option>
        <option value="10" >Top 10</option>
        <option value="20">Top 20</option>
      </select>
      <button className="ml-4 btn btn-success btn-w" onClick={filter}>
        <span>Filter </span>
        <span className="material-symbols-outlined">bar_chart</span>
      </button>

    </div>

    <div className="lower-10" style={{ width: "100%" }}>

      <div className="sells-year">
        <Bar options={options} data={data} />
      </div>
    </div>
  </div>
}