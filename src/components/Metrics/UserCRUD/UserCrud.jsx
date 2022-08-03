import { useState } from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllUsers } from "../../../Redux/Actions"
import lock from '../../../assets/lock.png'
import './UserCrud.scss'
import { API_URL } from "../../../Redux/Constants"
import LoadingImg from '../../../assets/Loading.gif'
import swal from 'sweetalert'
import Aos from 'aos'
import 'aos/dist/aos.css'

export function UserCrud() {

  useEffect(() => {
    Aos.init({ once: true })
  }, [])

  const dispatch = useDispatch()
  const users = useSelector(store => store.users)
  const [search, setSearch] = useState('')
  const [blockUsers, setBlockUsers] = useState(users)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    dispatch(getAllUsers())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setBlockUsers(users)
  }, [users])

  const fillSearchObj = (e) => {
    setSearch(e.target.value.toLowerCase())
  }

  function searchUser(e) {
    e.preventDefault()
    let res = users.filter(u => u.user_email.includes(search))
    setBlockUsers(res)
  }

  function blockUser(userId, status) {
    swal({
      title: `Are you sure you want to ${status} the user?`,
      text: "Doing this, the user will be unable to login to Weedical",
      icon: "info",
      buttons: [
        'No',
        'Yes'
      ],
      dangerMode: true,
    }).then(function (isConfirm) {
      if (isConfirm) {
        swal({
          title: `The user were ${status}ed`,
          icon: 'success'
        }).then(function () {
          fetch(`${API_URL}/users/${userId}`, {
            method: "PUT"
          })
            .then(data => data.json())
            .then(res => {
              setLoading(false)
              dispatch(getAllUsers())
            })
        });
      } else {
        swal("Cancelled", "No changes were made", "error");
      }
    })
  }



  return <div className="container datas ">

    <h1 className="mt-5 custom-title">
      Lock Users
      <span id="userCrud" className="iconMenu material-symbols-outlined">manage_accounts</span>
    </h1>
    <span>Locked users wont be able to access weedical ecommerce </span>
    {loading &&
      <div className='loadingGif'>
        <h3>Loading</h3>
        < img className='cmp-CardDetails-loading-img' src={LoadingImg} alt="my-gif" />
      </div>}

    <div className="user-block" style={{ width: "100%" }}>

      <form action="" id="form" onSubmit={searchUser}>
        <input type="text" className="input" onChange={fillSearchObj} placeholder='Enter user email to lock' />
        <button type="submit" className="btn btn-success btn-w">
          <span>Search </span>
          <span className="material-symbols-outlined">person_search</span>
        </button>
      </form>

      <div className="lower-10" style={{ width: "100%" }}>
        <div className="container-top">
          <table className="table shadow" data-aos='fade-up'>
            <thead>
              <tr>
                <th><abbr id="admin-table-header" title="User Name">
                  User Name
                  <span className="material-symbols-outlined">person</span>
                </abbr></th>
                <th><abbr id="admin-table-header" title="User Email">
                  User Email
                  <span className="material-symbols-outlined">mail</span>
                </abbr></th>
                <th><abbr id="admin-table-header" title="Action">
                  Action
                  <span className="material-symbols-outlined">lock</span>
                </abbr></th>
              </tr>
            </thead>
            <tbody>
              {blockUsers && blockUsers.map(u => {
                return <tr key={u.user_id} className={u.block ? 'red' : ''}>
                  <td style={{ width: "auto" }} key={u.id}>{u.user_name}</td>
                  <th key={u.id}><span>{u.user_email}</span></th>
                  <td id="img" key={u.id}>
                    {u.block
                      ?
                      <img onClick={() => blockUser(u.user_id, 'unlock')} src={lock} alt="lock_icon" />
                      :
                      <button className="btn btn-danger btn-w-red" onClick={() => blockUser(u.user_id, 'lock')}>
                        <span>Lock </span>
                        <span className="material-symbols-outlined">lock</span>
                      </button>
                    }
                  </td>
                </tr>
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
}