import './OrdenCompraDetail.scss'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { NavLink } from 'react-router-dom'
import premio from './premios.png'
import { useEffect, useState } from 'react'
import { getUserReviews } from '../../Redux/Actions'
import ModalReview from '../ModalReview/ModalReview'
const OrdenCompraDetail = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const orders = useSelector((store) => store.orderDetails);
    const order = orders.filter(e => e.order_id === parseInt(id))[0]
    const userReviews = useSelector(store => store.userReviews)
    const userRedux = useSelector(state => state.user[0])
    const user_id = userRedux.user_id
    const [modal, setModal] = useState({
        modal: false,
        id: ''
    })
    var total = 0
    const navigate = useNavigate()
    const continueToPay = () => {
        window.location.href = order.urlPago
    }

    useEffect(() => {
        dispatch(getUserReviews(user_id))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className='cmp-ordendetail-container'>
            <div className='cmp-orden-compra-back'>
                <button className='btn btn-back' onClick={() => navigate(-1)}>
                    <span className="material-symbols-outlined">keyboard_backspace</span>
                </button>
                {order.status === "completed" && <span className="tag is-primary is-large span-status">
                    Order success
                    <span className="material-symbols-outlined" style={{ marginLeft:"10px" }}>verified</span>
                </span>}
                {order.status === "inprogress" && <span className="tag is-warning is-large span-status">
                    This order is still in progress
                    <span className="material-symbols-outlined" style={{ marginLeft:"10px"}}>hourglass_empty</span>
                </span>}

                {order.status === "canceled" && <span className="tag is-danger is-large span-status">
                    This order has been canceled
                    <span className="material-symbols-outlined" style={{ marginLeft:"10px" }}>cancel</span>
                </span>}

            </div>


            <div className='over-cmp'>
                <ModalReview modal={modal.modal} setModal={setModal} id={modal.id} />
                <div className='cmp-order-compra-detil-container-imgs'>
                    {order.arrayItems.map((e, i) => {
                        total += e.price * e.quantity
                        return (
                            <div key={i} className="card card-contenedor">
                                <NavLink to={`/products/${e.id}`}>
                                    <img className='cmp-ordendetail-container-img-premio' src={premio} alt="premio" />

                                    <div>
                                        <div className="card-image">
                                            <figure className="cmp-ordendetail-container-img">
                                                <img src={e.img.split(',')[0]} alt="Placeholder" />
                                            </figure>
                                        </div>

                                        <div className="card-content">

                                            <div className="media">
                                                <div className="media-content">
                                                    <p className="title is-4">{e.name}</p>
                                                    <p className="subtitle is-6">{`Quantity:  ${e.quantity}`}</p>
                                                </div>
                                            </div>

                                            <div className="content">
                                                <span className="tag is-link ">
                                                    {`Thc:  ${e.thc}`}
                                                </span>
                                                <span className="tag is-warning ">
                                                    {`Cbs:  ${e.cbd}`}
                                                </span>
                                                <span className="tag is-success">
                                                    {` $ ${e.price * e.quantity}`}
                                                </span>
                                                {/* <img className='cmp-ordendetail-container-img-logo' src={logo} alt="logo" /> */}
                                            </div>

                                        </div>

                                    </div>
                                </NavLink>
                                {
                                    !userReviews.map(r => r.productId).filter(r => r === e.id).length &&
                                    <button className='btn-review' onClick={() => setModal({
                                        modal: true,
                                        id: e.id
                                    })}>
                                        Leave a Review
                                    </button>
                                }
                            </div>
                        )
                    })}
                </div >
            </div>
            {order.status === "inprogress" &&
                < div className='cmp-detalle-button-pay'>
                    <button onClick={continueToPay} className="btn btn-success">{`Finish payment  $ ${total}`}</button>
                    {/* <span onClick={continueToPay} className="tag is-success is-large">{`Continue To Pay  $ ${total}`}</span> */}
                </div>
            }

        </div >
    )
}
export default OrdenCompraDetail