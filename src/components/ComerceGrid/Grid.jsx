import './grid.scss'
import Card from "../Card/Card";
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getAllCategories, getAllProducts } from '../../Redux/Actions';
import { Paginator } from '../Paginator/Paginator';
import { useState } from 'react';
import { Cards } from '../Cards/Cards';

function Grid() {
    const allProducts = useSelector(store => store.products)
    const allCategories = useSelector(store => store.categories)
    
    const dispatch = useDispatch()

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
    currentPosts = allProducts.slice(indexOfFirstPost, indexOfLastPost).sort(compare)

    useEffect(() => {
        dispatch(getAllCategories())
        dispatch(getAllProducts())
        // console.log('redux products ', allProducts)
    }, [])

    const paginate = (pageNumber) => {
        if (pageNumber > 0 && pageNumber < 26) {
            console.log('page', pageNumber)
            setCurrentPage(pageNumber)
        }
    }

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

            <Paginator postsPerPage={itemsPerPage} totalPosts={allProducts.length} paginate={paginate} currentPage={currentPage} />
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