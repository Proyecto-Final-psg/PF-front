import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFavorite } from '../../../Redux/Actions'
import Card from '../../Card/Card'
import './Favourites.css'

const Favourites = () => {

  const user = useSelector(state => state.user[0]) 
  const favourites = useSelector(state => state.wishlist) 
   const dispatch = useDispatch()


  // useEffect(() => {
  //   dispatch(getFavorite(user.user_id))
  //    // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])


  return (
    <div className='favourites-container'>
      <h1>Favorites</h1>
      <div className='favourites-cards-container'>
        {favourites && favourites.map((p, i) => {
          return(
            <Card
              key={i}
              name={p.name}
              id={p.id}
              img={p.img.split(',')[0]}
              description={p.description}
              price={p.price}
              stock={p.stock}
          />
          )
        })}
      </div>
      
    </div>
  )
}

export default Favourites