import { useEffect } from 'react'
import './info.css'
import Aos from 'aos'
import AnimatedNumbers from "react-animated-numbers";
import 'aos/dist/aos.css'
import { useSelector } from 'react-redux';

function Info() {
    useEffect(() => {
        Aos.init({ duration: 2000,once: true, })
    }, [])

    const products = useSelector(store => store.products)
    const stock = products.length
    // const [stock, setStock] = useState(products.length) //comente para deployd
    // const [discount, setDiscount] = useState(25)        //comente para deployd
    const discount = 25
    return <div className='info'>
        <div className="all-products" data-aos="fade-right">
            <span >We have</span>
            <AnimatedNumbers
                includeComma
                animateToNumber={stock}
                fontStyle={{ fontSize: 80, color: "green" }}
                configs={[
                    { mass: 1, tension: 220, friction: 100 },
                    { mass: 1, tension: 180, friction: 130 },
                    { mass: 1, tension: 280, friction: 90 },
                    { mass: 1, tension: 180, friction: 135 },
                    { mass: 1, tension: 260, friction: 100 },
                    { mass: 1, tension: 210, friction: 180 },
                ]}
            />
            <span>products</span>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div className="discounts" data-aos="fade-left">
            <span>In July</span>
            <AnimatedNumbers
                includeComma
                animateToNumber={discount}
                fontStyle={{ fontSize: 80, color: "green" }}
                configs={[
                    { mass: 1, tension: 220, friction: 100 },
                    { mass: 1, tension: 180, friction: 130 },
                    { mass: 1, tension: 280, friction: 90 },
                    { mass: 1, tension: 180, friction: 135 },
                    { mass: 1, tension: 260, friction: 100 },
                    { mass: 1, tension: 210, friction: 180 },
                ]}
            />
            <span>%</span>
        </div>


    </div>
}

export default Info