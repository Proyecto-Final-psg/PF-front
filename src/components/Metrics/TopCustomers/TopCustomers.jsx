import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllUsers, getTopCustomers, } from "../../../Redux/Actions"
import emailjs from '@emailjs/browser';
import swal from 'sweetalert'
import LoadingImg from '../../../assets/Loading.gif'
import './TopCustomers.scss'
import placeOne from '../../../assets/1place.png'
import placeTwo from '../../../assets/2place.png'
import placeThree from '../../../assets/3place.png'

// eslint-disable-next-line react-hooks/exhaustive-deps
export function TopCustomers() {
  const dispatch = useDispatch()
  const topCustomers = useSelector(store => store.topCustomers)
  // const users = useSelector(store => store.users)
  const [loading, setLoading] = useState(false)
  let num = 0;
  useEffect(() => {
    dispatch(getTopCustomers())
    dispatch(getAllUsers())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    // console.log(topCustomers)
  }, [topCustomers])

  var holder = {};
  let resumen = []


  topCustomers.forEach(o => {
    if (o.user) {
      let c = {
        user: o.user.user_email,
        spent: o.total
      }
      resumen.push(c)
    }
    else {
      let c = {
        user: o.username,
        spent: o.total
      }
      resumen.push(c)
    }

  })

  if (resumen.length > 0) {
    resumen.forEach(function (d) {
      if (holder.hasOwnProperty(d.user)) {
        holder[d.user] = holder[d.user] + d.spent;
      } else {
        holder[d.user] = d.spent;
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




  const sendEmail = (e) => {
    setLoading(true)

    e.preventDefault();

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


  return <div className="container datas">

    <h1 className="mt-5 custom-title">Top Customers</h1>
    <span>Send discounts to your top three customers</span>
    {loading &&
      <div className='loadingGif'>
        <h3>Loading</h3>
        < img className='cmp-CardDetails-loading-img' src={LoadingImg} alt="my-gif" />
      </div>}
    <div>
      <div className="lower-10" style={{ width: "100%" }}>
        <table className="table is-bordered is-narrow shadow">
          <thead>
            <tr>
              <th><abbr title="Top users">Name</abbr></th>
              <th><abbr title="Totals">Totals</abbr></th>
              <th><abbr title="Send Discounts">Send discount coupon</abbr></th>
            </tr>
          </thead>
          <tbody>
            {
              obj2 && obj2.map(o => {
                num = num + 1
                return <tr key={o.username}>
                  <td >
                    <div className="position">
                      {num === 1 ? <img src={placeOne} alt="1st place" />
                        :
                        num === 2 ? <img src={placeTwo} alt="2st place" />
                          :
                          num === 3 ? <img src={placeThree} alt="3st place" />
                            :
                            null
                      }
                      {o.username}
                    </div>
                  </td>
                  <td style={{ fontWeight: "bold" }}>${o.total}</td>

                  <td>
                    <div >
                      <form onSubmit={sendEmail} className="order-form">
                        <div>
                          <input name="discount" style={{ display: `${num < 4 && o.username !== 'null' ? '' : 'none'}` }} type="number" placeholder="15%" id="input-disc" />

                        </div>

                        <div>
                          <button className="discoun-button" style={{ display: `${num < 4 && o.username !== 'null' ? '' : 'none'}` }}>
                            <div className="svg-wrapper-1">
                              <div className="svg-wrapper">
                                <span id="icon" className="material-symbols-outlined">sell</span>
                              </div>
                            </div>
                            <span id="sp">Send</span>
                          </button>
                        </div>
                        <input type="text" name="name" readOnly value={o.username} style={{ display: "none" }} />
                        <input type="text" name="order" readOnly value={o.id} style={{ display: "none" }} />
                        <input type="text" name="mailTo" readOnly value={o.username} style={{ display: "none" }} />
                      </form>
                    </div>
                  </td>
                </tr>
              })

            }
          </tbody>
        </table>
      </div>
    </div>
  </div>
}