import './grid.scss'
import Card from "../Card/Card";
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getAllCategories, getAllProducts, getProductByName } from '../../Redux/Actions';
import { Paginator } from '../Paginator/Paginator';
import { useState } from 'react';
import { Cards } from '../Cards/Cards';

function Grid() {

    useEffect(() => {
        dispatch(getAllCategories())
        dispatch(getAllProducts())
        dispatch(getProductByName())
    }, [])
    
    const dispatch = useDispatch()
    const allProducts = useSelector(store => store.products)
    const allCategories = useSelector(store => store.categories)
    const searchProducts = useSelector(store => store.productsByName)

    function compare(a, b) {
        if (a.last_nom < b.last_nom) {
            return -1;
        }
        if (a.last_nom > b.last_nom) {
            return 1;
        }
        return 0;
    }

    //PAGINATOR
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage, setItemsPerPage] = useState(6)
    const indexOfLastPost = currentPage * itemsPerPage;
    const indexOfFirstPost = indexOfLastPost - itemsPerPage;
    let currentPosts = null;
    currentPosts = searchProducts.length > 0 ? searchProducts.slice(indexOfFirstPost, indexOfLastPost).sort(compare) : allProducts.slice(indexOfFirstPost, indexOfLastPost).sort(compare)
    const paginate = (pageNumber) => {
        if (pageNumber > 0 && pageNumber < 26) {
            console.log('page', pageNumber)
            setCurrentPage(pageNumber)
        }
    }



    function handleInput(e) {
        e.preventDefault()
        dispatch(getProductByName(e.target.value))
        console.log(searchProducts)
        console.log(e.target.value)
    }

    return <div className="grid">
        <div className="filters">
            <span>filters</span>
            <form className='form'>
                <label>Name</label><br />
                <input type="input" name="name" id="name" placeholder='Enter name product' onChange={handleInput} /><br /><br />
                <label>Category</label><br />
                <select name="category" id="">
                    <option value="all" key='all'>All Categories</option>
                    {allCategories && allCategories.map(c => <option key={c.id} value={c.category}>{c.category}</option>)}
                </select>
                <br /><br />
            </form>
        </div>

        <div className="cards">

            <Paginator postsPerPage={itemsPerPage} totalPosts={searchProducts.length > 0 ? searchProducts.length: allProducts.length} paginate={paginate} currentPage={currentPage} />
            <Cards items={currentPosts} />
            {/* 
            {allProducts && allProducts.map((p, i) => 
            <Card key={i} 
            name={p.name} 
            id={p.id}
            img={p.img}
             description={p.description}
             price={p.price}
             stock={p.stock}

             
             />)} */}

        </div>
    </div>
}
export default Grid