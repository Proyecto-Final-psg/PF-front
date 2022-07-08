import './Profile.scss'

import { useAuth0 } from '@auth0/auth0-react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { registerUser } from '../../Redux/Actions'

const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0()
    const userState = useSelector(state => state.user)
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
            {/* {console.log(user, isAuthenticated, isLoading)}
            {console.log(isAuthenticated)} */}
            {console.log(userState)}
            {isAuthenticated &&
                <div>
                    <img src={user.picture}></img>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                    <p>{user.family_name}</p>
                </div>
            }
        </div>
    )
}
export default Profile