import React from 'react'

const StarRating = () => {
  return (
    <div>
        {
            [...Array(5)].map((star))
        }
    </div>
  )
}

export default StarRating