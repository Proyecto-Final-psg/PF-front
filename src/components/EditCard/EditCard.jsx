import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getProductById, editProduct } from '../../Redux/Actions'
import { Widget } from "@uploadcare/react-widget";

import './EditCard.scss'

export function EditCard() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { id } = useParams()
    const product = useSelector(store => store.product)
    const categories = useSelector(state => state.categories);
    const [newCategory, setNewCategory] = useState('')
    const [error, setError] = useState({
        stateName: false,
        stateMessage: false,
        messageName: '',
        messageDescription: ''
    })

    // const [prodName, setProdName] = useState(product.name)
    // const [prodPrice, setProdPrice] = useState(product.price)

    const [editedProduct, setEditProduct] = useState({
        name : product.name,
        stock : product.stock,
        price : product.price,
        img : product.img,
        type : product.type,
        description : product.description,
        thc : product.thc,
        cbd : product.cbd,
        categories : product.categories
    })

    const handleInputChange = (e) => {
        let cond_name = /^[aA-zZ ]{2,40}$/;
        let cond_description = /^[a-zA-Z\s/^[^&()&.&,]+$/;
        if (e.target.name === 'name' && cond_name.test(e.target.value) === true) {
            setError({
                ...error,
                stateName: false
            })
        }
        else if (e.target.name === 'name' && cond_name.test(e.target.value) === false) {
            setError({
                ...error,
                stateName: true,
                messageName: 'Invalid name of product'
            })
        }
        else if (e.target.name === 'description' && cond_description.test(e.target.value) === true) {
            setError({
                ...error,
                stateMessage: false
            })
        }
        else if (e.target.name === 'description' && cond_description.test(e.target.value) === false) {
            setError({
                ...error,
                stateMessage: true,
                messageDescription: 'No symbols allowed on description'
            })
        }

        setEditProduct({
            ...editedProduct,
            [e.target.name] : e.target.value
        })
    }

    function handleSelectCategories(e){
        // console.log(e.target.value)
         setEditProduct({
             ...editedProduct,
             categories: [...editedProduct.categories, e.target.value],
         })
     }

     function handleClickCategory(e){
        e.preventDefault()
        categoryFound = editedProduct.categories.find(a => a === e.target.value)
        setEditProduct({
            ...editedProduct,
            categories: categoryFound ? [...editedProduct.categories] : [...editedProduct.categories, e.target.value],
        })
    }

    function handleDeleteCategory(e){  
        e.preventDefault();
        setEditProduct({
           ...editedProduct,
           categories: editedProduct.categories.filter(category => category !== e.target.name)  
        });
     }

    function handleSubmit(e){
        e.preventDefault()
        dispatch(editProduct(id, editedProduct))
        alert(`el producto ${product.name} ha sido modificado`)
        setEditProduct({
            name : '',
            stock : 0,
            price : 0,
            type : '',
            description : '',
            thc : 0,
            cbd : 0,
            categories : []
      });
      navigate(-2)
    }

    

    useEffect(() => {
        dispatch(getProductById(id))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            <div className='create'>
                <div className='form-create'>
                    <div className='title-edit'>
                    <button className='btn back' onClick={() => navigate(-1)}>
                            <span class="material-symbols-outlined">keyboard_backspace</span>
                    </button>
                    <h1 className='title-text'>Edit Product</h1>

                    </div>
                    <form onSubmit={handleSubmit} className='create_form'>
                        
                        <label htmlFor='name'>
                            <span>Name: </span> 
                            {
                                <span className='error-message'>{error.stateName ? error.messageName : ''}</span>
                            }
                            <input className='field' type="text" value={editedProduct.name} placeholder='CBD-Aceite n12...' name='name' onChange={handleInputChange} />
                        </label>
                        <label htmlFor='stock'>
                            <span>Stock: </span> 
                            <input className='field' type="number" value={editedProduct.stock} placeholder='stock' name='stock' onChange={handleInputChange} />
                        </label>
                        <label htmlFor='price'>
                            <span>Price: </span> 
                            <input className='field' type="number" value={editedProduct.price} placeholder='50.3' name='price' step='0.01' onChange={handleInputChange} />
                        </label>
                        <label htmlFor='type'>
                            <span>Type: </span> 
                            <input className='field' type="text" value={editedProduct.type} placeholder='Oil...' name='type'  onChange={handleInputChange} />
                        </label>
                        <Widget
                            publicKey="269841dc43864e62c49d"
                            Clearable={true}
                            id="file"
                            name="photos"
                            onChange={(e) => {
                                setEditProduct({
                                    ...editedProduct,
                                    img: e.originalUrl
                                })
                            }}
                        />
                        {
                            <span className='error-message'>{error.stateMessage ? error.messageDescription : ''}</span>
                        }
                        <textarea className='field' name='description' value={editedProduct.description} type="text" placeholder="Description..." onChange={handleInputChange} />
                        <label htmlFor='thc'>
                            <span>Thc: </span> 
                            <input className='field input-cbd' min="0" max="100" type="number" value={editedProduct.thc} placeholder='thc' name='thc' step='0.01' onChange={handleInputChange} />
                            <span>mg</span>
                        </label>
                        <label htmlFor='cbd' >
                            <span>Cbd: </span>
                            <input className='field input-cbd' min="0" max="100" type="number" value={editedProduct.cbd} placeholder='cbd' name='cbd' step='0.01' onChange={handleInputChange} />
                            <span>mg</span>
                        </label>

                        <label htmlFor='categories'>
                            <select className='field' type='text' name='categories' onChange={handleSelectCategories} >
                                <option value="" disabled selected>Categories</option>
                                {
                                    categories?.map((c, i) => (
                                        <option value={c.category} key={i}>{c.category}</option>
                                    ))
                                }
                            </select>
                        <input className='field' type="text" placeholder='New Category...' onChange={(e) => setNewCategory(e.target.value)} name='categories'/>
                        <button onClick={handleClickCategory}>Ok</button>
                        </label>
                        <button type='submit'>Modify</button>
                    </form>

                </div>
            <div className='mockup-product'>
                <div className='img-create'>
                    {/* {createProd.img !== '' ?
                    <img src={createProd.img}  atl="alt4"/>
                : null    
                } */}
                    <textarea defaultValue={editedProduct.name} id='name' />

                    <textarea defaultValue={editedProduct.description} id='description' />

                    <h4>${editedProduct.price}</h4>7


                </div>
                <div className="buttons-categories">
                {editedProduct.categories?.map((categ, i) => <button key={i} name={categ} onClick={(e) => handleDeleteCategory(e)}>{categ}</button>)}
                </div>
            </div>
                  
            </div>
        </div>
    )
}