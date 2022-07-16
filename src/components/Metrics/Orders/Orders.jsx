import './Orders.scss'
import '../Metrics.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getAllOrders, getAllUsers} from '../../../Redux/Actions'
import { NavLink, Outlet } from 'react-router-dom'
export function Orders(){
    
    const dispatch = useDispatch()
    const orders = useSelector(store => store.order)
    const users = useSelector(store => store.users)

    useEffect(()=>{
        dispatch(getAllOrders())
        dispatch(getAllUsers())
        console.log(orders)
        console.log(users)
    },
     // eslint-disable-next-line 
    [])

    function getUser(id){
       // eslint-disable-next-line 
        const user =  users.find(u => u.user_id == id)
        console.log(user)
        return user.user_name
    }
    

    return <div className="container datas">
    <h1 className="mt-5">Order List</h1>
    {/* <hr /> */}

    <div className="order-data">
      <table className="table is-hoverable is-bordered is-narrow shadow" style={{width:"50%"}}>
        <thead>
          <tr>
            <th><abbr title="ID">ID</abbr></th>
            <th>Status</th>
            <th><abbr title="Stock">User</abbr></th>
            <th><abbr title="Action">Date</abbr></th>
          </tr>
        </thead>
        <tbody>
        {orders.length>0 && orders.map(o => {
            return <tr>
                    <th>{o.id}</th>
                    <td>{o.status}</td>
                    <td><NavLink to={`order-detailed/${o.userUserId}`}>{getUser(o.userUserId)}</NavLink> </td>
                    <td>{o.createdAt}</td>
                </tr>
            
        })}
        </tbody>
      </table>

      <div className="">
       <Outlet />
      </div>
    </div>

  </div>
}