import './Profile.scss'

import { useAuth0 } from '@auth0/auth0-react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { registerUser, addGuest } from '../../Redux/Actions'

const Profile = () => {
    const { user } = useAuth0()
    const userRedux = useSelector(state => state.user)
    const dispatch = useDispatch()
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
    useEffect(() => {
        if (user) {
            let nuevo = {
                email: user.email,
                name: user.name,
                token: user.token
            }
            dispatch(registerUser(nuevo))
        } else {

            let guest = [{
                email: "guest",
                name: "guest",
                roll: "guest"
            }]
            dispatch(addGuest(guest))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div>
            {console.log(userRedux)}
            {/* <button onClick={token}>probando</button> */}
        </div>
    )
}
export default Profile