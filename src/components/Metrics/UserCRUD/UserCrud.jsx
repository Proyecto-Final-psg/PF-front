import { useState } from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllUsers } from "../../../Redux/Actions"
import lock from '../../../assets/lock.png'
import './UserCrud.scss'
import { API_URL } from "../../../Redux/Constants"
import LoadingImg from '../../../assets/Loading.gif'
import swal from 'sweetalert'

export function UserCrud() {
  const dispatch = useDispatch()
  const users = useSelector(store => store.users)
  const [search, setSearch] = useState('')
  const [blockUsers, setBlockUsers] = useState(users)
  const [statusBlock, setStatusBlock] = useState('')
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    dispatch(getAllUsers())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setBlockUsers(users)
  }, [users])

  const fillSearchObj = (e) => {
    setSearch(e.target.value.toLowerCase())
  }

  function searchUser(e) {
    e.preventDefault()
    let res = users.filter(u => u.user_email.includes(search))
    console.log(res)
    setBlockUsers(res)
  }

  function blockUser(userId, status) {
    setLoading(true)
    fetch(`${API_URL}/users/${userId}`, {
      method: "PUT"
    })
      .then(data => data.json())
      .then(res => {
        console.log('el status', status)
        if (status === false)
          setStatusBlock('locked')
        else
          setStatusBlock('unlocked')

        console.log('sstatus', statusBlock);
        setLoading(false)
        dispatch(getAllUsers())
        swal({
          title: `The user is now ${statusBlock}`,
          text: "The client should receive the email with the notification soon",
          icon: "success",
          button: "Ok"
        })
      })
  }



  return <div className="container datas">

    <h1 className="mt-5">Block Users</h1>

    {loading &&
                <div className='loadingGif'>
                    <h3>Loading</h3>
                    < img className='cmp-CardDetails-loading-img' src={LoadingImg} alt="my-gif" />
                </div>}

    <div className="user-block" style={{ width: "100%" }}>
   
      <form action="" id="form" onSubmit={searchUser}>
        <input type="text" className="input" onChange={fillSearchObj} placeholder='Enter user email to lock'/>
        <input type='submit' className="btn btn-success" value="Search" style={{width:"auto"}} />
      </form>

      <div className="table-container" >
        <table className="table scrolldown shadow" >
          <thead>
            <tr>
            </tr>
          </thead>
          <tbody>
            {blockUsers && blockUsers.map(u => {
              return <tr key={u.user_id} className={u.blocked ? 'red' : ''}>
                <td style={{ backgroundImage: `url(${u.picture})`, backgroundSize: "cover", backgroundPosition: "center", width: "100px" }}></td>
                <td style={{ width: "auto" }} key={u.id}>{u.user_name}</td>
                <th key={u.id}>{u.user_email}</th>
                <td id="img" key={u.id}>
                  {u.block
                    ?
                    <img onClick={() => blockUser(u.user_id, u.block)} src={lock} alt="lock_icon" />
                    :
                    <button className="btn btn-danger" onClick={() => blockUser(u.user_id, u.block)}>Block</button>
                  }
                </td>
              </tr>
            })}
          </tbody>
        </table>
      </div>
    </div>
  </div>
}