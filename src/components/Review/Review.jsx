import './Review.scss'
import { FaCannabis } from 'react-icons/fa'
import Hover from 'react-3d-hover';
export function Review({ name, score, review }) {

    score = parseInt(score)

    return (
        <div>
            <Hover 
            scale={1.2} 
            perspective={200} 
            speed={3500}
            max={10}
            easing="cubic-bezier(.03,.98,.52,.99)"
            >

                <div class="cardreview">
                        <h2><b>{name}</b></h2>
                        <div className="stars">
                            {score && [...Array(score)].map((star, i) => {
                                return (
                                    <FaCannabis className='star-detail' key={i} />
                                )
                            })}
                        </div>
                        <p>{review}</p>
                </div>
            </Hover>
        </div>
    )
}