import React, { useState } from 'react'
import { FaCannabis } from 'react-icons/fa'
import './StarRating.scss'

const StarRating = ({localState, setLocalState, modal, value,clase}) => {

  const [rating, setRating] = useState(value ? value : null)
  const [hover, setHover] = useState(value ? value : null)

  const handleClick = (ratingValue) => {
    
    setRating(ratingValue)
    setLocalState({
      ...localState,
      score: ratingValue
    })
  }

  return (
    <div className={`star_container ${clase}`}>
        {
            [...Array(5)].map((star,i) => {
              const ratingValue = i + 1

              return (
                <label key={i}>
                  <input 
                    className='radio'
                    type='radio'
                    name='rating'
                    value={value ? value : ratingValue}
                    onClick={() => handleClick(ratingValue)}
                    disabled={value && true}
                  />
                  <FaCannabis 
                    className='star' 
                    size={value ? 20 : 30}
                    color={ratingValue <= (hover || rating) ? '#ffc107' : '#666'}
                    onMouseEnter={() => setHover(value ? value : ratingValue)}
                    onMouseLeave={() => setHover(null)}
                  />
                </label>
              )
            })
        }
    </div>
  )
}

export default StarRating