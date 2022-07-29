import './PrincipalPage.scss'
import Grid from '../ComerceGrid/Grid'
import Carousel from '../Carousel/Carousel'
import { useEffect } from 'react'
const PrincipalPage = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [])
    return (
        <div className='principal'>
            <div style={{height:"100px"}}>
                <Carousel className="carousel" />
            </div>
            <Grid />
        </div>
    )
}
export default PrincipalPage