import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getProductById } from '../../Redux/Actions'
import Card from '../Card/Card'
import './EditCard.scss'

export function EditCard(){

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {id} = useParams()
    const product = useSelector(store => store.product)
   
    const [prodName, setProdName] = useState(product.name)
    const [prodPrice, setProdPrice] = useState(product.price)

    useEffect(()=>{
        dispatch(getProductById(id))
        console.log(product)
    },[])

    function fillProdName(e){
        setProdName(e.target.value)
    }

    function fillProdPrice(e){
        setProdPrice(e.target.value)
    }

    

    return <div className='edit'>
        <div className="card-edit">
            <h1>{prodName}</h1>
            <h3>${prodPrice || 0}</h3>
            <hr />
            <img src="" alt="" />
            {/* <Card id='x' name={prodName} /> */}
            
        </div>

        <div className="">

        <button className='btn back' onClick={() => navigate(-1)}>
            <span class="material-symbols-outlined">keyboard_backspace</span>
        </button>

            <form>
                <label>Name</label><br />
                <input type="text" id='name' placeholder='Product name' onChange={fillProdName}/><br />
                
                <label>Price</label><br />
                <input type="text" id='name' placeholder='Product name' onChange={fillProdPrice}/><br />
                <input type="submit" value="Save" />
            </form>
        </div>
    </div>
}