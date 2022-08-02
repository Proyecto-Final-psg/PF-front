import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addReview, getReviews, getUserReviews } from '../../Redux/Actions';
import { validator } from '../CreateProduct/helpers/Validator';
import './ModalReview.scss'
import StarRating from './StarRating/StarRating';
import swal from 'sweetalert'

const ModalReview = ({ modal, setModal, id }) => {
  const usr = useSelector((store) => store.user);
  const dispatch = useDispatch()

  const [review, setReview] = useState({
    user_id: usr[0].user_id,
    product_id: '',
    name: '',
    score: '',
    review: ''
  })

  useEffect(() => {
    if (modal) {
      setTimeout(() => {
        setReview({
          ...review,
          product_id: id
        })
      }, 1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modal])

  const [error, setError] = useState({})

  const handleInputChange = (e) => {
    setReview({
      ...review,
      [e.target.name]: e.target.value
    })
    setError(validator(review.review))
  }

  const handleReview = (e) => {
    e.preventDefault()
    dispatch(addReview(review))
    setReview({
      product_id: '',
      name: '',
      score: '',
      review: ''
    })
    setModal({
      modal: false,
      id: ''
    })
    swal({
      title: `Review created successfully!`,
      icon: "success",
      button: 'Ok'
    }).then(function (isConfirm) {
      if (isConfirm) {
        dispatch(getReviews(id))
        dispatch(getUserReviews(usr[0].user_id))
      }
    })
  }

  const handleCancel = (e) => {
    e.preventDefault()
    setReview({
      product_id: '',
      name: '',
      score: '',
      review: ''
    })
    setModal({
      modal: false,
      id: ''
    })
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
            <input className="input field has-text-black-bis" type="text" placeholder="Your name or anonymous" value={review.name} name='name' onChange={handleInputChange} autoComplete='off' />
            <p className='warning'>{error.review}</p>
            <textarea className="textarea field" placeholder="Your review" value={review.review} name='review' onChange={handleInputChange} />
            <StarRating localState={review} setLocalState={setReview} modal={modal} />
          </section>
          <footer className="modal-card-foot">
            {
              Object.keys(error).length || review.review.length === 0 ?
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
