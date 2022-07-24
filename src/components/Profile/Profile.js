import './Profile.scss'
import { useAuth0 } from '@auth0/auth0-react'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { registerUser } from '../../Redux/Actions'
import { API_URL } from '../../Redux/Constants'
import axios from 'axios'
// import { faMehRollingEyes } from '@fortawesome/free-regular-svg-icons'
// import { useSearchParams } from 'react-router-dom'

const Profile = () => {
    const { user, getAccessTokenSilently } = useAuth0()
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