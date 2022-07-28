import { useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { getProductById, getReviews, addToCart, addFavorite, getFavorite } from '../../Redux/Actions'
import { Review } from '../Review/Review'
import ModalReview from '../ModalReview/ModalReview'
import './CardDetails.scss'
import LoadingImg from '../../assets/Loading.gif'
// import Swiper from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import swal from 'sweetalert'

export function CardDetails() {
    const { id } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const product = useSelector(store => store.product)
    const reviews = useSelector(store => store.reviews)
    const wishlist = useSelector(state => state.wishlist)
    const userRedux = useSelector(state => state.user[0])
    const userReviews = useSelector(store => store.userReviews);
    //console.log(userReviews)
    let admin = userRedux.roll === "admin" || userRedux.roll === "super-admin"
    let user = userRedux.roll === "user"
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0()
    const user_id = userRedux.user_id
    const [modal, setModal] = useState(false)
    const [btn, setButton] = useState(true)
    const [loading, setLoading] = useState(true)
    useEffect(() => {

        dispatch(getProductById(id))
        dispatch(getReviews(id))
        setTimeout(() => {
            setLoading(false)
        }, 600)
        return () => {
            setLoading(true)
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

/*     useEffect(() => {
      if(userReviews.map(r => r.productId).filter(r => r == id).length === 0) setButton(false)
      console.log(userReviews.map(r => r.productId).filter(r => r == id))
    }, []) */
    
    const addCart = () => {
        dispatch(addToCart(product.id, product.name, product.price,))
    }
    // const idNumber = parseInt(id)
    const addFavorites = (e) =>{
        e.preventDefault()
        dispatch(addFavorite(id, user_id))
    }
    
    function handleClickStock(e) {
        e.preventDefault()
        if (!admin && !user) {
            swal({
                title: `Sure! Sign in and we'll let you know when this item is available.`,
                // text: "Doing this, the user will be unable to login to Weedical",
                icon: "info",
                buttons: [
                    'Cancel',
                    'Sign In'
                ],
                dangerMode: true
            })
                .then(
                    function (isConfirm) {
                        if (isConfirm) {
                            loginWithRedirect()
                        }
                    }
                )
        } else {
            swal({
                title: `To confirm:`,
                text: "We'll notify you when this item is available.",
                icon: "info",
                buttons: [
                    'Cancel',
                    'Yes, Notify Me'
                ],
                dangerMode: true,
            }).then(function (isConfirm) {
                if (isConfirm) {
                    swal({
                        title: `We let you know when this item is available!`,
                        icon: 'success'
                    }).then(function () {
                        // suscription to newsletter
                    });
                }
            })
        }

    }


    if (!product.id || loading) {
        return (
            <div className='cmp-CardDetails-loading-container-1'>
                < img className='cmp-CardDetails-loading-img-1' src={LoadingImg} alt="my-gif" />
            </div>
        )
    }

    return (
        <div className='cmp-CardDetails-container'>
            {/* {loading &&
                <div className='cmp-CardDetails-loading-container'>
                    < img className='cmp-CardDetails-loading-img' src={LoadingImg} alt="my-gif" />
                </div>} */}
            <ModalReview modal={modal} setModal={setModal} id={id} setButton={setButton}/>

            <div className="detail">

                <div className="image">
                    <Swiper className='mySwiper'
                        modules={[Navigation, Pagination, A11y]}
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

                    {admin &&
                        <div className='container-buttons_edit_remove'>
                            <NavLink className='button-edit' to={`/products/edit/${id}`}>Edit</NavLink>
                            <button className='button-delete'>Remove</button>
                            {
                                !btn &&
                                <button className='button-edit' onClick={() => setModal(true)}>Review</button>  
                            }
                            {console.log('estado',btn)}
                            <button className='button-favorite' onClick= {addFavorites}>Favorite</button>
                        </div>}
                    <br></br>
                    <p className='name-product-detail'>{product.name}</p>

                    <p className='name-product-detail'>$ {product.price}
                        <span className='span-thc-detail'>{product.thc ? `THC: ${product.thc}.mg` : `THC: 0.mg`}</span>
                        <span className='span-cbd-detail'>{product.cbd ? `CBD: ${product.cbd}.mg` : `CBD: 0.mg`}</span></p>

                    <hr className='hr-product-detail' />
                    {product && product.description ? <h5>{product.description}</h5> : <p>No description added</p>}

                    <div className={`stock-detail ${product.stock === 0 ? 'none' : (product.stock < 10 ? 'low' : '')}`}>{product.stock === 0 ? 'No stock' : (product.stock < 10 ? 'Low stock' : 'Stock')}</div>

                    {
                        product.stock > 0 ?
                            <button onClick={addCart} className='button button-add-cart-detail'>
                                <div className="svg-wrapper-1">
                                    <div className="svg-wrapper">
                                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M13.5 18c-.828 0-1.5.672-1.5 1.5 0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm-3.5 1.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm14-16.5l-.743 2h-1.929l-3.473 12h-13.239l-4.616-11h2.169l3.776 9h10.428l3.432-12h4.195zm-12 4h3v2h-3v3h-2v-3h-3v-2h3v-3h2v3z" /></svg>
                                    </div>
                                </div>
                                <span>Add</span>
                            </button>
                            :
                            <button className='button' onClick={handleClickStock}>Notify Me</button>
                    }

                </div>
                <div className="container-reviews">
                    <h5 className='mt-5' >Reviews</h5>
                </div>
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

            </div>

        </div>
    )
}