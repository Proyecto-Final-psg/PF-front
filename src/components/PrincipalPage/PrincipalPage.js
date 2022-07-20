import './PrincipalPage.scss'
import Grid from '../ComerceGrid/Grid'
import Carousel from '../Carousel/Carousel'
import { useEffect } from 'react'
// import { useSelector } from 'react-redux'
const PrincipalPage = () => {
    // const userRedux = useSelector(state => state.user)
    useEffect(()=>{
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    },[])
    return (
        <div>

            <Carousel classname="carousel" />
            <Grid />
        </div>
    )
}
export default PrincipalPage