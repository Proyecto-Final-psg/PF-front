import { useEffect } from "react"
import { useDispatch} from "react-redux"
import { NavLink, Outlet } from 'react-router-dom'
import { getAllProducts } from "../../Redux/Actions"
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, ArcElement, Tooltip, Legend } from 'chart.js';
import './Metrics.scss'
import { useState } from "react";

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

  // eslint-disable-next-line 
  const dispatch = useDispatch()

  const [itemSelected, setItemSelected] = useState('stock')

  useEffect(() => {
    return setItemSelected('')
  },
    // eslint-disable-next-line 
    [])

  useEffect(() => {
    dispatch(getAllProducts())
  },
    // eslint-disable-next-line 
    [])

  useEffect(() => {
    const stock = document.getElementById('stock')
    const bestSell = document.getElementById('bestSell')
    const userMgm = document.getElementById('userMgm')
    const userCrud = document.getElementById('userCrud')
    const topCustomer = document.getElementById('topCustomer')
    const orders = document.getElementById('orders')

    if (itemSelected === 'stock') {
      stock.classList.add('is-active')
      bestSell.classList.remove('is-active')
      userMgm.classList.remove('is-active')
      userCrud.classList.remove('is-active')
      topCustomer.classList.remove('is-active')
      orders.classList.remove('is-active')
    }
    if (itemSelected === 'bestSell') {
      bestSell.classList.add('is-active')
      stock.classList.remove('is-active')
      userMgm.classList.remove('is-active')
      userCrud.classList.remove('is-active')
      topCustomer.classList.remove('is-active')
      orders.classList.remove('is-active')
    }
    if (itemSelected === 'userMgm') {
      userMgm.classList.add('is-active')
      bestSell.classList.remove('is-active')
      stock.classList.remove('is-active')
      userCrud.classList.remove('is-active')
      topCustomer.classList.remove('is-active')
      orders.classList.remove('is-active')
    }
    if (itemSelected === 'userCrud') {
      userCrud.classList.add('is-active')
      stock.classList.remove('is-active')
      bestSell.classList.remove('is-active')
      userMgm.classList.remove('is-active')
      topCustomer.classList.remove('is-active')
      orders.classList.remove('is-active')
    }
    if (itemSelected === 'topCustomer') {
      topCustomer.classList.add('is-active')
      stock.classList.remove('is-active')
      bestSell.classList.remove('is-active')
      userMgm.classList.remove('is-active')
      userCrud.classList.remove('is-active')
      orders.classList.remove('is-active')
    }
    if (itemSelected === 'orders') {
      orders.classList.add('is-active')
      topCustomer.classList.remove('is-active')
      stock.classList.remove('is-active')
      bestSell.classList.remove('is-active')
      userMgm.classList.remove('is-active')
      userCrud.classList.remove('is-active')
    }

  }, [itemSelected])


  function menuSelected(e) {
    setItemSelected(e.target.id)
  }

  return <div className="metricas">
    <div className="m-5 p-3 menu shadow">
      <p className="menu-label">
        Admin
      </p>
      <ul className="menu-list">
        <li onClick={menuSelected}><NavLink id="orders" to='admin-orders'>

          Orders
          <span id="orders" className="iconMenu material-symbols-outlined">receipt_long</span>
        </NavLink></li>
      </ul>

      <p className="menu-label">
        Metrics
      </p>
      <ul className="menu-list">
        <li onClick={menuSelected}><NavLink id="stock" to='stock-management'>

          Stock Management
          <span id="stock" className="iconMenu material-symbols-outlined">inventory</span>

        </NavLink></li>
        <li onClick={menuSelected}><NavLink id="bestSell" to='most-required-product'>
          Best selling products
          <span id="bestSell" className="iconMenu material-symbols-outlined">trending_up</span>
        </NavLink></li>

        <li onClick={menuSelected}><NavLink id="topCustomer" to='top-customers'>
          Top Customers
          <span id="topCustomer" className="iconMenu material-symbols-outlined">face</span>
        </NavLink></li>
      </ul>
      <p className="menu-label">
        User Management
      </p>
      <ul className="menu-list">
        <li onClick={menuSelected}><NavLink id="userMgm" to='user-management'>
          User Roles
          <span id="userMgm" className="iconMenu material-symbols-outlined">badge</span>
        </NavLink></li>
      </ul>

      <ul className="menu-list">
        <li onClick={menuSelected}><NavLink id="userCrud" to='user-crud'>
          User Blocker
          <span id="userCrud" className="iconMenu material-symbols-outlined">manage_accounts</span>
        </NavLink></li>
      </ul>
    </div>
    <Outlet />

  </div>
}

export const aosEffectConfig = 400;