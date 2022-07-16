import { useState } from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllUsers } from "../../../Redux/Actions"
import './UserCrud.scss'

export function UserCrud(){

  const dispatch = useDispatch()
  const users = useSelector(store => store.users)
  const [search, setSearch] = useState('')
  const [results, setResults] = useState(users)

  useEffect(()=>{
    dispatch(getAllUsers())
     // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  useEffect(()=>{
    console.log(search)
  },[search])

  useEffect(()=>{
    console.log(users)
  },[users])

  const fillSearchObj = (e) =>{
    setSearch(e.target.value.toLowerCase())
  }

  function searchUser(e){
    e.preventDefault()

    if(results){
      console.log('res',results)
      let res = users.filter(u => u.user_email.includes(search))
      console.log(res)
      setResults(res)
      // return results.find(u => {return u.user_email.includes(search)})
      // users = users.filter(u => u.user_name.includes(search))
      // setResults(users)
    }
  }

    return  <div className="container datas">
    
    <h1 className="mt-5">Block Users</h1>


    <div className="user-block" style={{width:"100%"}}>
      <form action="" id="form" onSubmit={searchUser}>
        <input type="text" className="input" onChange={fillSearchObj} />
        <input type='submit' className="btn" value="Search" />
      </form>

    <div className="table-container" >
      <table className="table is-bordered is-narrow shadow is-scrollable" >
        <thead>
        <tr>
            <th><abbr title="User">User</abbr></th>
            <th>Name</th>
            <th><abbr title="Totals">Action</abbr></th>
          </tr>
        </thead>
        <tbody>
          {results && results.length > 0 && results.map(u => {
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