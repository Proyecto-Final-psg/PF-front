import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllOrders, getAllUsers } from '../../../Redux/Actions';

const HistoryShops = () => {

  /*  const usr = useSelector((store) => store.user);
   const history = useSelector(store => store.cart) */
  const orders = useSelector(store => store.order)
  const users = useSelector(store => store.users)
  //console.log(history)

  const dispatch = useDispatch()

  useEffect(() => {
    /* dispatch(getOrderDetails(usr[0].user_id))
    dispatch(getUserCart(usr[0].user_id)) */
    dispatch(getAllOrders())
    dispatch(getAllUsers())
    console.log(orders)
    console.log(users)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function getUser(id){
    // eslint-disable-next-line 
     const user =  users.find(u => u.user_id == id)
     console.log(user)
     return user.user_name
 }

  return (
    <div>
      <h1>Historial de compras</h1>



    </div>
  )
}

export default HistoryShops