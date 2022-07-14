import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink, Outlet } from 'react-router-dom'
import { getAllProducts } from "../../Redux/Actions"
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, ArcElement, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';
import './Metrics.scss'
import { MostRequiredProduct } from "./MostRequiredProduct/MostRequiredProduct";
import { StockManagement } from "./StockManagement/StockManagement";
import { useState } from "react";

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

export function Metrics() {

  const products = useSelector(store => store.products)
  const dispatch = useDispatch()


  const [itemSelected , setItemSelected ] = useState('')

  useEffect(() => {
    dispatch(getAllProducts())
  }, [])

  useEffect(()=>{
    const stock = document.getElementById('stock')
    const bestSell = document.getElementById('bestSell')
    const userMgm = document.getElementById('userMgm')
    const userCrud = document.getElementById('userCrud')

    if(itemSelected === 'stock'){
      stock.classList.add('is-active')
      bestSell.classList.remove('is-active')
      userMgm.classList.remove('is-active')
      userCrud.classList.remove('is-active')
    }
    if(itemSelected === 'bestSell'){
      bestSell.classList.add('is-active')
      stock.classList.remove('is-active')
      userMgm.classList.remove('is-active')
      userCrud.classList.remove('is-active')
    }
    if(itemSelected === 'userMgm'){
      userMgm.classList.add('is-active')
      bestSell.classList.remove('is-active')
      stock.classList.remove('is-active')
      userCrud.classList.remove('is-active')
    }
    if(itemSelected === 'userCrud'){
      userCrud.classList.add('is-active')
      stock.classList.remove('is-active')
      bestSell.classList.remove('is-active')
      userMgm.classList.remove('is-active')
    }

  },[itemSelected])


  function menuSelected(e){
    setItemSelected(e.target.id)
  }

  return <div className="metricas">
    <div className="datas">

    </div>
    {/* <h1 className="mt-5">Metrics</h1> */}
    <hr />
    <aside class="menu" style={{marginTop:"50px",paddingLeft:"50px"}}>

    <p class="menu-label">
    Metrics
  </p>
  <ul class="menu-list">
    <li onClick={menuSelected}><NavLink  id="stock" to='stock-management'>

        Stock Management 
        <span class="iconMenu material-symbols-outlined">inventory</span>

      </NavLink></li>
    <li onClick={menuSelected}><NavLink id="bestSell" to='most-required-product'>
      Best selling products
      <span class="iconMenu material-symbols-outlined">trending_up</span>
      </NavLink></li>
  </ul>
      <p class="menu-label">
      User Management
      </p>
      <ul class="menu-list">
        <li onClick={menuSelected}><NavLink id="userMgm" to='user-management'>
        User Rol
        <span class="iconMenu material-symbols-outlined">badge</span>
        </NavLink></li>
      </ul>

      <ul class="menu-list">
        <li onClick={menuSelected}><NavLink id="userCrud" to='user-crud'>
        User CRUD
        <span class="iconMenu material-symbols-outlined">manage_accounts</span>
        </NavLink></li>
      </ul>
     
    </aside>

      <Outlet />
  </div>
}