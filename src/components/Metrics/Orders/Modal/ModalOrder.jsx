import Modal from 'react-modal'

export function ModalOrder({ isOpen, order }) {

  if (!order) {
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
          position: 'absolute',
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "warp",
          width: "auto",
          flexDirection: "column",
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
          padding: '20px',
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
            {order && order.length > 0 && order.map(o => {
              return <th>
                <td>{o.id}</td>
                <td>{o.userUserId}</td>
                <td>{o.status}</td>
                <td>-</td>
              </th>
            })}
          </tbody>
        </table>
        <button style={{ width: "100px" }} onClick={() => isOpen = false} className="btn btn-success">OK</button>
      </div>
    </Modal>
  </div>
}