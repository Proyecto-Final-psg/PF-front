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
    console.log(usersprueba)
  }, [])

  return (
    <div className="users" >
      {usersprueba && usersprueba.map(user =>
        <User
          key={user.user_email}
          name={user.user_name}
          roll={user.roll}
        />
      )}

    </div>
  );
};
export default Users;
