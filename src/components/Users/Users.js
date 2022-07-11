import "./Users.scss";
import User from "../User/User"


var usersprueba = [{
  name: "John",
  email: "john@example.com",
  roll: "admin"
},
{
  name: "Margin",
  email: "Margin@example.com",
  roll: "user"
},
{
  name: "John",
  email: "john@example.com",
  roll: "user"
},
{
  name: "John",
  email: "john@example.com",
  roll: "admin"
},
{
  name: "Margin",
  email: "Margin@example.com",
  roll: "user"
},
{
  name: "John",
  email: "john@example.com",
  roll: "user"
}
]

const Users = ({ name, roll, email }) => {

  return (
    <div className="users" >
      {usersprueba && usersprueba.map(user =>
       <User 
       name={user.name}
       email={user.email}
       roll={user.roll}
       />
        )}
     
    </div>
  );
};
export default Users;
