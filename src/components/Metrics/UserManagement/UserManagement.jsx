import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers, changeRoles } from '../../../Redux/Actions'
import normalUser from '../../../assets/user.png'
import admin from '../../../assets/admin.png'
import '../Metrics.scss'
import swal from 'sweetalert'
import { useState } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

export function UserManagement() {

  useEffect(() => {
    Aos.init({ once: true })
  }, [])

  const usersprueba = useSelector(store => store.users)
  const [userRol, setUserRol] = useState(usersprueba)
  const dispatch = useDispatch()
  const [search, setSearch] = useState('')

  useEffect(() => {
    dispatch(getAllUsers())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setUserRol(usersprueba)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [usersprueba])

  function changeRol(user, id, rol) {

    if (rol === 'admin') rol = 'user'
    else rol = 'admin'

    swal({
      title: `Are you sure you want to change ${user}'s rol to ${rol} ?`,
      text: "This will affect the permissions of the user in the whole site",
      icon: "info",
      buttons: [
        'No',
        'Yes'
      ],
      dangerMode: true,
    }).then(function (isConfirm) {
      if (isConfirm) {

        dispatch(changeRoles({ user_id: id, roll: rol }))
        swal({
          title: `Rol changed`,
          icon: 'success'
        }).then(function () {
          dispatch(getAllUsers())
        })
      } else {
        swal("Cancelled", "No changes were made", "error");
      }
    })
  }

  const fillSearchObj = (e) => {
    setSearch(e.target.value.toLowerCase())
  }

  function searchUser(e) {
    // console.log('pressed');
    e.preventDefault()
    let res = usersprueba.filter(u => u.user_email.includes(search))
    setUserRol(res)
  }

  return <div className="container datas">

    <h1 className="mt-5 custom-title">
      User Roles
      <span id="userMgm" className="iconMenu material-symbols-outlined">badge</span>
    </h1>

    <span>To modify a user rol, just press into the user-rol icon that you want to change</span>
    <div style={{ width: "100%" }}>
      <form id="form" onSubmit={searchUser}>
        <input type="text" className="input" onChange={fillSearchObj} placeholder='Search user' />
        <button type="submit" className="btn btn-success btn-w">
          <span>Search </span>
          <span className="material-symbols-outlined">person_search</span>
        </button>
      </form>
    </div>

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
              <th><abbr id="admin-table-header" title="To modify a user rol, just press into the user-rol that you want to change">
                Actual rol
                <span className="material-symbols-outlined">admin_panel_settings</span>
              </abbr></th>
            </tr>
          </thead>
          <tbody>
            {userRol && userRol.map(user =>
              <tr key={user.user_email}>
                <td>
                  {user.user_name ? user.user_name : 'N/A'}
                </td>
                <td>
                  {user.user_email}
                </td>
                <td>
                  <abbr title={`Rol: ${user.roll}`}>
                    <img src={user.roll === 'admin' ? admin : normalUser} alt="" onClick={() => changeRol(user.user_name, user.user_id, user.roll)} />
                  </abbr>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  </div>
}