import React from 'react'
import {  useSelector } from 'react-redux'
import Card from '../../Card/Card'
import './Favourites.css'
import heartWeed from '../../../assets/favweed.png'
import { useEffect } from 'react'

const Favourites = () => {

  const favourites = useSelector(state => state.wishlist) 
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
}, [])

  return (
    <div className='favourites-container'>
      <h2 className="custom-title mb-5">Favorites</h2>
      {
      favourites.length === 0 && 
      <div className='favourites-no-favs-container'>
        <p>You didn't add any products to favorites.</p>
        <span style={{textAlign:"center",fontSize:"12px",color:"grey"}}>To do this, go to the home section, place the mouse over the product you want to add, and you will see a litle heart in the bottom-right corner</span>
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