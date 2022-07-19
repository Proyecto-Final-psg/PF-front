import { useState } from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { getAllProducts, getItemsOfOrder, getOrderDetails, getProductById, getUserById, updateOrderStatus } from "../../../../Redux/Actions"
import ButtonBack from "../../../CreateProduct/ButtonBack/ButtonBack"
import Modal from 'react-modal'
import './OrderDetailed.scss'
import { API_URL, ModalStyle, ModalStyleOrders } from "../../../../Redux/Constants"
import Loading from "../../../Loading/Loading"

export function OrderDetailed() {

    const { id } = useParams()
    const orderDetailed = useSelector(store => store.itemsOfOrderId)
    const prodName = useSelector(store => store.product)
    const products = useSelector(store => store.products)
    const [order, setOrder] = useState({})
    const [itemName, setItemName] = useState('')
    const [modal, setModal] = useState(false)
    const[ orderStatus, setOrderStatus] = useState('')
    const [loading, setLoading] = useState(false)

    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(getItemsOfOrder(id))
        dispatch(getAllProducts())
        // eslint-disable-next-line 
    }, [])



    useEffect(() => {
        setOrder(orderDetailed)
        setItemName(prodName.name)
        //    console.log(orderDetailed)
    }, [orderDetailed, prodName])

    function getProdName(prodId) {
        let prod = products.find(p => p.id == prodId)
        return prod.name
    }

    useEffect(() => {
        setItemName(prodName.name)
    }, [prodName])

    function orderStatusState(e){
        setOrderStatus(e.target.value)
    }

    function modOrderStatus(id){
        setModal(true)
    }

    function changeOrderStatus() {
        setLoading(true)
        console.log('Actualizar orden con ',orderStatus);
        // updateOrderStatus(id,orderStatus)
        fetch(`${API_URL}/update-order?id=${id}&status=${orderStatus}`,{
        method:"PUT"
    })
    .then(data => data.json())
    .then(res => {
        console.log(res);
        setModal(false)
        setLoading(false)
        navigate(-1)
    }
    )
    }

    return <div className="container datas">
        <h1 className="mt-5">Order Detailed n°{id}</h1>
        {/* <button onClick={() => navigate(-1)}>Back</button> */}
                {loading &&
            <div className="loading-block">
            <Loading />
            </div>
            }
        <ButtonBack button={''} />


        <div className="space-modal">

            <Modal
                isOpen={modal}
                style={ModalStyleOrders}
                >
                <div className="modala">
                    {/* <form> */}
                    <h2 >Select the new order status</h2>
                    <select style={{margin:"20px"}} name="" id="" onChange={orderStatusState}>
                    <option value="completed" selected disabled='disabled'>Select</option>
                        <option value="completed">Completed</option>
                        <option value="in-progress">In Progress</option>
                        <option value="canceled">Canceled</option>
                    </select>
                    <button style={{ width: "100px" }} onClick={changeOrderStatus} className="btn btn-success">OK</button>
                    {/* </form> */}

                </div>
            </Modal>
        </div>


        <div className="lower-10" style={{ width: "100%" }}>
            <table className="table is-hoverable is-bordered is-narrow shadow ">
                <thead>
                    <tr>
                        <th><abbr title="ID">ID</abbr></th>
                        <th><abbr title="Status">Status</abbr></th>
                        <th><abbr title="User name">User</abbr></th>
                        <th colSpan='3'><abbr title="Products">Products</abbr></th>
                    </tr>
                    <tr>
                        <td colSpan='3'></td>
                        <td><abbr title="Product name">Name</abbr></td>
                        <td><abbr title="Product quantity">Quantity</abbr></td>
                        <td><abbr title="Product price">Price</abbr></td>
                    </tr>
                </thead>
                <tbody>
                    {order &&
                        <tr>
                            <td>{order.id}</td>
                            <td>
                                {order.status} <button onClick={modOrderStatus} className="btn btn-sm btn-success">Change</button>
                            </td>
                            <td>{order.userUserId}</td>
                            <td colSpan='3'>
                                {order.order_items && order.order_items.length > 0 && order.order_items.map(i => {
                                    return <>
                                        <tr >
                                            <td>{getProdName(id)}</td>
                                            <td>{i.quantity}</td>
                                            <td>${i.price}</td>
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