import './Orders.scss'
import '../Metrics.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getAllOrders, getAllUsers} from '../../../Redux/Actions'
import { NavLink} from 'react-router-dom'

import noOrder from '../../../assets/noorder.png'
import emailjs from '@emailjs/browser';
import swal from 'sweetalert'

export function Orders() {
  const dispatch = useDispatch()
  const orders = useSelector(store => store.order)
  const users = useSelector(store => store.users)
  useEffect(() => {
    dispatch(getAllOrders())
    dispatch(getAllUsers())
  },
    // eslint-disable-next-line 
    [])

  function getUser(id) {
    // eslint-disable-next-line 
    const user = users.find(u => u.user_id == id)
    return user.user_name
  }

  function dispatchOrder(userID) {
    const emailToDispatch = users.find(u => u.user_id === userID)
    console.log(emailToDispatch.user_email)

  }

  const sendEmail = (e) => {

    e.preventDefault();
    console.log(e.target)
    console.log(e.target.name.value)
    let userToSend = users.find(u => u.user_id === e.target.name.value)

    console.log('MANDANDO A', userToSend)

    e.target.name.value = userToSend.user_name;
    e.target.mailTo.value = userToSend.user_email;

    emailjs.sendForm('service_rquohvh', 'template_mwwg3i9', e.target, 'LidHyzsmZ0-R4ClFZ')
      .then((result) => {
        console.log(result.text);
        swal({
          title:"Email has been sent",
          text: "The client should receive the email with the notification soon",
          icon:"success",
          button:"Ok"
      })
      .then(ok => {
          // navigate(-1)
      })
      }, (error) => {
        console.log(error.text);
      });

  };

  return <div className="container datas">
    <h1 className="mt-5">Order List</h1>


    <div className="lower-10">
      {orders.length > 0 ?
        <div className='table-container'>
          <table className="table shadow scrolldown" >
            <thead>
              <tr>
                <th><abbr title="ID of the order">ID</abbr></th>
                <th><abbr title="Status of the order">Status</abbr></th>
                <th><abbr title="User name">User</abbr></th>
                <th><abbr title="Date of Order">Date</abbr></th>
                <th><abbr title="Order action">Dispatch order</abbr></th>
              </tr>
            </thead>
            <tbody>
              {orders.length > 0 && orders.map(o => {
                return <tr key={o.id}>
                  <th><NavLink to={`${__dirname}metrics/order-detailed/${o.id}`}>{o.id}</NavLink></th>
                  <td>{o.status}</td>
                  <td>{getUser(o.userUserId)}</td>
                  <td>{o.createdAt}</td>
                  <td>
                    <form onSubmit={sendEmail}>
                      <input type="text" name="name" readOnly value={o.userUserId} style={{ display: "none" }} />
                      <input type="text" name="order" readOnly value={o.id} style={{ display: "none" }} />
                      <input type="text" name="mailTo" readOnly value='' style={{ display: "none" }} />
                      <button className='btn' type='submit' disabled={o.status.toLowerCase().includes('complete') ? '' : 'disabled'} onClick={() => dispatchOrder(o.userUserId)}>
                        <span className="material-symbols-outlined">local_shipping</span>
                      </button>
                    </form>
                  </td>
                </tr>

              })}
            </tbody>
          </table>

        </div>
        :
        <div id='no-orders'>
          <p>No purchase orders were generated</p>
          <img src={noOrder} alt="" />
        </div>
      }
    </div>
  </div>
}