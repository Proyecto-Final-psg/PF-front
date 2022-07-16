import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllUsers } from "../../../Redux/Actions"

export function UserCrud(){

  const dispatch = useDispatch()
  const users = useSelector(store => store.users)

  useEffect(()=>{
    dispatch(getAllUsers())
  },[])

  useEffect(()=>{
    console.log(users)
  },[users])

    return  <div className="container datas">
    
    <h1 className="mt-5">Block Users</h1>


    <div className="lower-10" style={{width:"100%"}}>

    <div className="">
      <table className="table is-bordered is-narrow shadow">
        <thead>
        <tr>
            <th><abbr title="User">User</abbr></th>
            <th>Name</th>
            <th><abbr title="Totals">Action</abbr></th>
          </tr>
        </thead>
        <tbody>
          {users && users.length > 0 && users.map(u => {
            return <tr>
              <th>{u.user_email}</th>
              <td>{u.user_name}</td>
              <td><button className="btn btn-danger">Block</button></td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  </div>
  </div>
}