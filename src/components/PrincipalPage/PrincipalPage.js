import './PrincipalPage.scss'
import Profile from '../Profile/Profile'
import Footer from '../Footer/Footer'
import Grid from '../ComerceGrid/Grid'
import Info from '../Info Panel/Info'
import Carousel from '../Carousel/Carousel'

const PrincipalPage = () => {
    return (
        <div>
            
            <Profile /> 
            <Carousel />
            {/* <Info /> */}
            <Grid />
            <Footer />
        </div>
    )
}
export default PrincipalPage