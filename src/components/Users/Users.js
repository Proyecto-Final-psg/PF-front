import "./Users.scss";
import User from "../User/User"
import { getAllUsers } from '../../Redux/Actions';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'



const Users = () => {
  const usersprueba = useSelector(store => store.users)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllUsers())
           // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [usersprueba])

  return (
    <div className="users" >
      <div className="users_container">
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
  );
};
export default Users;
