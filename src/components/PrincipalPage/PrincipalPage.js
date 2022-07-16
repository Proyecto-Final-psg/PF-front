import './PrincipalPage.scss'
import Grid from '../ComerceGrid/Grid'
import Carousel from '../Carousel/Carousel'
// import { useSelector } from 'react-redux'

const PrincipalPage = () => {
    // const userRedux = useSelector(state => state.user)
   
    return (
        <div>
            <Carousel classname="carousel" />
            <Grid />
        </div>
    )
}
export default PrincipalPage