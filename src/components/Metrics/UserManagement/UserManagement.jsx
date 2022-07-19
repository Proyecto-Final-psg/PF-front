import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers } from '../../../Redux/Actions'
import User from '../../User/User'
import '../Metrics.scss'
import swal from 'sweetalert'
export function UserManagement(){

    const usersprueba = useSelector(store => store.users)
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getAllUsers())
             // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [usersprueba])


    return <div className="container datas">
    
    <h1 className="mt-5">User Roles</h1>
    {/* <span >In this section, you can change the user roles. For example, if you set to the 'User 1' the admin rol, that user will have access to the Admin Panel and Create Product.</span> */}

    <div className="lower-10" style={{width:"100%"}}>

    <div className="table-container">
      <table className="table scrolldown shadow p-5">
        <tbody>
          {usersprueba && usersprueba.map(user =>
          <tr>
            <td>
                <User
                  key={user.user_email}
                  name={user.user_name}
                  roll={user.roll}
                  user_id={user.user_id}
                />

            </td>
            </tr>
            )}
        </tbody>
      </table>
    </div>
  </div>
  </div>
}