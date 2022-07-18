import { useState } from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllUsers, getAuth0Users } from "../../../Redux/Actions"
import lock from '../../../assets/lock.png'
import lockGif from '../../../assets/lock.gif'
import './UserCrud.scss'
import Modal from 'react-modal'

export function UserCrud(){
  const dispatch = useDispatch()
  let users = useSelector(store => store.users)
  const [search, setSearch] = useState('')
  const [results, setResults] = useState(users)
  const [modal , setModal] = useState(false)

  useEffect(()=>{
    dispatch(getAllUsers())
    // eslint-disable-next-line 

  },[])

  const fillSearchObj = (e) =>{
    setSearch(e.target.value.toLowerCase())
  }

  function searchUser(e){
      e.preventDefault()
      users = users.filter(u => u.user_email.includes(search))
      console.log(users)
      setResults(users)
      return users;
  }
  
  function blockUser(userEmail,action){
    let user = users.find(o => o.email === userEmail)
    if(user){
      console.log('BLOCK = ',action)
    }
    else
      alert('User not found')
  }


    return  <div className="container datas">
    
    <h1 className="mt-5">Block Users</h1>


    <div className="user-block" style={{width:"100%"}}>
      <div className="space-modal">

      <Modal isOpen={modal}
      style={{
        overlay: {
          position: 'fixed',
          top: "50px",
          backgroundColor: 'rgba(0, 0, 0, 0.587)'
        },
        content: {
          position: 'absolute',
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          flexWrap:"warp",
          width:"auto",
          flexDirection:"column",
          fontSize:"50px",
          top: '40px',
          left: '40px',
          right: '40px',
          bottom: '40px',
          background: "rgb(253,253,253)",
background: "linear-gradient(0deg, rgba(253,253,253,1) 63%, rgba(0,0,0,0) 100%)",
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
          borderRadius: '20px',
          outline: 'none',
          padding: '20px'
        }
      }}>
        <div className="modala">
          <h2>Done</h2>
          <img id="lockGif" src={lockGif} alt="lock_gif" />
          <button style={{width:"100px"}} onClick={() =>setModal(false)} className="btn btn-success">OK</button>

        </div>
      </Modal>
      </div>
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
          {results && results.map(u => {
            return <tr key={u.user_id} className={u.blocked ? 'red' : ''}>
              {/* <td key={u.id} style={{backgroundImage:`url(${u.user_picture})`,backgroundSize:"cover",backgroundPosition:"center",width:"100px"}}></td> */}
              <td style={{width:"auto"}}>{u.user_name}</td>
              <th>{u.user_email}</th>
              <td id="img">
                {u.blocked
                ?
                <img onClick={() => blockUser(u.email,false)} src={lock} alt="lock_icon" />
                // <button className="btn btn-info" onClick={() => blockUser(u.email,false)}>Unblock</button>
                :
                // <img onClick={() => blockUser(u.email,true)} src={unlock} alt="lock_icon" />
                  <button className="btn btn-danger" onClick={() => blockUser(u.email,true)}>Block</button>
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