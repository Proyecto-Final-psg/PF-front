import './PrincipalPage.scss'
import Logout from '../Logout/Logout'
import Profile from '../Profile/Profile'
import Footer from '../Footer/Footer'
import Grid from '../ComerceGrid/Grid'
import Info from '../Info Panel/Info'
import Carousel from '../Carousel/Carousel'
const PrincipalPage = () => {
    return (
        <div>
            <h1>PRINCIPAL PAGE</h1>
            <Profile />
            <Logout />
            <Carousel />
            <Info />
            <Grid />
            <Footer />
        </div>
    )
}
export default PrincipalPage