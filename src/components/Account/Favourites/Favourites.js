import React from 'react'
import {  useSelector } from 'react-redux'
import Card from '../../Card/Card'
import './Favourites.css'
import heartWeed from '../../../assets/favweed.png'

const Favourites = () => {

  const favourites = useSelector(state => state.wishlist) 
   

  return (
    <div className='favourites-container'>
      <h2 className="custom-title mb-5">Favorites</h2>
      {
      favourites.length === 0 && 
      <div className='favourites-no-favs-container'>
        <p>You have no favorites</p>
        <img className='no-favorites-img-heart' src={heartWeed} alt='no favs'/>
      </div>
      }
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