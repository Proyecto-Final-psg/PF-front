import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getProductById } from '../../Redux/Actions'
import './CardDetails.scss'

export function CardDetails(){
    
    const {id} = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const product = useSelector(store => store.product)
    
    useEffect(()=>{
        console.log('id', id)
        dispatch(getProductById(id))
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
                <h1>{product.name}</h1>
                <hr />
                {product && product.description ? <h5>{product.description}</h5> : <p>No description added</p>}
                
                Stock: <span style={{fontWeight:"bold"}}>{product.stock}</span>
            </div>
        </div>
    </div>
}