import './grid.scss'
import Card from "../Card/Card";
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getAllCategories, getAllProducts, getProductByName, orderProductsCbd, orderProductsPrice, orderProductsThc, filterByCategory } from '../../Redux/Actions';
import { Paginator } from '../Paginator/Paginator';
import { useState } from 'react';
import { Cards } from '../Cards/Cards';
import { API_URL, GET_ALL_PRODUCTS } from '../../Redux/Constants';


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
    const [azOrZaCBD, setAzOrZaCBD] = useState('az')
    const [azOrZaTHC, setAzOrZaTHC] = useState('az')
    const [azOrZaPrice, setAzOrZaPrice] = useState('az')
    const [searchProd, setSearchProd] = useState('')
    const indexOfLastPost = currentPage * itemsPerPage;
    const indexOfFirstPost = indexOfLastPost - itemsPerPage;
    let currentPosts = null;
    currentPosts = allProducts.slice(indexOfFirstPost, indexOfLastPost).sort(compare)

    useEffect(() => {
        dispatch(getAllCategories())
        dispatch(getAllProducts())
        console.log()
        // console.log('redux products ', allProducts)
    }, [])

    const paginate = (pageNumber) => {
        if (pageNumber > 0 && pageNumber < 26) {
            console.log('page', pageNumber)
            setCurrentPage(pageNumber)
        }
    }

    function orderMinorToMaxCbd(){
        setAzOrZaTHC('az')
        setAzOrZaPrice('az')
        if(azOrZaCBD === 'az') 
            setAzOrZaCBD('za') 
        else 
            setAzOrZaCBD('az')

        dispatch(orderProductsCbd(allProducts, azOrZaCBD))
    }

    function orderMinorToMaxThc(){
        setAzOrZaCBD('az')
        setAzOrZaPrice('az')
        if(azOrZaTHC === 'az') 
            setAzOrZaTHC('za') 
        else 
            setAzOrZaTHC('az')

        dispatch(orderProductsThc(allProducts, azOrZaTHC))
        
    }

    function orderByPrice(){
        setAzOrZaCBD('az')
        setAzOrZaTHC('az')
        if(azOrZaPrice === 'az') 
            setAzOrZaPrice('za') 
        else 
            setAzOrZaPrice('az')

        dispatch(orderProductsPrice(allProducts, azOrZaPrice))
    }

    function fillProdSearch(e){
        setSearchProd(e.target.value)
    }

    function productsByName(e){
        e.preventDefault()
        // dispatch(getAllProducts())
        dispatch(getProductByName(searchProd.toLowerCase()))
    }

    function handleFilterCategory(e){
        dispatch(filterByCategory(e.target.value))
    }

    function resetFilters(){
        dispatch(getAllProducts())
    }
          

    return <div className="grid">
        <div className="filters">
            <span>filters</span>
            <form className='form' onSubmit={productsByName}>
                <label>Name</label><br />
                <input type="text" name="name" id="name" placeholder='Enter name product' onChange={fillProdSearch}/><br /><br />

                <label>Category</label><br />
                <select name="category" id="" onChange={handleFilterCategory}>
                    <option value="all" key='all'>All Categories</option>
                    {allCategories && allCategories.map(c => <option key={c.id} value={c.category}>{c.category}</option>)}
                </select>
                <br /><br />

                <input type="submit" value="Search" />


            </form>
            
           
            <span>Order by</span>
            <ul>
                
                <li>
                        <button onClick={orderMinorToMaxCbd}>
                            {azOrZaCBD === 'az' 
                            ? <>CBD <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 22l6-8h-4v-12h-4v12h-4l6 8zm12.43-4.814v-.934c.352-.015 1.901.029 1.901-1.232h1.146v6.98h-1.407v-4.814h-1.64zm-.927-14.097c.646-.694 1.647-1.089 2.666-1.089 1.319 0 2.667.663 3.311 2.194.346.824.52 1.907.52 3.251 0 3.048-.947 5.757-3.994 5.757-1.606 0-3.099-.968-3.288-2.812h2.112c.099.628.542 1.071 1.272 1.071 1.445 0 1.693-1.601 1.763-3.027-1.033 1.299-3.106 1.15-4.366.026-1.388-1.238-1.291-3.98.004-5.371zm3.566 4.282c.481-.308.722-.841.722-1.599 0-.61-.143-1.093-.428-1.451-.285-.357-.676-.536-1.172-.536-.362 0-.671.102-.93.305-.406.317-.609.855-.609 1.614 0 .64.13 1.119.391 1.439.26.32.66.48 1.201.48.293.001.568-.084.825-.252z"/></svg></> 
                            : <>CBD <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 22l6-8h-4v-12h-4v12h-4l6 8zm13.936-6.323c.929-.998 3.024-1.006 3.737.691.212.503.319 1.217.327 1.944.008.774-.098 1.563-.313 2.129-.398 1.04-1.125 1.559-2.186 1.559-1.005 0-1.938-.605-2.056-1.758h1.32c.062.392.339.67.795.67.904 0 1.06-1.002 1.104-1.893-.63.79-1.915.743-2.73.016-.869-.774-.807-2.488.002-3.358zm2.23 2.677c.599-.383.547-1.452.184-1.907-.336-.42-.963-.421-1.314-.144-.512.399-.466 1.505-.137 1.909.269.331.866.404 1.267.142zm-4.166-12.879v-1.498c.565-.025 3.163.046 3.163-1.977h1.837v11h-2.255v-7.525h-2.745z"/></svg></>
                            }
                        </button>
                </li>

                <li>
                        <button onClick={orderMinorToMaxThc}>
                            {azOrZaTHC === 'az' 
                                                        ? <>THC <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 22l6-8h-4v-12h-4v12h-4l6 8zm12.43-4.814v-.934c.352-.015 1.901.029 1.901-1.232h1.146v6.98h-1.407v-4.814h-1.64zm-.927-14.097c.646-.694 1.647-1.089 2.666-1.089 1.319 0 2.667.663 3.311 2.194.346.824.52 1.907.52 3.251 0 3.048-.947 5.757-3.994 5.757-1.606 0-3.099-.968-3.288-2.812h2.112c.099.628.542 1.071 1.272 1.071 1.445 0 1.693-1.601 1.763-3.027-1.033 1.299-3.106 1.15-4.366.026-1.388-1.238-1.291-3.98.004-5.371zm3.566 4.282c.481-.308.722-.841.722-1.599 0-.61-.143-1.093-.428-1.451-.285-.357-.676-.536-1.172-.536-.362 0-.671.102-.93.305-.406.317-.609.855-.609 1.614 0 .64.13 1.119.391 1.439.26.32.66.48 1.201.48.293.001.568-.084.825-.252z"/></svg></> 
                                                        : <>THC <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 22l6-8h-4v-12h-4v12h-4l6 8zm13.936-6.323c.929-.998 3.024-1.006 3.737.691.212.503.319 1.217.327 1.944.008.774-.098 1.563-.313 2.129-.398 1.04-1.125 1.559-2.186 1.559-1.005 0-1.938-.605-2.056-1.758h1.32c.062.392.339.67.795.67.904 0 1.06-1.002 1.104-1.893-.63.79-1.915.743-2.73.016-.869-.774-.807-2.488.002-3.358zm2.23 2.677c.599-.383.547-1.452.184-1.907-.336-.42-.963-.421-1.314-.144-.512.399-.466 1.505-.137 1.909.269.331.866.404 1.267.142zm-4.166-12.879v-1.498c.565-.025 3.163.046 3.163-1.977h1.837v11h-2.255v-7.525h-2.745z"/></svg></>
                        }
                        </button>
                </li>
                
                <li>
                <button onClick={orderByPrice}>
                            {azOrZaPrice === 'az' 
                                                        ? <>$ <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 22l6-8h-4v-12h-4v12h-4l6 8zm12.43-4.814v-.934c.352-.015 1.901.029 1.901-1.232h1.146v6.98h-1.407v-4.814h-1.64zm-.927-14.097c.646-.694 1.647-1.089 2.666-1.089 1.319 0 2.667.663 3.311 2.194.346.824.52 1.907.52 3.251 0 3.048-.947 5.757-3.994 5.757-1.606 0-3.099-.968-3.288-2.812h2.112c.099.628.542 1.071 1.272 1.071 1.445 0 1.693-1.601 1.763-3.027-1.033 1.299-3.106 1.15-4.366.026-1.388-1.238-1.291-3.98.004-5.371zm3.566 4.282c.481-.308.722-.841.722-1.599 0-.61-.143-1.093-.428-1.451-.285-.357-.676-.536-1.172-.536-.362 0-.671.102-.93.305-.406.317-.609.855-.609 1.614 0 .64.13 1.119.391 1.439.26.32.66.48 1.201.48.293.001.568-.084.825-.252z"/></svg></> 
                                                        : <>$ <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 22l6-8h-4v-12h-4v12h-4l6 8zm13.936-6.323c.929-.998 3.024-1.006 3.737.691.212.503.319 1.217.327 1.944.008.774-.098 1.563-.313 2.129-.398 1.04-1.125 1.559-2.186 1.559-1.005 0-1.938-.605-2.056-1.758h1.32c.062.392.339.67.795.67.904 0 1.06-1.002 1.104-1.893-.63.79-1.915.743-2.73.016-.869-.774-.807-2.488.002-3.358zm2.23 2.677c.599-.383.547-1.452.184-1.907-.336-.42-.963-.421-1.314-.144-.512.399-.466 1.505-.137 1.909.269.331.866.404 1.267.142zm-4.166-12.879v-1.498c.565-.025 3.163.046 3.163-1.977h1.837v11h-2.255v-7.525h-2.745z"/></svg></>
                            }
                        </button>
                </li>
                
            </ul>
            <button onClick={resetFilters}>Reset filters</button>
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