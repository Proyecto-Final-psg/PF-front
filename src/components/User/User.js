import { useState } from "react";
import "./User.scss";

const User = ({ name, roll, email }) => {

const [role, setRole] = useState ("admin")

function ChangeRoll() {
if(role === "admin")
setRole("user")
if(role === "user")
setRole("admin")

}

  return (
    <div className="user" >
      <p className="user-text">{name}</p>
      <p className="user-text">{email}</p>
     <button className="user-button" onClick={ChangeRoll}>{role}</button>
    </div>
  );
};
export default User;
