import { useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { getProductById, getReviews, addToCart, getUserReviews, subscribeStock } from '../../Redux/Actions'
import { Review } from '../Review/Review'
import './CardDetails.scss'
import LoadingImg from '../../assets/Loading.gif'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import swal from 'sweetalert'
import StarRating from '../ModalReview/StarRating/StarRating'
import { addToFavourites, deleteFavourite, signInFav } from '../Account/Favourites/favortitesFunctions'
import party from "party-js";
import Toastify from 'toastify-js'

export function CardDetails() {
    SwiperCore.use([Autoplay]);
    const { id } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const product = useSelector(store => store.product)
    const reviews = useSelector(store => store.reviews)
    const favourites = useSelector(state => state.wishlist)
    const productFavourite = favourites && favourites.find(f => f.id === product.id)
    const score = reviews.map(r => r.score)
    const reducer = (accumulator, curr) => accumulator + curr;
    const userRedux = useSelector(state => state.user[0])
    let admin = userRedux.roll === "admin" || userRedux.roll === "super-admin"
    let user = userRedux.roll === "user"
    const { loginWithRedirect } = useAuth0()
    const user_id = userRedux.user_id
    const [loading, setLoading] = useState(true)
    const [subscribe, setSubscribe] = useState(false)


    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [])

    useEffect(() => {

        dispatch(getProductById(id))
        dispatch(getReviews(id))
        dispatch(getUserReviews(user_id))
        setTimeout(() => {
            setLoading(false)
        }, 600)
        return () => {
            setLoading(true)
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const addCart = (e) => {
        party.confetti(e.target, {
            count: party.variation.range(20, 40),
          });
      
          Toastify({
            text: `Added ${product.name} to cart 🙌`,
            duration: 3000,
      
            newWindow: true,
            close: false,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "#438A00",
              padding: "20px"
            },
            onClick: function () { } // Callback after click
          }).showToast();
        dispatch(addToCart(product.id, product.name, product.price,))
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
                        dispatch(subscribeStock(userRedux.user_id, id))
                        setSubscribe(true)
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
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                    <div className='container-buttons_edit_remove'>
                    {admin &&
                        <>
                            <NavLink className='button-edit' to={`/products/edit/${id}`}>Edit</NavLink>
                        </>
                       }
                    {user || admin ?
                       
                        <button 
                        title={!productFavourite ? 'Add to favorites' : 'Remove from favorites'} 
                        className={ !productFavourite? "button-green-favorite" :"button-red-favorite" } 
                        onClick={!admin && !user ? (e) => signInFav(e, loginWithRedirect)
                        : !productFavourite ? (e) => addToFavourites(e, product.id, product.name, user_id, dispatch)
                        : (e) => deleteFavourite(e, product.id, product.name, user_id, dispatch)
                        }>Favorite</button>
                         : null}
                     </div>
                    <br></br>
                    <div className='container-name'>
                        <p className='name-product-detail'>{product.name}</p>
                        {
                            score.length > 0 &&
                            <StarRating value={Math.round(score.reduce(reducer) / score.length)} />
                        }
                    </div>

                    <p className='price-product-detail'>
                        <span className='span-price-detail'>${product.price}</span>
                        <span className='span-thc-detail'>{product.thc ? `THC: ${product.thc}.mg` : `THC: 0.mg`}</span>
                        <span className='span-cbd-detail'>{product.cbd ? `CBD: ${product.cbd}.mg` : `CBD: 0.mg`}</span>
                    </p>

                    <hr className='hr-product-detail' />
                    {product && product.description ? <h5>{product.description}</h5> : <p>No description added</p>}

                    <div className={`stock-detail ${product.stock === 0 ? 'none' : (product.stock < 10 ? 'low' : '')}`}>{product.stock === 0 ? 'No stock' : (product.stock < 10 ? 'Low stock' : 'Stock')}</div>

                    {
                        product.stock > 0 ?
                            <button onClick={addCart} className='button button-add-cart-detail'>
                                <div className="svg-wrapper-1">
                                    <div className="svg-wrapper">
                                        <span className="material-symbols-outlined">add_shopping_cart</span>
                                    </div>
                                </div>
                                <div id="text-button-cart">Add</div>
                            </button>
                            :
                            !subscribe ? <button className='button' onClick={handleClickStock}>Notify Me</button>
                                :
                                <p><b><em>We let you know when this item is available!</em></b></p>
                    }
                </div>
                <div className="container-reviews">
                    {
                        reviews && reviews.length ?
                        <h2 className='mt-5'>Our clients opinion</h2>
                        : null
                    }
                </div>
                <div className="reviews">
                    <hr />
                    {
                        reviews && reviews.length > 1 ?
                        <Swiper className='mySwiper'
                            modules={[Pagination, A11y]}
                            scrollbar={{ draggable: true }}
                            slidesPerView={window.innerWidth > 450 ? 2 : 1}
                            autoplay={{ delay: 2000 }}
                            loop
                        >
                            {reviews && reviews.map((review,i) => {
                                return (
                                    <SwiperSlide key={i}>
                                        <Review
                                            name={review.name}
                                            score={review.score}
                                            review={review.review}
                                            key={review.id}
                                        />
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                        :
                        reviews && reviews.map((review) => {
                            return (
                                    <Review
                                        name={review.name}
                                        score={review.score}
                                        review={review.review}
                                        key={review.id}
                                    />
                            )
                        })
                    }
                </div>

            </div>

        </div>
    )
}