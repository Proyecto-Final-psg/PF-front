import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { getProductById, getReviews, addToCart } from '../../Redux/Actions'
import { Review } from '../Review/Review'
import './CardDetails.scss'
import LoadingImg from '../../assets/Loading.gif'
// import Swiper from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export function CardDetails() {
    const { id } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const product = useSelector(store => store.product)
    const reviews = useSelector(store => store.reviews)
    const userRedux = useSelector(state => state.user[0])
    let admin = userRedux.roll === "admin" || userRedux.roll === "super-admin"
    const [loading, setLoading] = useState(true)
    useEffect(() => {

        dispatch(getProductById(id))
        dispatch(getReviews(id))
        setTimeout(() => {
            setLoading(!loading)
        }, 600)
        return () => {
            setLoading(true)
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const addCart = () => {
        dispatch(addToCart(product.id, product.name, product.price,))
    }
    return (
        <div className='cmp-CardDetails-container'>
            {loading &&
                <div className='cmp-CardDetails-loading-container'>
                    < img className='cmp-CardDetails-loading-img' src={LoadingImg} alt="my-gif" />
                </div>}

            {!loading && <div className="detail">

                <div className="image">
                    <Swiper className='mySwiper'
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}>
                        {
                            product.img.split(',').length > 0 ?
                                product.img.split(',').map((c, i) => (
                                    <SwiperSlide key={i}>
                                        <img src={c} alt="Product pic" />
                                    </SwiperSlide>
                                ))
                                :
                                <img src={product.img} alt="Product pic" />
                        }
                    </Swiper>
                </div>

                <div className="description">
                    <button className='btn back' onClick={() => navigate(-1)}>
                        <span className="material-symbols-outlined">keyboard_backspace</span>
                    </button>

                    {admin && <div className='container-buttons_edit_remove'>
                        <NavLink className='button buton-edit' to={`/products/edit/${id}`}>Edit</NavLink>
                        <button className='button '>Remove</button>
                    </div>}

                    <h1>{product.name}</h1>
                    <hr />
                    {product && product.description ? <h5>{product.description}</h5> : <p>No description added</p>}

                    <div className={`stock-detail ${product.stock === 0 ? 'none' : (product.stock < 10 ? 'low' : '')}`}>{product.stock === 0 ? 'No stock' : (product.stock < 10 ? 'Low stock' : 'Stock')}</div>

                    {
                        product.stock > 0 &&
                        <button onClick={addCart} className='button'>
                            <div className="svg-wrapper-1">
                                <div className="svg-wrapper">
                                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M13.5 18c-.828 0-1.5.672-1.5 1.5 0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm-3.5 1.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm14-16.5l-.743 2h-1.929l-3.473 12h-13.239l-4.616-11h2.169l3.776 9h10.428l3.432-12h4.195zm-12 4h3v2h-3v3h-2v-3h-3v-2h3v-3h2v3z" /></svg>
                                </div>
                            </div>
                            <span>Add</span>
                        </button>
                    }

                </div>

                <h5 className='mt-5'>Reviews</h5>
                <div className="reviews">
                    <hr />
                    {reviews && reviews.map(review => {
                        return (
                            <Review
                                name={review.name}
                                score={review.score}
                                review={review.review}
                                key={review.id}
                            />
                        )
                    })}
                </div>
            </div>}

        </div>
    )
}