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
                   <div className="card-rev">
       <div className="content-rev">
           <div className="front-review card_load">
               <h3 className="title-review">
               <div className="stars-review">
                            {score && [...Array(score)].map((star, i) => {
                                return (
                                    <FaCannabis className='star-detail' key={i} style={{width:"20px"}}/>
                                    )
                                })}
                        </div>
               </h3>
               <p className="subtitle-review">
               <b>{name}</b>
               </p>
           </div>

           <div className="back-review">
               <p className="description-review">
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