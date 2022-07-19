import "./User.scss";
import { changeRoles} from '../../Redux/Actions';
import { useDispatch } from 'react-redux';
import swal from 'sweetalert'

const User = ({ name, roll, user_id }) => {
  const dispatch = useDispatch();

  function change() {
    swal({
      title:`The user rol has been changed`,      
      icon:"success",
      button:"Ok"
  })
    if (roll === "admin") { return dispatch(changeRoles({ user_id: user_id, roll: "user" })) }
    if (roll === "user") { return dispatch(changeRoles({ user_id: user_id, roll: "admin" })) }
    
  }

  return (
    <div className="user" >
      <p className="user-text">{name}</p>
      <button className="user-button" onClick={change} >{roll}</button>
    </div>
  );
};
export default User;
