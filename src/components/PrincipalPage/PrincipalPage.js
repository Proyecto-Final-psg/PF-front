import './PrincipalPage.scss'
import Grid from '../ComerceGrid/Grid'
import Carousel from '../Carousel/Carousel'
import { useEffect, useState } from 'react'
const PrincipalPage = () => {
    const [refresh, setRefresh] = useState(true)

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

        return () => {
            setRefresh(false)
        };
    }, [])
    return (
        <div className='principal'>
            <div style={{ height: "100px" }}>
                {refresh && <Carousel className="carousel" />}

            </div>
            <Grid />
        </div>
    )
}
export default PrincipalPage