import './PrincipalPage.scss'
import Grid from '../ComerceGrid/Grid'
import Info from '../Info Panel/Info'
import Carousel from '../Carousel/Carousel'
import { useSelector } from 'react-redux'
import Profile from '../Profile/Profile'
const PrincipalPage = () => {
    const userRedux = useSelector(state => state.user)
    return (
        <div>
            <Carousel />
            <Info />
            <Grid />

        </div>
    )
}
export default PrincipalPage