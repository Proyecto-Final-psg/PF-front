import { useState } from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { getAllProducts, getItemsOfOrder } from "../../../../Redux/Actions"
import ButtonBack from "../../../CreateProduct/ButtonBack/ButtonBack"
import Modal from 'react-modal'
import './OrderDetailed.scss'
import { API_URL, ModalStyleOrders } from "../../../../Redux/Constants"
import Loading from "../../../Loading/Loading"
import swal from 'sweetalert'


export function OrderDetailed() {
    const { id } = useParams()
    const orderDetailed = useSelector(store => store.itemsOfOrderId)
    const prodName = useSelector(store => store.product)
    const products = useSelector(store => store.products)
    const users = useSelector(store => store.users)
    const [order, setOrder] = useState({})
    // const [itemName, setItemName] = useState('')
    const [modal, setModal] = useState(false)
    const [orderStatus, setOrderStatus] = useState('')
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
        // setItemName(prodName.name)
        //    console.log(orderDetailed)
    }, [orderDetailed, prodName])

    function getProdName(prodId) {
        let prod = products.find(p => p.id == prodId)
        return prod.name
    }

    useEffect(() => {
        // setItemName(prodName.name)
    }, [prodName])

    function orderStatusState(e) {
        setOrderStatus(e.target.value)
    }

    function modOrderStatus(id) {
        setModal(true)
    }

    function changeOrderStatus() {
        setLoading(true)
        console.log('Actualizar orden con ', orderStatus);
        // updateOrderStatus(id,orderStatus)
        fetch(`${API_URL}/update-order?id=${id}&status=${orderStatus}`, {
            method: "PUT"
        })
            .then(data => data.json())
            .then(res => {
                console.log(res);
                setModal(false)
                setLoading(false)
                swal({
                    title: "Order status changed",
                    text: "You'll see the changes in Orders",
                    icon: "success",
                    button: "Ok"
                })
                    .then(ok => {
                        navigate(-1)
                    })
            }
            )
    }

    function matchIdWithUser(id){
        if(id){
            let user = users.find(u => u.user_id == id)
            // console.log(user)
            return user.user_name;

        }
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
                ariaHideApp={false}
            >
                <div className="modala">
                    {/* <form> */}
                    <h2 >Select the new order status</h2>
                    <select style={{ margin: "20px" }} name="" id="" onChange={orderStatusState}>
                        <option value="completed" defaultValue disabled='disabled'>Select</option>
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
                        <td><abbr title="ID">ID</abbr></td>
                        <td><abbr title="Status">Status</abbr></td>
                        <td><abbr title="User name">User</abbr></td>
                        <td colSpan='3'>
                            <abbr title="Products">Products</abbr>
                         
                            </td>
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
                        <tr key={order.id}>
                            <td>{order.id}</td>
                            <td>
                                {order.status} <button onClick={modOrderStatus} className="btn btn-sm btn-success">Change</button>
                            </td>
                            <td>{matchIdWithUser(order.userUserId)}</td>
                            <td colSpan='3'>
                                {order.order_items && order.order_items.length > 0 && order.order_items.map(i => {
                                    return <div key={i.id}>
                                            <span style={{fontWeight:"bold"}}>{getProdName(i.id)} </span>
                                            <span>{i.quantity} </span>
                                            <span>${i.price}</span>
                                        </div>
                                   
                                })}
                            </td>

                        </tr>
                    }
                </tbody>
            </table>
        </div>
    </div>
}