import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllUsers,  getOrderItems,  } from "../../../Redux/Actions"
// import { API_URL } from "../../../Redux/Constants"

export function TopCustomers(){

  const dispatch = useDispatch()
  const orders = useSelector(store => store.order)
  const users = useSelector(store => store.users)
  const orderItems = useSelector(store => store.orderItems)

  useEffect(()=>{
    dispatch(getOrderItems())
    dispatch(getAllUsers())
    dispatch(getOrderItems())
       // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  useEffect(()=>{
    
    console.log(orders)
  },[orders])

  useEffect(()=>{
    console.log(orderItems)
  },[orderItems])

  function getUserName(id){
    const user = users.find(u => u.user_id === id)
    return user.user_name
  }

  function getDetailsFrom(id){
    
    const ordersToSum = orderItems.filter(o => o.order === id)
    const amountOfMoney = ordersToSum.reduce((a, b) => a + (b["price"] || 0), 0);
    console.log('amount $',amountOfMoney)
    return amountOfMoney
  }


    return <div className="container datas">
    
    <h1 className="mt-5">Top Customers</h1>


    <div className="lower-10" style={{width:"100%"}}>
    <table className="table is-bordered is-narrow shadow">
        <thead>
          <tr>
            <th><abbr title="Top users">Name</abbr></th>
            <th>Orders</th>
            <th><abbr title="Totals">Totals</abbr></th>
          </tr>
        </thead>
        <tbody>
          {orders && orders.map(o => {
            return <tr>
              <td>{getUserName(o.userUserId)}</td>
              <td>{o.id}</td>
              <td>${getDetailsFrom(o.id)}</td>
            </tr>
          })}
          </tbody>
          </table>
  </div>
  </div>
}