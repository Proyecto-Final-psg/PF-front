import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllUsers, getTopCustomers, } from "../../../Redux/Actions"
import emailjs from '@emailjs/browser';
import swal from 'sweetalert'
import LoadingImg from '../../../assets/Loading.gif'
import './TopCustomers.scss'


// eslint-disable-next-line react-hooks/exhaustive-deps
export function TopCustomers() {
  const dispatch = useDispatch()
  const topCustomers = useSelector(store => store.topCustomers)
  const users = useSelector(store => store.users)
  const [loading, setLoading] = useState(false)
  let num = 0;
  useEffect(() => {
    dispatch(getTopCustomers())
    dispatch(getAllUsers())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  var holder = {};

  if (topCustomers.length > 0) {
    topCustomers.forEach(function (d) {
      if (holder.hasOwnProperty(d.username)) {
        holder[d.username] = holder[d.username] + d.total;
      } else {
        holder[d.username] = d.total;
      }
    });
  }

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
 
    return 0;
  });

  obj2 = obj2.slice(0, 10)

  console.log('obj',obj2);

  function matchIdWithUser(id) {
    let user = users.find(u => parseInt(u.user_id) === parseInt(id))
    console.log(user);
    if(user)
      return user.user_name;
  }


  const sendEmail = (e) => {
    setLoading(true)

    e.preventDefault();
    console.log(e.target.name.value)
    let userToSend = users.find(u => parseInt(u.user_id) === parseInt(e.target.name.value))


    e.target.name.value = userToSend.user_name;
    e.target.mailTo.value = userToSend.user_email;

    emailjs.sendForm('service_rquohvh', 'template_mwwg3i9', e.target, 'LidHyzsmZ0-R4ClFZ')
      .then((result) => {
        // console.log(result.text);
        setLoading(false)
        swal({
          title: "Email has been sent",
          text: "The client should receive the email with the notification soon",
          icon: "success",
          button: "Ok"
        })
          .then(ok => {
            // navigate(-1)
          })
      }, (error) => {
        console.log(error.text);
      });

  };

  function dispatchOrder(userID) {
    // const emailToDispatch = users.find(u => parseInt(u.user_id) === parseInt(userID))
    // console.log(emailToDispatch.user_email)

  }

  return <div className="container datas">

    <h1 className="mt-5">Top Customers</h1>
    {loading &&
                <div className='loadingGif'>
                    <h3>Loading</h3>
                    < img className='cmp-CardDetails-loading-img' src={LoadingImg} alt="my-gif" />
                </div>}

    <div className="lower-10" style={{ width: "100%" }}>
      <table className="table is-bordered is-narrow shadow">
        <thead>
          <tr>
            <th><abbr title="Top users">Name</abbr></th>
            {/* <th>Orders</th> */}
            <th><abbr title="Totals">Totals</abbr></th>
            <th><abbr title="Send Discounts">Send discount coupon</abbr></th>
          </tr>
        </thead>
        <tbody>
          {obj2 && obj2.map(o => {

            return <tr key={o.username}>
              <td >
                <div className="position">
                  <div id={`num${num + 1}`}>{num = num + 1}</div>
                  -{o.username && matchIdWithUser(o.username)}
                </div>
              </td>
                <td style={{ fontWeight: "bold" }}>${o.total}</td>
              
                <td>
                  <div className="order-form">
                    <form onSubmit={sendEmail}>
                          <input name="discount" style={{display:`${num < 4 && o.username !='null' ? '' : 'none'}`}} type="number" placeholder="15%" id="input-disc" />
                          <button className="discoun-button"  style={{display:`${num<4 && o.username !='null' ? '' : 'none'}`}}>
                        <div class="svg-wrapper-1">
                          <div class="svg-wrapper">    
                            <span id="icon" class="material-symbols-outlined">sell</span>
                          </div>
                        </div>
                        <span id="sp">Send</span>
                      </button>                      
                          <input type="text" name="name" readOnly value={o.username} style={{ display: "none" }} />
                          <input type="text" name="order" readOnly value={o.id} style={{ display: "none" }} />
                          <input type="text" name="mailTo" readOnly value='' style={{ display: "none" }} />                      
                        </form>
                  </div>
                    </td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  </div>
}