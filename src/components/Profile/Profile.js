import './Profile.scss'

import { useAuth0 } from '@auth0/auth0-react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { registerUser } from '../../Redux/Actions'

const Profile = () => {
    const { user, isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0()
    const userRedux = useSelector(state => state.user)
    async function token() {
        const token = await getAccessTokenSilently()
        user.token = token
    }
    token()
    const dispatch = useDispatch()
    useEffect(() => {
        if (user) {
            let nuevo = {
                email: user.email,
                name: user.name
            }
            dispatch(registerUser(nuevo))
        }
    }, [])
    return (
        <div>
            {console.log(user)}
        </div>
    )
}
export default Profile