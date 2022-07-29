import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import './StarRating.scss'

const StarRating = ({localState, setLocalState, modal, value}) => {

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
    <div className='star_container'>
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
                  <FaStar 
                    className='star' 
                    size={30}
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