import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllUsers,  getOrderItems, getTopCustomers,  } from "../../../Redux/Actions"
// import { API_URL } from "../../../Redux/Constants"

export function TopCustomers(){

  const dispatch = useDispatch()

  const topCustomers = useSelector(store => store.topCustomers)

  useEffect(()=>{
    dispatch(getTopCustomers())
       // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  var holder = {};

  topCustomers.forEach(function(d) {
  if (holder.hasOwnProperty(d.username)) {
    holder[d.username] = holder[d.username] + d.total;
  } else {
    holder[d.username] = d.total;
  }
});

var obj2 = [];

for (var prop in holder) {
  obj2.push({ username: prop, total: holder[prop] });
}

obj2.sort(function (a, b) {
  if (a.total < b.total) {
    return 1;
  }
  if (a.total > b.total) {
    return -1;
  }
  // a must be equal to b
  return 0;
});


    return <div className="container datas">
    
    <h1 className="mt-5">Top Customers</h1>


    <div className="lower-10" style={{width:"100%"}}>
    <table className="table is-bordered is-narrow shadow">
        <thead>
          <tr>
            <th><abbr title="Top users">Name</abbr></th>
            {/* <th>Orders</th> */}
            <th><abbr title="Totals">Totals</abbr></th>
          </tr>
        </thead>
        <tbody>
          {obj2 && obj2.map(o => {
            return <tr>
              <td>{o.username}</td>
              {/* <td>{o.order_id}</td> */}
              <td>{o.total}</td>
            </tr>
          })}
          </tbody>
          </table>
  </div>
  </div>
}