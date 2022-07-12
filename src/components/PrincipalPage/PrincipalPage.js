import './PrincipalPage.scss'
import Grid from '../ComerceGrid/Grid'
import Info from '../Info Panel/Info'
import Carousel from '../Carousel/Carousel'
import { useSelector } from 'react-redux'
const PrincipalPage = () => {
    const userRedux = useSelector(state => state.user)
    return (
        <div>
            {console.log(userRedux)}
            <Carousel />
            <Info />
            <Grid />

        </div>
    )
}
export default PrincipalPage