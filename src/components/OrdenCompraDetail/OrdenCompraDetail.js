import './OrdenCompraDetail.scss'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import logo from './logo.png'
import premio from './premios.png'
const OrdenCompraDetail = () => {
    const { id } = useParams()
    const orders = useSelector((store) => store.orderDetails);
    const order = orders.filter(e => e.order_id === parseInt(id))[0]
    const navigate = useNavigate()
    return (
        <div className='cmp-ordendetail-container'>
            <div className='cmp-orden-compra-back'>
                <button className='btn btn-back' onClick={() => navigate(-1)}>
                    <span className="material-symbols-outlined">keyboard_backspace</span>
                </button>
                {order.status === "completed" && <span className="tag is-primary is-large span-status">
                    Succes
                </span>}
                {order.status === "inprogress" && <span className="tag is-warning is-large span-status">
                    {order.status}
                </span>}

                {order.status === "canceled" && <span className="tag is-danger is-large span-status">
                    Canceled
                </span>}

            </div>



            <div className='cmp-order-compra-detil-container-imgs'>
                {order.arrayItems.map((e, i) => {
                    return (
                        <div key={i} className="card">
                            <img className='cmp-ordendetail-container-img-premio' src={premio} alt="premio" />
                            <div className="card-image">
                                <figure className="cmp-ordendetail-container-img">
                                    <img src={e.img} alt="Placeholder" />
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
                                    <img className='cmp-ordendetail-container-img-logo' src={logo} alt="logo" />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div >
        </div >
    )
}
export default OrdenCompraDetail