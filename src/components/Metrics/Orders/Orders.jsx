import './Orders.scss'
import '../Metrics.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getAllOrders } from '../../../Redux/Actions'
import {useNavigate } from 'react-router-dom'
import { format } from 'date-fns';
import noOrder from '../../../assets/noorder.png'
import Aos from 'aos'
import 'aos/dist/aos.css'

export function Orders() {


  useEffect(() => {
    Aos.init({ once: true })
  }, [])

  const dispatch = useDispatch()
  const orders = useSelector(store => store.order)
  const [orderList, setOrderList] = useState([])
  const [statusFilter, setStatusFilter] = useState('')
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(getAllOrders())

  },
    // eslint-disable-next-line 
    [])

  useEffect(() => {
    setOrderList(orders)
  }, [orders])

  function formatDate(timestamp) {
    const d = new Date(timestamp);
    const date = format(d, 'yyyy/MM/dd kk:mm:ss')
    return date;
  }
  function statusToFilter(e) {
    setStatusFilter(e.target.value)
  }

  function filterOrdersByStatus(e) {
    e.preventDefault()
    // console.log(statusFilter)
    if (statusFilter === "")
      setOrderList(orders)
    else {
      let filteredOrders = orders.filter(o => o.status === statusFilter)
      setOrderList(filteredOrders)
    }
  }

  const handleOrderDetail = (id) => {
    navigate(`${__dirname}metrics/order-detailed/${id}`)
  }

  return <div className="container datas">
    <h1 className="mt-5 custom-title">
      Order List
      <span id="orders" className="iconMenu material-symbols-outlined">receipt_long</span>
    </h1>
    <span>Orders will be listed here, and you can access them, change their status, and see the details</span>
    <span>Filter orders by status</span>
    <form onSubmit={filterOrdersByStatus} className='filter-orders'>
      <select name="" id="" onChange={statusToFilter} value={statusFilter}>
        <option value="" disabled >Status</option>
        <option value="" >All</option>
        <option value="completed" >Complete</option>
        <option value="inprogress">In Progress</option>
        <option value="canceled" >Canceled</option>
      </select>
      <button type='submit' className="btn btn-success btn-w">
        <span>Filter </span>
        <span className="material-symbols-outlined">content_paste_search</span>
      </button>
    </form>

    <div className="lower-10" style={{ width: "100%" }}>
      {orderList.length > 0 ?
        <div className='conteiner-top'>
          <table className="table is-bordered is-narrow shadow" data-aos='fade-up' >
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
                return <tr onClick={() =>handleOrderDetail(o.id)} key={o.id} className='order-detail-row' >
                  {/* <Link  to={`${__dirname}metrics/order-detailed/${o.id}`}> */}
                  <th className='fit'>{o.id}</th>
                  <td>{o.user_email && o.user_email !== "" ? o.user_email : 'N/A'}</td>
                  <td className='fit'>{
                    (o.status === 'inprogress') ? <span className="material-symbols-outlined">hourglass_empty</span>
                      : (o.status === 'completed') ? <span className="material-symbols-outlined">verified</span>
                        : (o.status === 'canceled') ? <span className="material-symbols-outlined">cancel</span>
                          : ''
                  }</td>
                  <td>{formatDate(o.createdAt)}</td>
                  {/* </Link> */}
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