import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { createDiscount, getAllUsers, getTopCustomers, } from "../../../Redux/Actions"
import emailjs from '@emailjs/browser';
import swal from 'sweetalert'
import LoadingImg from '../../../assets/Loading.gif'
import './TopCustomers.scss'
import placeOne from '../../../assets/1place.png'
import placeTwo from '../../../assets/2place.png'
import placeThree from '../../../assets/3place.png'
import Aos from 'aos'
import 'aos/dist/aos.css'

// eslint-disable-next-line react-hooks/exhaustive-deps
export function TopCustomers() {

  const [percentage, setPercentage] = useState(0)
  var usrDsc = ""
  // const [usrDsc, setUsrDsc] = useState('')
  const discountCreated = useSelector(store => store.discount_created)


  function fillDiscountNumber(e) {
    setPercentage(e.target.value)
  }

  useEffect(() => {
    Aos.init({ once: true })
  }, [])

  const dispatch = useDispatch()
  const topCustomers = useSelector(store => store.topCustomers)
  const [loading, setLoading] = useState(false)
  const [theCode, setTheCode] = useState(false)

  let num = 0;
  useEffect(() => {
    dispatch(getTopCustomers())
    dispatch(getAllUsers())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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


  useEffect(() => {
    const cod = document.getElementById('code')
    // console.log(discountCreated);
    if (cod && discountCreated) {
      // console.log(discountCreated.code)
      cod.value = discountCreated.code
      setTheCode(true)
    }
  }, [discountCreated])

  function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() *
        charactersLength));
    }
    return result;
  }

  const discountCode = makeid(6)



  function createCodeAndSendMail(e, user) {
    e.preventDefault()
    // e.reset()
    // console.log(user);
    // setUsrDsc(user)
    // setTheCode(discountCode)
    document.getElementById('mailTo').value = user
    document.getElementById('name').value = user
    document.getElementById('code').value = discountCode
    document.getElementById('discount').value = percentage

    // code.value = discountCode;
    // const usr = document.createElement('input')
    // usr.value = 
    dispatch(createDiscount(discountCode, percentage))

    sendEmail()
  }

  const sendEmail = () => {

    // e.preventDefault()
    // dispatch(createDiscount(percentage))
    setLoading(true)
    const form = document.getElementById('emailForm')
    // form.preventDefault()
    // console.log(form)
    // e.preventDefault();

    emailjs.sendForm('service_rquohvh', 'template_mwwg3i9', form, 'LidHyzsmZ0-R4ClFZ')
      .then((result) => {
        setLoading(false)
        swal({
          title: "Email has been sent",
          text: "The client should receive the email with the notification soon",
          icon: "success",
          button: "Ok"
        })
          .then(() => {
            // console.log('OK');
            // dispatch(createDiscount(percentage))
          })
      }, (error) => {
        console.log(error.text);
      });
  };


  return <div className="container datas">

    <h1 className="mt-5 custom-title">
      Top Customers
      <span id="topCustomer" className="iconMenu material-symbols-outlined">face</span>
    </h1>
    <span>Send discounts to your top three customers</span>
    {loading &&
      <div className='loadingGif'>
        <h3>Loading</h3>
        < img className='cmp-CardDetails-loading-img' src={LoadingImg} alt="my-gif" />
      </div>}
    <div>
      <div className="lower-10" style={{ width: "100%" }}>
        <div className="container-top">
          <table className="table is-bordered is-narrow shadow" data-aos='fade-up'>
            <thead>
              <tr>
                <th><abbr id="admin-table-header" title="User Name">
                  User
                  <span className="material-symbols-outlined">person</span>
                </abbr></th>
                <th><abbr id="admin-table-header" title="Total">
                  Total
                  <span className="material-symbols-outlined">savings</span>
                </abbr></th>
                <th><abbr id="admin-table-header" title="Send discount coupon to the client">
                  Discount coupon
                  <span className="material-symbols-outlined">shopping_bag</span>
                </abbr></th>
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
                    <td className="fit" style={{ fontWeight: "bold" }}>${o.total}</td>

                    <td className="fit">
                      <div >
                        <form onSubmit={(e) => createCodeAndSendMail(e, o.username)} className="order-form" id='emailForm' >
                          <div>
                            <input name="" style={{ display: `${num < 4 && o.username !== 'null' ? '' : 'none'}` }} type="number" placeholder="%" id="input-disc" onChange={fillDiscountNumber} />

                          </div>

                          <div>
                            <button className="discoun-button btn-w" style={{ display: `${num < 4 && o.username !== 'null' ? '' : 'none'}` }}>
                              <div className="svg-wrapper-1">
                                <div className="svg-wrapper">
                                  <span id="icon" className="material-symbols-outlined">sell</span>
                                </div>
                              </div>
                              <span id="sp">Send</span>
                            </button>
                          </div>
                          <input type="text" name="name" id="name" value={usrDsc} style={{ display: "none" }} readOnly />
                          {/* <input type="text" name="order" readOnly value={o.id} style={{ display: "none" }} /> */}
                          <input type="text" name="mailTo" id="mailTo" value={usrDsc} style={{ display: "none" }} readOnly />
                          <input type="text" name="code" id='code' value={theCode} style={{ display: "none" }} readOnly />
                          <input type="text" name="discount" id='discount' style={{ display: "none" }} readOnly value={percentage}  />
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

  </div>
}