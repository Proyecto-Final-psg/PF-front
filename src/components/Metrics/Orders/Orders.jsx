import './Orders.scss'
import '../Metrics.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getAllOrders, getAllUsers, getItemsOfOrder} from '../../../Redux/Actions'
import { NavLink, Outlet } from 'react-router-dom'
import { useState } from 'react'

export function Orders(){
    
    const dispatch = useDispatch()
    const orders = useSelector(store => store.order)
    const users = useSelector(store => store.users)
    
    useEffect(()=>{
        dispatch(getAllOrders())
        dispatch(getAllUsers())
        // console.log(orders)
        // console.log(users)
        // console.log('DIRNAME',__dirname)
    },
     // eslint-disable-next-line 
    [])

    function getUser(id){
       // eslint-disable-next-line 
        const user =  users.find(u => u.user_id == id)
        // console.log(user)
        return user.user_name
    }

   
    

    return <div className="container datas">
    <h1 className="mt-5">Order List</h1>
    {/* <hr /> */}

    <div className="order-data">
      <table className="table is-hoverable is-bordered is-narrow shadow scrolldown" style={{width:"50%"}}>
        <thead>
          <tr>
            <th><abbr title="ID of the order">ID</abbr></th>
            <th><abbr title="Status of the order">Status</abbr></th>
            <th><abbr title="User name">User</abbr></th>
            <th><abbr title="Date of Order">Date</abbr></th>
          </tr>
        </thead>
        <tbody>
        {orders.length>0 && orders.map(o => {
            return <tr>
                    <th><NavLink to={`${__dirname}metrics/order-detailed/${o.id}`}>{o.id}</NavLink></th>
                    <td>{o.status}</td>
                    <td>{getUser(o.userUserId)}</td>
                    <td>{o.createdAt}</td>
                </tr>
            
        })}
        </tbody>
      </table>
    </div>
    {/* <Outlet /> */}

  </div>
}