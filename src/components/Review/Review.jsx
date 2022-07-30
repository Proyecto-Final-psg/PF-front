import './Review.scss'
import { FaCannabis } from 'react-icons/fa'

export function Review({ name, score, review }) {

    score = parseInt(score)

    return <div class="card-review">
        <div class="align">
            <span class="red"></span>
            <span class="yellow"></span>
            <span class="green"></span>
        </div>

        <h1><b>{name}</b></h1>
        <div className="stars">
            {score && [...Array(score)].map((star, i) => {
                return (
                    <FaCannabis className='star-detail' key={i} />
                )
            })}
        </div>
        <p>{review}</p>
    </div>
    {/* </div>

    return (
    <div className="review-detail">
        <div className="review-header">
            <span><b>{name}</b></span>
            <div className="stars">
               {score && [...Array(score)].map((star, i) => {
                return(
                    <FaCannabis className='star-detail' key={i}/>
                )
               })}
            </div>

        </div>
        <p>{review}</p>

    </div>
    ) */}
}