import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { createProduct } from '../../Redux/Actions';
import './CreateProduct.scss'
import { Widget } from "@uploadcare/react-widget";

const CreateProduct = () => {

    const state = useSelector(state => state.categories);
    const dispatch = useDispatch();
    const [newCategory, setNewCategory] = useState('')

    const [createProd, setCreateProd] = useState({
        name: '',
        stock: 0,
        price: 0,
        img: '',
        type: '',
        description: '',
        thc: 0,
        cbd: 0,
        categories: []
    })
    //console.log(createProd)

    const [error, setError] = useState({
        stateName: false,
        stateMessage: false,
        messageName: '',
        messageDescription: ''
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

        setCreateProd({
            ...createProd,
            [e.target.name]: e.target.value,
        })
    }
    function handleSelectCategories(e){
       // console.log(e.target.value)
        setCreateProd({
            ...createProd,
            categories: [...createProd.categories, e.target.value],
        })
    }

    function handleClickCategory(e){
        e.preventDefault()
       // console.log(e.target.value)
        setCreateProd({
            ...createProd,
            categories: [...createProd.categories, newCategory],
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createProduct(createProd)) 
        setCreateProd(
           {name: '',
            stock: 0,
            price: 0,
            img: '',
            type: '',
            description: '',
            thc: 0,
            cbd: 0,
            categories: []
        })
      //  e.target.reset()
    }

    function handleDeleteCategory(e){  
        e.preventDefault();
        setCreateProd({
           ...createProd,
           categories: createProd.categories.filter(category => category !== e.target.name)  
        });
     }

    return (
        <div>
            <div className='create'>
                <div className='form-create'>
                    <h1>Create Product</h1>
                    <form onSubmit={handleSubmit} className='create_form'>
                        <label htmlFor='name'>
                            <span>Name: </span> 
                            {
                                <span className='error-message'>{error.stateName ? error.messageName : ''}</span>
                            }
                            <input className='field' type="text" value={createProd.name} placeholder='CBD-Aceite n12...' name='name' onChange={handleInputChange} />
                        </label>
                        <label htmlFor='stock'>
                            <span>Stock: </span> 
                            <input className='field' type="number" value={createProd.stock} placeholder='stock' name='stock' onChange={handleInputChange} />
                        </label>
                        <label htmlFor='price'>
                            <span>Price: </span> 
                            <input className='field' type="number" value={createProd.price} placeholder='50.3' name='price' step='0.01' onChange={handleInputChange} />
                        </label>
                        <label htmlFor='type'>
                            <span>Type: </span> 
                            <input className='field' type="text" value={createProd.type} placeholder='Oil...' name='type'  onChange={handleInputChange} />
                        </label>
                        <Widget
                            publicKey="269841dc43864e62c49d"
                            Clearable={true}
                            id="file"
                            name="photos"
                            onChange={(e) => {
                                setCreateProd({
                                    ...createProd,
                                    img: e.originalUrl
                                })
                            }}
                        />
                        {
                            <span className='error-message'>{error.stateMessage ? error.messageDescription : ''}</span>
                        }
                        <textarea className='field' name='description' value={createProd.description} type="text" placeholder="Description..." onChange={handleInputChange} />
                        <label htmlFor='thc'>
                            <span>Thc: </span> 
                            <input className='field input-cbd' min="0" max="100" type="number" value={createProd.thc} placeholder='thc' name='thc' step='0.01' onChange={handleInputChange} />
                            <span>mg</span>
                        </label>
                        <label htmlFor='cbd' >
                            <span>Cbd: </span>
                            <input className='field input-cbd' min="0" max="100" type="number" value={createProd.cbd} placeholder='cbd' name='cbd' step='0.01' onChange={handleInputChange} />
                            <span>mg</span>
                        </label>

                        <label htmlFor='categories'>
                            <select className='field' type='text' name='categories' onChange={handleSelectCategories} >
                                <option value="" disabled selected>Categories</option>
                                {
                                    state?.map((c, i) => (
                                        <option value={c.category} key={i}>{c.category}</option>
                                    ))
                                }
                            </select>
                        <input className='field' type="text" placeholder='New Category...' onChange={(e) => setNewCategory(e.target.value)} name='categories'/>
                        <button onClick={handleClickCategory}>Ok</button>
                        </label>
                        <button type='submit'>Crear</button>
                    </form>

                </div>
            <div className='mockup-product'>
                <div className='img-create'>
                    {/* {createProd.img !== '' ?
                    <img src={createProd.img}  atl="alt4"/>
                : null    
                } */}
                    <textarea defaultValue={createProd.name} id='name' />

                    <textarea defaultValue={createProd.description} id='description' />

                    <h4>${createProd.price}</h4>7


                </div>
                <div className="buttons-categories">
                {createProd.categories?.map((categ, i) => <button key={i} name={categ} onClick={(e) => handleDeleteCategory(e)}>{categ}</button>)}
                </div>
            </div>
                  
            </div>
        </div>
    )
}


export default CreateProduct