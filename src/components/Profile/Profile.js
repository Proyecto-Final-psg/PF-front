import './Profile.scss'
import { useAuth0 } from '@auth0/auth0-react'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { registerUser } from '../../Redux/Actions'
// import { faMehRollingEyes } from '@fortawesome/free-regular-svg-icons'
// import { useSearchParams } from 'react-router-dom'

const Profile = () => {
    const { user } = useAuth0()
    const userRedux = useSelector(state => state.user[0])
    const [roll, setRoll] = useState(userRedux.roll)
    const dispatch = useDispatch()
    useEffect(() => {
        if (user) {
            let nuevo = {
                email: user.email,
                name: user.name,
                img: user.picture,
                token: user.token
            }
            dispatch(registerUser(nuevo))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const refresRoll = (user, userRedux) => {
        if (user && userRedux.user_id) {
            fetch('http://localhost:8081/users/' + userRedux.user_id)
                .then(response => response.json())
                .then(data => setRoll(data))
            if (userRedux.roll !== "guest") {
                if (roll.roll !== userRedux.roll) {
                    let nuevo = {
                        email: user.email,
                        name: user.name,
                        img: user.picture,
                        token: user.token
                    }
                    dispatch(registerUser(nuevo))
                    setRoll(userRedux)
                }
            }
        }
    }
    useEffect(() => {
        refresRoll(user, userRedux)
    })
    // async function token() {
    //     try {
    //         const token = await getAccessTokenSilently()
    //         const response = await axios.get('http://localhost:8081/prueba', {
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
            {/* <button onClick={token}>probando</button> */}
        </div>
    )
}
export default Profile