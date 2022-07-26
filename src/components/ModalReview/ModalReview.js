import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addReview } from '../../Redux/Actions';
import { validator } from '../CreateProduct/helpers/Validator';
import './ModalReview.scss'
import StarRating from './StarRating/StarRating';
//import { validate } from './Validate';

const ModalReview = ({modal, setModal, id}) => {

  const history = useSelector(store => store.orderDetails[0]?.arrayItems)
  //const reviews = useSelector(store => store.reviews)
  const userReviews = useSelector(store => store.userReviews);
  const usr = useSelector((store) => store.user);
  const orders = useSelector((store) => store.orderDetails);
  console.log('userReviews', userReviews)
  //console.log(history)
  //console.log('reviews',reviews)
  const dispatch = useDispatch()

  const [review, setReview] = useState({
    user_id: usr[0].user_id,
    product_id: id,
    name: '',
    score: '',
    review: ''
  })
  const [error, setError] = useState({})

  const handleInputChange = (e) => {
    setReview({
      ...review,
      [e.target.name]: e.target.value
    })
    setError(validator({
      ...review,
      [e.target.name]: e.target.value,
    }))
  }
  //console.log(review)
  const handleReview = (e) => {
    e.preventDefault()
    dispatch(addReview(review))
    setReview({
      product_id: '',
      name: '',
      score: '',
      review: ''
    })
    setModal(false)
  }

  const handleCancel = (e) => {
    e.preventDefault()
    setReview({
      product_id: '',
      name: '',
      score: '',
      review: ''
    })
    setModal(false)
  }

  return (
    <div className='history'>
    
      <div className={`modal ${modal && 'is-active'}`}>
        <div className="modal-background" onClick={handleCancel}></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Leave your review</p>
            <button className="delete" aria-label="close" onClick={() => setModal(false)}></button>
          </header>
          <section className="modal-card-body">
            <p className='warning'>{error.name}</p>
            <input className="input field has-text-black-bis" type="text" placeholder="Your name" value={review.name} name='name' onChange={handleInputChange} autoComplete='off' />
            <p className='warning'>{error.review}</p>
            <textarea className="textarea field" placeholder="Your review" value={review.review} name='review' onChange={handleInputChange} />
            <StarRating localState={review} setLocalState={setReview} modal={modal} />
          </section>
          <footer className="modal-card-foot">
            {
              Object.keys(error).length || review.name.length === 0 ?
                <button className="button is-light" disabled={true}>Done</button>
                :
                <button className="button is-success" onClick={handleReview}>Done</button>
            }
            <button className="button" onClick={handleCancel}>Cancel</button>
          </footer>
        </div>
      </div>

    </div>
  )
}

export default ModalReview