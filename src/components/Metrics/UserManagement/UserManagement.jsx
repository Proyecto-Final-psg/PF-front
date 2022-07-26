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
  useEffect(() => {
    dispatch(getAllUsers())
    // console.log(usersprueba)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setUserRol(usersprueba)
    dispatch(getAllUsers())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[usersprueba])

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
        })
      } else {
        swal("Cancelled", "No changes were made", "error");
      }
    })
    
    

  }

  return <div className="container datas">

    <h1 className="mt-5 custom-title">User Roles</h1>

    <span>To modify a user rol, just press into the user-rol icon that you want to change</span>
    <div className="lower-10" style={{ width: "100%" }}>
      <div className="container-top">
        <table className="table shadow" data-aos='fade-up'>
          <thead>
            <tr>
              {/* <th><abbr title="User Picture" >*</abbr></th> */}
              <th><abbr title="User Name">User Name</abbr></th>
              <th><abbr title="User Email">User Email</abbr></th>
              <th><abbr title="To modify a user rol, just press into the user-rol that you want to change">Actual rol</abbr></th>
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