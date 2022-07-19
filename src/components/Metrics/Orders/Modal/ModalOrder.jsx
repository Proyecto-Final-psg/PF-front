import { useEffect } from 'react'
import Modal from 'react-modal'
import { useDispatch, useSelector } from 'react-redux'
import { getItemsOfOrder } from '../../../../Redux/Actions'

export function ModalOrder({isOpen, order}){

  if(!order){
    return null
  }
  
    return <div className="space-modal">

    <Modal isOpen={isOpen}
    style={{
      overlay: {
        position: 'fixed',
        top: "50px",
        backgroundColor: 'rgba(0, 0, 0, 0.587)'
      },
      content: {
        // backgroundColor:'rgba(0, 0, 0, 0.587)',
        position: 'absolute',
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexWrap:"warp",
        width:"auto",
        flexDirection:"column",
        // fontSize:"50px",
        top: '40px',
        left: '40px',
        right: '40px',
        bottom: '40px',
        // border: '1px solid #ccc',
        background: "rgb(253,253,253)",
    background: "linear-gradient(0deg, rgba(253,253,253,1) 63%, rgba(0,0,0,0) 100%)",
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        borderRadius: '20px',
        outline: 'none',
        padding: '20px',
        // backgroundImage:`url(${lockGif})`,
        // backgroundSize:"contain",
        // backgroundRepeat:"no-repeat",
        // width:"200px"
        // backgroundPosition:"right"
      }
    }}>
      <div className="modala">
        <h5>Order Details</h5>
        <table className="table">
          <thead>
            <th>ID</th>
            <th>User</th>
            <th>Status</th>
            <th>Products</th>
          </thead>
          <tbody>
            {order && order.length>0 && order.map(o => {
              return <th>
                <td>{o.id}</td>
                <td>{o.userUserId}</td>
                <td>{o.status}</td>
                <td>-</td>
              </th>
            })}
          </tbody>
        </table>
        {/* <img id="lockGif" src={lockGif} alt="lock_gif" /> */}
        <button style={{width:"100px"}} onClick={() => isOpen=false} className="btn btn-success">OK</button>
    
      </div>
    </Modal>
    </div>
}