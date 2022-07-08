import './grid.scss'
import Card from "../Card/Card";
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getAllCategories, getAllProducts, searchProductByName } from '../../Redux/Actions';

function Grid() {
    const allProducts = useSelector(store => store.products)
    const allCategories = useSelector(store => store.categories)
    const dispatch = useDispatch()

    const [searchFilter, setSearchFilter] = useState('')
    
    useEffect(() => {
        dispatch(getAllCategories())
        dispatch(getAllProducts())
        // console.log('redux products ', allProducts)
    }, [])

    useEffect(()=>{
        console.log(searchFilter)
    },[searchFilter])

    function fillSearchFilter(e){
        setSearchFilter({ 
            ...searchFilter,           
            [e.target.name]: e.target.value
        })
    }

    function SearchProduct(e){
        e.preventDefault()

        console.log('searching',searchFilter)
        if(searchFilter.name){
            console.log('entre')
            dispatch(searchProductByName(searchFilter))
        }

        if(searchFilter.name === '' && searchFilter.category === '')
            dispatch(getAllProducts())
    }

    return <div className="grid">
        <div className="filters">
            <span>Search</span>
            <form className='form' onSubmit={SearchProduct}> 
                <label>Name</label><br />
                <input type="text" name="name" id="name" placeholder='Enter name product' onChange={fillSearchFilter} /><br /><br />

                <label>Category</label><br />
                <select name="category" id="" onChange={fillSearchFilter}>
                    <option value="all" key='all'>All Categories</option>
                    <option value="aceitito" key='aceitito'>Aceitito</option>
                    {allCategories && allCategories.map(c => <option key={c.id} value={c.category}>{c.category}</option>)}
                </select>
                <br /><br />

                <input type="submit" value="Search" />

            </form>
        </div>

        <div className="cards">
            {allProducts && allProducts.map((p, i) => 
            <Card key={i} 
                name={p.name} 
                id={p.id}
                img={p.img}
                description={p.description}
                price={p.price}
                stock={p.stock}
             />)}

        </div>
    </div>
}
export default Grid