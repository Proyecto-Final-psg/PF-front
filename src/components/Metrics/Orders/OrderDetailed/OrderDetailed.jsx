import { useState } from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getOrdersByOrderId, mailer } from "../../../../Redux/Actions"
import ButtonBack from "../../../CreateProduct/ButtonBack/ButtonBack"
import Modal from 'react-modal'
import './OrderDetailed.scss'

import { API_URL, ModalStyleOrders } from "../../../../Redux/Constants"
import swal from 'sweetalert'
import LoadingImg from '../../../../assets/Loading.gif'

export function OrderDetailed() {
    const { id } = useParams()
    const orderDetailed = useSelector(store => store.order_detailed)
    const prodName = useSelector(store => store.product)
    const [modal, setModal] = useState(false)
    const [orderStatus, setOrderStatus] = useState('')
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getOrdersByOrderId(id))
        // eslint-disable-next-line 
    }, [])



    useEffect(() => {

        // setItemName(prodName.name)
        console.log(orderDetailed)
    }, [orderDetailed, prodName])

    // function getProdName(prodId) {
    //     if (prodId) {
    //         let prod = products.find(p => parseInt(p.id) === parseInt(prodId))
    //         if (prod)
    //             return prod.name
    //     }
    // }

    function orderStatusState(e) {
        setOrderStatus(e.target.value)
    }

    function modOrderStatus() {
        setModal(true)
    }

    function changeOrderStatus() {
        setLoading(true)
        console.log(orderStatus);
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
                        dispatch(getOrdersByOrderId(id))
                        dispatch(mailer(orderDetailed.orden.userUserId, orderDetailed.orden.id, orderStatus, orderDetailed.orden.address, orderDetailed.productos))
                    })
            }
            )
    }

    // function matchIdWithUser(id) {
    //     if (id) {
    //         let user = users.find(u => parseInt(u.user_id) === parseInt(id))
    //         console.log(user)
    //         return user.user_name;
    //     }
    // }

    return <div className="container datas">
        <h1 className="mt-5">Order Detailed</h1>
        {/* <button onClick={() => navigate(-1)}>Back</button> */}
        {loading &&
            <div className='loadingGif'>
                <h3>Loading</h3>
                < img className='cmp-CardDetails-loading-img' src={LoadingImg} alt="my-gif" />
            </div>}
        <ButtonBack button={''} />


        <div className="space-modal">

            <Modal id="modal-order-detail"
                isOpen={modal}
                style={ModalStyleOrders}
                ariaHideApp={false}
            >
                <div className="modal-order">
                    {/* <form> */}
                    <h2 >Change the order status</h2>                    
                    <span>Changing the order status will send an email to the client with the new status</span>
                    <select style={{ margin: "20px" }} name="" id="" onChange={orderStatusState}>
                        <option value="completed" selected disabled='disabled'>Select new status</option>
                        <option value="completed">Completed</option>
                        <option value="inprogress">In Progress</option>
                        <option value="canceled">Canceled</option>
                    </select>
                    <button style={{ width: "100px" }} onClick={changeOrderStatus} className="btn btn-success btn-w">
                        <span>Save</span>
                        <span class="material-symbols-outlined">save</span>
                        </button>
                    <button onClick={() => setModal(false)} className="m-2 btn btn-basic">Cancel</button>
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
                        <td colSpan='2'>
                            <abbr title="Products">Products</abbr>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        {/* <td><abbr title="Product quantity">Quantity</abbr></td> */}
                        <td><abbr title="Product quantity">Product</abbr></td>
                        <td><abbr title="Product quantity">Quantity</abbr></td>
                        {/* <td><abbr title="Product price">Price</abbr></td> */}
                    </tr>
                </thead>
                <tbody>
                    {orderDetailed && orderDetailed.orden && <tr key={orderDetailed.orden.id}>
                        <td style={{ fontWeight: "bold" }}>{orderDetailed.orden.id}</td>
                        <td id='status-row'>                        
                            {(orderDetailed.orden.status === 'inprogress') ? <span class="material-symbols-outlined" style={{color:"rgb(167, 164, 0)"}}>hourglass_empty</span>
                            : (orderDetailed.orden.status === 'completed')  ? <span class="material-symbols-outlined" style={{color:"green"}}>verified</span>
                            : (orderDetailed.orden.status === 'canceled') ? <span class="material-symbols-outlined" style={{color:"red"}}>cancel</span>
                            : ''
                         } 
                            <button onClick={modOrderStatus} className="btn btn-sm btn-success">Change</button>
                        </td>
                        <td>{orderDetailed.orden.user ? orderDetailed.orden.user.user_name : 'N/A'}</td>
                        <td colSpan='2'>
                            {orderDetailed.productos && orderDetailed.productos.length > 0 && orderDetailed.productos.map(i => {
                                return <tr className="tr-order-detail">
                                <td style={{border:"none"}}>
                                    <div key={i.name} className="card-order-detail-table">
                                        <img src={i.img} alt="" id='detail-prod-pic' />
                                        <span style={{ fontWeight: "bold" }}>{i.name} </span>
                                        {/* <span>${i.priceOfSale}</span> */}
                                    </div>
                                </td>
                                <td style={{border:"none"}}>
                                <span style={{fontWeight:"bold"}}>{i.quantity} </span>

                                </td>

                                </tr>

                            })}
                        </td>
                    </tr>
                    }
                </tbody>
            </table>
        </div>
    </div>
}