import './grid.scss'
import Card from "../Card/Card";
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { getAllProducts } from '../../Redux/Actions';

function Grid() {

    const allProducts = useSelector(store => store.products)
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(getAllProducts())
        console.log('redux products ',allProducts)
    },[])

    return <div className="grid">
        <div className="filters">
            <span>filters</span>
            <form className='form'>
                <label>Name</label><br />
                <input type="text" name="name" id="name" placeholder='Enter name product' /><br /><br />

                <label>Category</label><br />
                <select name="category" id="">
                    <option value="all">All categories</option>
                </select>
                <br /><br />

                <input type="submit" value="Search" />


            </form>
        </div>

        <div className="cards">
            {allProducts && allProducts.map( p => <Card name={p.name} />)}

            
        </div>
    </div>
}
export default Grid