import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllOrders, getOrderItems } from "../../../Redux/Actions"

export function TopCustomers(){

  const dispatch = useDispatch()
  const orders = useSelector(store => store.orderItems)

  useEffect(()=>{
    dispatch(getOrderItems())
  },[])

  useEffect(()=>{
    console.log(orders)
  },[orders])

    return <div className="container datas">
    
    <h1 className="mt-5">Top Customers</h1>


    <div className="lower-10" style={{width:"100%"}}>
    <table class="table is-bordered is-narrow shadow">
        <thead>
          <tr>
            <th><abbr title="ID">ID</abbr></th>
            <th>Product</th>
            <th><abbr title="Stock">Stock</abbr></th>
            <th><abbr title="Action">Action</abbr></th>
          </tr>
        </thead>
        <tbody>
          </tbody>
          </table>
  </div>
  </div>
}