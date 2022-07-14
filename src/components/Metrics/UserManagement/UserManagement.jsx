import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers } from '../../../Redux/Actions'
import User from '../../User/User'
import Users from '../../Users/Users'
import '../Metrics.scss'

export function UserManagement(){

    const usersprueba = useSelector(store => store.users)
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getAllUsers())
             // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [usersprueba])


    return <div className="container datas">
    
    <h1 className="mt-5">User Management</h1>
    <hr />

    <div className="lower-10" style={{width:"100%"}}>

    <div className="">
    {usersprueba && usersprueba.map(user =>
          <User
            key={user.user_email}
            name={user.user_name}
            roll={user.roll}
            user_id={user.user_id}
          />
        )}
    </div>
  </div>
  </div>
}