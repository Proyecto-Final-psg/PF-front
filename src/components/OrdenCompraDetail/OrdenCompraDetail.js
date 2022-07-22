import './OrdenCompraDetail.scss'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import logo from './logo.png'
import premio from './premios.png'
const OrdenCompraDetail = () => {
    const { id } = useParams()
    const orders = useSelector((store) => store.orderDetails);
    const order = orders.filter(e => e.order_id == id)[0]
    return (
        <div className='cmp-ordendetail-container'>

            {order.status === "completed" && <span className="tag is-primary is-large span-status">
                Succes
            </span>}
            {order.status === "inprogress" && <span className="tag is-warning is-large span-status">
                {order.status}
            </span>}

            {order.status === "canceled" && <span className="tag is-danger is-large span-status">
                Canceled
            </span>}

            <div className='cmp-order-compra-detil-container-imgs'>
                {order.arrayItems.map((e, i) => {
                    return (
                        <div key={i} className="card">
                            <img className='cmp-ordendetail-container-img-premio' src={premio} />
                            <div className="card-image">
                                <figure className="cmp-ordendetail-container-img">
                                    <img src={e.img} alt="Placeholder image" />
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
                                    <img className='cmp-ordendetail-container-img-logo' src={logo} />
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

// { name, id, description, img, price, stock, review, setModal, setLocalState, localState, widthProp, heightProp }