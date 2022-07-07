import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { getProductById } from '../../Redux/Actions'
import { Review } from '../Review/Review'
import './CardDetails.scss'

export function CardDetails(){
    
    const {id} = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const product = useSelector(store => store.product)
    
    useEffect(()=>{
        console.log('id', id)
        // dispatch(getProductById(id))
    },[])
    
    return <div className=''>
        

        <div className="detail">
            <div className="image">
                <img src="" alt="Product pic" />
            </div>
            <div className="description">
        <button className='btn back' onClick={() => navigate(-1)}>
            <span class="material-symbols-outlined">keyboard_backspace</span>
        </button>

            <NavLink to={`/products/edit/${id}`}>Edit</NavLink>
                <h1>{product.name}</h1>
                <hr />
                {product && product.description ? <h5>{product.description}</h5> : <p>No description added</p>}
                
                Stock: <span style={{fontWeight:"bold"}}>{product.stock}</span>

                <button>
                    <div class="svg-wrapper-1">
                        <div class="svg-wrapper">
                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M13.5 18c-.828 0-1.5.672-1.5 1.5 0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm-3.5 1.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm14-16.5l-.743 2h-1.929l-3.473 12h-13.239l-4.616-11h2.169l3.776 9h10.428l3.432-12h4.195zm-12 4h3v2h-3v3h-2v-3h-3v-2h3v-3h2v3z"/></svg>
                        </div>
                    </div>
                    <span>Add</span>
                    </button>
            </div>
            
            <h5 className='mt-5'>Reviews</h5>
        <div className="reviews">
            <hr />
            <Review />
            <Review />
            <Review />
            {/* {reviews && revies.map} */}
        </div>
        </div>

    </div>
}