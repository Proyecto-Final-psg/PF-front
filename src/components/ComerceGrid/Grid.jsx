import './grid.scss'
import Card from "../Card/Card";
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getAllCategories, getAllProducts } from '../../Redux/Actions';

function Grid() {
    const allProducts = useSelector(store => store.products)
    const allCategories = useSelector(store => store.categories)
    const dispatch = useDispatch()
    useEffect(() => {
        // dispatch(getAllCategories())
        // dispatch(getAllProducts())
        // console.log('redux products ', allProducts)
    }, [])

    return <div className="grid">
        <div className="filters">
            <span>filters</span>
            <form className='form'>
                <label>Name</label><br />
                <input type="text" name="name" id="name" placeholder='Enter name product' /><br /><br />

                <label>Category</label><br />
                <select name="category" id="">
                    <option value="all" key='all'>All Categories</option>
                    {allCategories && allCategories.map(c => <option key={c.id} value={c.category}>{c.category}</option>)}
                </select>
                <br /><br />

                <input type="submit" value="Search" />


            </form>
        </div>

        <div className="cards">
            {allProducts && allProducts.map((p, i) => <Card key={i} name={p.name} id={p.id} />)}


        </div>
    </div>
}
export default Grid