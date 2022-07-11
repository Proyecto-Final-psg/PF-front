import "./User.scss";

const User = ({ name, roll }) => {


  // function ChangeRoll() {
  // if(role === "admin")
  // setRole("user")
  // if(role === "user")
  // setRole("admin")

  // }

  return (
    <div className="user" >
      <p className="user-text">{name}</p>
      <button className="user-button" >{roll}</button>
    </div>
  );
};
export default User;
