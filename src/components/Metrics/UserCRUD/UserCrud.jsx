import { useState } from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllUsers } from "../../../Redux/Actions"
import lock from '../../../assets/lock.png'
import './UserCrud.scss'
import { API_URL } from "../../../Redux/Constants"
import Loading from "../../Loading/Loading"
import swal from 'sweetalert'

export function UserCrud() {
  // const token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InhXOVcxOWZ1YmpsY2xvVU03VzRWYSJ9.eyJpc3MiOiJodHRwczovL2Rldi0yLWdlMDd4ei51cy5hdXRoMC5jb20vIiwic3ViIjoiaXQwU1l6S3lKWUNIRUlxTmEwN1ZTQWtkZzBWVk5KUlpAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vZGV2LTItZ2UwN3h6LnVzLmF1dGgwLmNvbS9hcGkvdjIvIiwiaWF0IjoxNjU3OTgwMDU0LCJleHAiOjE2NTgwNjY0NTQsImF6cCI6Iml0MFNZekt5SllDSEVJcU5hMDdWU0FrZGcwVlZOSlJaIiwic2NvcGUiOiJyZWFkOmNsaWVudF9ncmFudHMgY3JlYXRlOmNsaWVudF9ncmFudHMgZGVsZXRlOmNsaWVudF9ncmFudHMgdXBkYXRlOmNsaWVudF9ncmFudHMgcmVhZDp1c2VycyB1cGRhdGU6dXNlcnMgZGVsZXRlOnVzZXJzIGNyZWF0ZTp1c2VycyByZWFkOnVzZXJzX2FwcF9tZXRhZGF0YSB1cGRhdGU6dXNlcnNfYXBwX21ldGFkYXRhIGRlbGV0ZTp1c2Vyc19hcHBfbWV0YWRhdGEgY3JlYXRlOnVzZXJzX2FwcF9tZXRhZGF0YSByZWFkOnVzZXJfY3VzdG9tX2Jsb2NrcyBjcmVhdGU6dXNlcl9jdXN0b21fYmxvY2tzIGRlbGV0ZTp1c2VyX2N1c3RvbV9ibG9ja3MgY3JlYXRlOnVzZXJfdGlja2V0cyByZWFkOmNsaWVudHMgdXBkYXRlOmNsaWVudHMgZGVsZXRlOmNsaWVudHMgY3JlYXRlOmNsaWVudHMgcmVhZDpjbGllbnRfa2V5cyB1cGRhdGU6Y2xpZW50X2tleXMgZGVsZXRlOmNsaWVudF9rZXlzIGNyZWF0ZTpjbGllbnRfa2V5cyByZWFkOmNvbm5lY3Rpb25zIHVwZGF0ZTpjb25uZWN0aW9ucyBkZWxldGU6Y29ubmVjdGlvbnMgY3JlYXRlOmNvbm5lY3Rpb25zIHJlYWQ6cmVzb3VyY2Vfc2VydmVycyB1cGRhdGU6cmVzb3VyY2Vfc2VydmVycyBkZWxldGU6cmVzb3VyY2Vfc2VydmVycyBjcmVhdGU6cmVzb3VyY2Vfc2VydmVycyByZWFkOmRldmljZV9jcmVkZW50aWFscyB1cGRhdGU6ZGV2aWNlX2NyZWRlbnRpYWxzIGRlbGV0ZTpkZXZpY2VfY3JlZGVudGlhbHMgY3JlYXRlOmRldmljZV9jcmVkZW50aWFscyByZWFkOnJ1bGVzIHVwZGF0ZTpydWxlcyBkZWxldGU6cnVsZXMgY3JlYXRlOnJ1bGVzIHJlYWQ6cnVsZXNfY29uZmlncyB1cGRhdGU6cnVsZXNfY29uZmlncyBkZWxldGU6cnVsZXNfY29uZmlncyByZWFkOmhvb2tzIHVwZGF0ZTpob29rcyBkZWxldGU6aG9va3MgY3JlYXRlOmhvb2tzIHJlYWQ6YWN0aW9ucyB1cGRhdGU6YWN0aW9ucyBkZWxldGU6YWN0aW9ucyBjcmVhdGU6YWN0aW9ucyByZWFkOmVtYWlsX3Byb3ZpZGVyIHVwZGF0ZTplbWFpbF9wcm92aWRlciBkZWxldGU6ZW1haWxfcHJvdmlkZXIgY3JlYXRlOmVtYWlsX3Byb3ZpZGVyIGJsYWNrbGlzdDp0b2tlbnMgcmVhZDpzdGF0cyByZWFkOmluc2lnaHRzIHJlYWQ6dGVuYW50X3NldHRpbmdzIHVwZGF0ZTp0ZW5hbnRfc2V0dGluZ3MgcmVhZDpsb2dzIHJlYWQ6bG9nc191c2VycyByZWFkOnNoaWVsZHMgY3JlYXRlOnNoaWVsZHMgdXBkYXRlOnNoaWVsZHMgZGVsZXRlOnNoaWVsZHMgcmVhZDphbm9tYWx5X2Jsb2NrcyBkZWxldGU6YW5vbWFseV9ibG9ja3MgdXBkYXRlOnRyaWdnZXJzIHJlYWQ6dHJpZ2dlcnMgcmVhZDpncmFudHMgZGVsZXRlOmdyYW50cyByZWFkOmd1YXJkaWFuX2ZhY3RvcnMgdXBkYXRlOmd1YXJkaWFuX2ZhY3RvcnMgcmVhZDpndWFyZGlhbl9lbnJvbGxtZW50cyBkZWxldGU6Z3VhcmRpYW5fZW5yb2xsbWVudHMgY3JlYXRlOmd1YXJkaWFuX2Vucm9sbG1lbnRfdGlja2V0cyByZWFkOnVzZXJfaWRwX3Rva2VucyBjcmVhdGU6cGFzc3dvcmRzX2NoZWNraW5nX2pvYiBkZWxldGU6cGFzc3dvcmRzX2NoZWNraW5nX2pvYiByZWFkOmN1c3RvbV9kb21haW5zIGRlbGV0ZTpjdXN0b21fZG9tYWlucyBjcmVhdGU6Y3VzdG9tX2RvbWFpbnMgdXBkYXRlOmN1c3RvbV9kb21haW5zIHJlYWQ6ZW1haWxfdGVtcGxhdGVzIGNyZWF0ZTplbWFpbF90ZW1wbGF0ZXMgdXBkYXRlOmVtYWlsX3RlbXBsYXRlcyByZWFkOm1mYV9wb2xpY2llcyB1cGRhdGU6bWZhX3BvbGljaWVzIHJlYWQ6cm9sZXMgY3JlYXRlOnJvbGVzIGRlbGV0ZTpyb2xlcyB1cGRhdGU6cm9sZXMgcmVhZDpwcm9tcHRzIHVwZGF0ZTpwcm9tcHRzIHJlYWQ6YnJhbmRpbmcgdXBkYXRlOmJyYW5kaW5nIGRlbGV0ZTpicmFuZGluZyByZWFkOmxvZ19zdHJlYW1zIGNyZWF0ZTpsb2dfc3RyZWFtcyBkZWxldGU6bG9nX3N0cmVhbXMgdXBkYXRlOmxvZ19zdHJlYW1zIGNyZWF0ZTpzaWduaW5nX2tleXMgcmVhZDpzaWduaW5nX2tleXMgdXBkYXRlOnNpZ25pbmdfa2V5cyByZWFkOmxpbWl0cyB1cGRhdGU6bGltaXRzIGNyZWF0ZTpyb2xlX21lbWJlcnMgcmVhZDpyb2xlX21lbWJlcnMgZGVsZXRlOnJvbGVfbWVtYmVycyByZWFkOmVudGl0bGVtZW50cyByZWFkOmF0dGFja19wcm90ZWN0aW9uIHVwZGF0ZTphdHRhY2tfcHJvdGVjdGlvbiByZWFkOm9yZ2FuaXphdGlvbnNfc3VtbWFyeSByZWFkOm9yZ2FuaXphdGlvbnMgdXBkYXRlOm9yZ2FuaXphdGlvbnMgY3JlYXRlOm9yZ2FuaXphdGlvbnMgZGVsZXRlOm9yZ2FuaXphdGlvbnMgY3JlYXRlOm9yZ2FuaXphdGlvbl9tZW1iZXJzIHJlYWQ6b3JnYW5pemF0aW9uX21lbWJlcnMgZGVsZXRlOm9yZ2FuaXphdGlvbl9tZW1iZXJzIGNyZWF0ZTpvcmdhbml6YXRpb25fY29ubmVjdGlvbnMgcmVhZDpvcmdhbml6YXRpb25fY29ubmVjdGlvbnMgdXBkYXRlOm9yZ2FuaXphdGlvbl9jb25uZWN0aW9ucyBkZWxldGU6b3JnYW5pemF0aW9uX2Nvbm5lY3Rpb25zIGNyZWF0ZTpvcmdhbml6YXRpb25fbWVtYmVyX3JvbGVzIHJlYWQ6b3JnYW5pemF0aW9uX21lbWJlcl9yb2xlcyBkZWxldGU6b3JnYW5pemF0aW9uX21lbWJlcl9yb2xlcyBjcmVhdGU6b3JnYW5pemF0aW9uX2ludml0YXRpb25zIHJlYWQ6b3JnYW5pemF0aW9uX2ludml0YXRpb25zIGRlbGV0ZTpvcmdhbml6YXRpb25faW52aXRhdGlvbnMiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.gDdovASNcodcLev57JPi33iWKyzBp7PS1V7KAmcwKzgGF-9DP4MITmMFxpEcMaZwAKJSjsidL_laxwObH2G0Wot1p0_8LckC8euotS7Vkn7wct_gU2MI86i9J6xMpJ4hKcReBI93-K0n5SJGQXr7vR9VPyD62fiHvphSj2rjRWLHQ2S3wUwqpvLUunxMeMo4Yj3iHoDnxq-Z7Azk8Tj9KVqi9sWKaSbIDLNn0BMOkJ9WS1z9U1n2FumBPUO64H_l8SLXfk0skVw7f9UEyur0oaQ4-SxDuKT4ytYBTiMYCCWew0KMLYFP-YqlQorHTgtERLHM2jINhhhuINXGuCY-Dg'
  const dispatch = useDispatch()
  const users = useSelector(store => store.users)
  const [search, setSearch] = useState('')
  const [blockUsers, setBlockUsers] = useState(users)
  const [statusBlock, setStatusBlock] = useState('')
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    dispatch(getAllUsers())
    // dispatch(getAuth0Users())
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
        // setModal(true)

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

        // console.log(res)
      })

  }



  return <div className="container datas">

    <h1 className="mt-5">Block Users</h1>

    {loading &&
      <div className="loading-block">
        <Loading />
      </div>
    }

    <div className="user-block" style={{ width: "100%" }}>
      {/* <div className="space-modal">

      <Modal 
      isOpen={modal} 
      status={status}
      style={ModalStyle}>
        <div className="modala">
          <h2>The user has been {status}</h2>
          <img id="lockGif" src={lockGif} alt="lock_gif" />
          <button style={{width:"100px"}} onClick={() =>setModal(false)} className="btn btn-success">OK</button>

        </div>
      </Modal>
      </div> */}
      <form action="" id="form" onSubmit={searchUser}>
        <input type="text" className="input" onChange={fillSearchObj} />
        <input type='submit' className="btn btn-success" value="Search" />
      </form>

      <div className="table-container" >
        <table className="table scrolldown shadow" >
          <thead>
            <tr>
              {/* <th colSpan='3'><abbr title="User">User</abbr></th> */}
              {/* <th>Name</th> */}
              {/* <th><abbr title="Totals">Action</abbr></th> */}
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
                    // <button className="btn btn-info" onClick={() => blockUser(u.email,false)}>Unblock</button>
                    :
                    // <img onClick={() => blockUser(u.email,true)} src={unlock} alt="lock_icon" />
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