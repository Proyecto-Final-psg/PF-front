import './Orders.scss'
import '../Metrics.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getAllOrders, getAllUsers } from '../../../Redux/Actions'
import { NavLink } from 'react-router-dom'

import noOrder from '../../../assets/noorder.png'
import emailjs from '@emailjs/browser';
import swal from 'sweetalert'

export function Orders() {
  const dispatch = useDispatch()
  const orders = useSelector(store => store.order)
  
  useEffect(() => {
    dispatch(getAllOrders())
   
  },
  // eslint-disable-next-line 
  [])

  useEffect(()=>{
    console.log('ORDERS',orders);
  },[orders])


  return <div className="container datas">
    <h1 className="mt-5">Order List</h1>


    <div className="lower-10">
      {orders.length > 0 ?
        <div className='table-container'>
          <table className="table shadow scrolldown" >
            <thead>
              <tr>
                <th><abbr title="ID of the order">ID</abbr></th>
                <th><abbr title="Status of the order">Status</abbr></th>
                <th><abbr title="User name">User</abbr></th>
                <th><abbr title="Date of Order">Date</abbr></th>
              </tr>
            </thead>
            <tbody>
              {orders.length > 0 && orders.map(o => {
                return <tr key={o.id}>
                  <th><NavLink to={`${__dirname}metrics/order-detailed/${o.id}`}>{o.id}</NavLink></th>
                  <td>{o.status}</td>
                  <td>{o.user ? o.user.user_name : 'N/A'}</td>
                  <td>{o.createdAt}</td>
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