import './PrincipalPage.scss'
import Logout from '../Logout/Logout'
import Profile from '../Profile/Profile'
const PrincipalPage = () => {
    return (
        <div>
            <h1>PRINCIPAL PAGE</h1>
            <Profile />
            <Logout />
        </div>
    )
}
export default PrincipalPage