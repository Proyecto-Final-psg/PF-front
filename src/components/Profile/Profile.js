import './Profile.scss'

import { useAuth0 } from '@auth0/auth0-react'

const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0()
    return (
        <div>
            {console.log(user, isAuthenticated, isLoading)}
            {console.log(isAuthenticated)}
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