import './Profile.scss'
import { useAuth0 } from '@auth0/auth0-react'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { registerUser, addGuest } from '../../Redux/Actions'
import { API_URL } from '../../Redux/Constants'
import swal from 'sweetalert'
// import axios from 'axios'
const Profile = () => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const { user, logout } = useAuth0()
    // const {getAccessTokenSilently} = useAuth0()
    const userRedux = useSelector(state => state.user[0])
    const [roll, setRoll] = useState(userRedux.roll)
    const dispatch = useDispatch()
    // const [tokenAuth0, setToken] = useState("")
    useEffect(() => {
        if (user) {
            let nuevo = {
                email: user.email,
                name: user.name,
                img: user.picture,
            }
            dispatch(registerUser(nuevo))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const refresRoll = () => {
        if (user && userRedux.user_id) {
            fetch(`${API_URL}/users/${userRedux.user_id}`)
                .then(response => response.json())
                .then(data => setRoll(data))
            if (userRedux.roll !== "guest") {
                if (roll.roll !== userRedux.roll) {
                    let nuevo = {
                        email: user.email,
                        name: user.name,
                        img: user.picture,
                    }
                    dispatch(registerUser(nuevo))
                    setRoll(userRedux)
                }
                if (roll.block === true) {
                    // alert("Your user is locked. Please contact weedical.shop@gmail.com")
                    // logout({ returnTo: window.location.origin })
                    swal({
                        title: `Your user is locked. Please contact weedical.shop@gmail.com`,
                        // text: "Doing this, the user will be unable to login to Weedical",
                        icon: "error",
                        dangerMode: true,
                        closeOnClickOutside: false
                    })
                        .then(
                            function (isConfirm) {
                                if (isConfirm) {
                                    logout()
                                }
                            }
                        )
                    let guest = [
                        {
                            email: "guest",
                            name: "guest",
                            roll: "guest"
                        }
                    ]
                    dispatch(addGuest(guest))
                    return
                }
            }
        }
    }
    useEffect(() => {
        refresRoll()
    })
    // async function token() {
    //     try {
    //         const token = await getAccessTokenSilently()
    //         const response = await axios.get('http://localhost:8081/pruebaPost', {
    //             headers: {
    //                 authorization: `Bearer ${token}`
    //             }
    //         })
    //         console.log(response.data)
    //     } catch (error) {
    //         console.log(error.message)
    //     }
    // }
    return (
        <div>
            {/* {console.log(userRedux)} */}
            {/* {console.log(roll.roll)} */}
            {/* <button onClick={token} className='boton-prueba'>
                BOTON PRUEBA
            </button> */}
        </div>
    )
}
export default Profile