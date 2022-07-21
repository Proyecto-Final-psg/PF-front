import './Orders.scss'
import '../Metrics.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getAllOrders, getAllUsers } from '../../../Redux/Actions'
import { NavLink } from 'react-router-dom'

import noOrder from '../../../assets/noorder.png'
import emailjs from '@emailjs/browser';
import swal from 'sweetalert'

export function Orders() {
  const dispatch = useDispatch()
  const orders = useSelector(store => store.order)
  const [orderList, setOrderList] = useState([])
  const [statusFilter, setStatusFilter] = useState('')

  useEffect(() => {
    dispatch(getAllOrders())

  },
    // eslint-disable-next-line 
    [])

  useEffect(() => {
    setOrderList(orders)
    console.log('ORDERS', orders);
  }, [orders])

  function formatDate(timestamp) {
    const d = new Date(timestamp);
    const date = d.getHours() + ":" + d.getMinutes() + ", " + d.toDateString();
    // console.log(date);
    return date;
  }
  function statusToFilter(e){
    setStatusFilter(e.target.value)
  }

  function filterOrdersByStatus(e){
    e.preventDefault()
    console.log(statusFilter)
    if(statusFilter === "")
    setOrderList(orders)
    else{
      let filteredOrders = orders.filter(o => o.status === statusFilter)
      setOrderList(filteredOrders)
    }
  }

  return <div className="container datas">
    <h1 className="mt-5 custom-title">Order List</h1>

      <span>Filter orders by status</span>
    <form onSubmit={filterOrdersByStatus} className='filter-orders'>
      <select name="" id="" onChange={statusToFilter} value={statusFilter}>
        <option value="" disabled selected>Status</option>
        <option value="" >All</option>
        <option value="completed" >Complete</option>
        <option value="inprogress">In Progress</option>
        <option value="canceled" >Canceled</option>
      </select>
      <input type='submit' className='btn btn-success' value='Filter' />
    </form>

    <div className="lower-10" style={{width:"100%"}}>
      {orderList.length > 0 ?
        <div className=''>
          <table className="table is-bordered shadow scrolldown" >
            <thead>
              <tr>
                <th><abbr title="ID of the order">ID</abbr></th>
                <th><abbr title="User name">User</abbr></th>
                <th><abbr title="Status of the order">Status</abbr></th>
                <th><abbr title="Date of Order">Date</abbr></th>
              </tr>
            </thead>
            <tbody>
              {orderList.length > 0 && orderList.map(o => {
                return <tr key={o.id} style={{width:"100%"}}>
                  <th><NavLink to={`${__dirname}metrics/order-detailed/${o.id}`}>{o.id}</NavLink></th>
                  <td>{o.user_email && o.user_email !=="" ? o.user_email : 'N/A'}</td>
                  <td>{o.status}</td>
                  <td>{formatDate(o.createdAt)}</td>
                </tr>

              })}
            </tbody>
          </table>

        </div>
        :
        <div id='no-orders'>
          <p>No purchase orders were generated</p>
          <img src={noOrder} alt="" />
        </div>
      }
    </div>
  </div>
}