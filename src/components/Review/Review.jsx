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
                   <div class="card-rev">
       <div class="content-rev">
           <div class="front card_load">
               <h3 class="title">
               <div className="stars-review">
                            {score && [...Array(score)].map((star, i) => {
                                return (
                                    <FaCannabis className='star-detail' key={i} style={{width:"20px"}}/>
                                    )
                                })}
                        </div>
               </h3>
               <p class="subtitle">
               <h2><b>{name}</b></h2>
               </p>
           </div>

           <div class="back">
               <p class="description">
               <>{review}</>
               </p>
           </div>
       </div>
   </div>

                {/* <div className="cardreview">
                        <div className="stars-review">
                            {score && [...Array(score)].map((star, i) => {
                                return (
                                    <FaCannabis className='star-detail' key={i} />
                                    )
                                })}
                        </div>
                                <h2><b>{name}</b></h2>
                        <p>{review}</p>
                </div> */}
            </Hover>
        </div>
    )
}