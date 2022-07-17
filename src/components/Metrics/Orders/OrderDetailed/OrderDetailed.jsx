import { useState } from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { getItemsOfOrder, getOrderDetails, getProductById, getUserById } from "../../../../Redux/Actions"
import ButtonBack from "../../../CreateProduct/ButtonBack/ButtonBack"
import './OrderDetailed.scss'
export function OrderDetailed() {

    const { id } = useParams()
    const orderDetailed = useSelector(store => store.itemsOfOrderId)
    const prodName = useSelector(store => store.product)
    const [order, setOrder] = useState({})
    const [itemName, setItemName] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(getItemsOfOrder(id))
        // eslint-disable-next-line 
    }, [])



    useEffect(()=>{
        setOrder(orderDetailed)
        setItemName(prodName.name)
        //    console.log(orderDetailed)
    },[orderDetailed,prodName])
    
    function getProdName(prodId){
        dispatch(getProductById(prodId))  
    }

    useEffect(()=>{
        setItemName(prodName.name)
    },[prodName])



    return <div className="container datas">
        <h1 className="mt-5">Order Detailed n°{id}</h1>
        {/* <button onClick={() => navigate(-1)}>Back</button> */}
        <ButtonBack button={''} />

        <div className="lower-10" style={{ width: "100%" }}>
            <table className="table is-hoverable is-bordered is-narrow shadow ">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Status</th>
                        <th>User</th>
                        <th colSpan='3'>Products</th>
                    </tr>
                    <tr>
                        <td colSpan='3'></td>
                        <td>Product</td>
                        <td>Quantity</td>
                        <td>Price</td>
                    </tr>
                </thead>
                <tbody>
                    {order && 
                         <tr>
                            <td>{order.id}</td>
                            <td>{order.status}</td>
                            <td>{order.userUserId}</td>
                            <td colSpan='3'>
                                {order.order_items && order.order_items.length>0 && order.order_items.map(i => {
                                    return <>
                                        <tr >
                                           <td>{i.id}</td>
                                           <td>{i.quantity}</td>
                                           <td>{i.price}</td>
                                        </tr>
                                    </> 
                                })}
                            </td>
                           
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    </div>
}