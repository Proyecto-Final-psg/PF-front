import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addReview } from '../../../Redux/Actions';
import Card from '../../Card/Card';
import './History.scss'
import StarRating from './StarRating/StarRating';
import { validate } from './Validate';

const HistoryShops = () => {

  const history = useSelector(store => store.orderDetails[0]?.arrayItems)
  const reviews = useSelector(store => store.reviews)
  const userReviews = useSelector(store => store.userReviews);
  //console.log(userReviews)
  //console.log(history)
  //console.log(reviews)

  const dispatch = useDispatch()

  const [modal, setModal] = useState(false)
  const [review, setReview] = useState({
    product_id: '',
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
    setError(validate({
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
      <h1>Your purchases</h1>
      <div className='cards_container'>
          {
            history?.length > 0 &&
            history?.map(c => (
                <Card
                  key={c.id}
                  id={c.id}
                  name={c.name}
                  description={c.description}
                  img={c.img}
                  price={c.price}
                  stock={c.stock}
                  review={true}
                  setModal={setModal}
                  localState={review}
                  setLocalState={setReview}
                  widthProp="150px"
                  heightProp="auto"
                />
            ))
          }
      </div>

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
            <StarRating localState={review} setLocalState={setReview} modal={modal}/>
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

export default HistoryShops