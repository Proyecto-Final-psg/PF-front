import './Orders.scss'
import '../Metrics.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getAllOrders, getAllUsers, getItemsOfOrder, getUserById } from '../../../Redux/Actions'
import { NavLink, Outlet } from 'react-router-dom'
import { useState } from 'react'
import noOrder from '../../../assets/noorder.png'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export function Orders() {

  const dispatch = useDispatch()
  const orders = useSelector(store => store.order)
  // const orders = [{
  //   id:123,
  //   user_name: 'Juanito',
  //   address: 'test 1234',
  //   status: "Ok",
  //   urlPago: 'asdalsdklas',
  //   createdAt: "10/07/1990",
  //   email: 'juanocataldo@gmail.com',
  //   referenciaId: 1,
  //   userUserId: 1
  // }]

  const users = useSelector(store => store.users)
  const user = useSelector(store => store.user_order)
  useEffect(() => {
    dispatch(getAllOrders())
    dispatch(getAllUsers())
    console.log('ORDENES', orders)
    // console.log(users)
    // console.log('DIRNAME',__dirname)
  },
    // eslint-disable-next-line 
    [])

  function getUser(id) {
    console.log('Busco por id',id)
    // eslint-disable-next-line 
    const user = users.find(u => u.user_id == id)
    // console.log(user)
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
    let userToSend = users.find(u => u.user_id == e.target.name.value)

    console.log('MANDANDO A', userToSend)

    e.target.name.value = userToSend.user_name;
    e.target.mailTo.value = userToSend.user_email;

    emailjs.sendForm('service_rquohvh', 'template_mwwg3i9', e.target, 'LidHyzsmZ0-R4ClFZ')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

  };



  return <div className="container datas">
    <h1 className="mt-5">Order List</h1>


    <div className="lower-10">
      {orders.length > 0 ?
        <div className='table-container'>
          <table className="table shadow scrolldown" style={{ width: "50%" }}>
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
                return <tr>
                  <th><NavLink to={`${__dirname}metrics/order-detailed/${o.id}`}>{o.id}</NavLink></th>
                  <td>{o.status}</td>
                  <td>{getUser(o.userUserId)}</td>
                  {/* <td>test</td> */}
                  <td>{o.createdAt}</td>
                  <td>
                    <form onSubmit={sendEmail}>
                      <input type="text" name="name" value={o.userUserId} style={{ display: "none" }} />
                      <input type="text" name="order" value={o.id} style={{ display: "none" }} />
                      <input type="text" name="mailTo" value='' style={{ display: "none" }} />
                      {/* <input type="name" name="name" value={o.user_name} style={{ display: "none" }} />
                      <input type="order" name="order" value={o.id} style={{ display: "none" }}  />
                      <input type="email" name="mailTo" value={o.email} style={{ display: "none" }} /> */}
                      <button className='btn' type='submit' disabled={o.status !== 'Pending' ? '' : 'disabled'} onClick={() => dispatchOrder(o.userUserId)}>
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
    {/* <Outlet /> */}

  </div>
}