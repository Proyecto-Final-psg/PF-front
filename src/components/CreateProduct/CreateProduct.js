import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { createProduct } from '../../Redux/Actions';
import './CreateProduct.scss'
import { Widget } from "@uploadcare/react-widget";
import { useNavigate, } from 'react-router-dom'
const CreateProduct = () => {
    const navigate = useNavigate()
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
    function handleSelectCategories(e) {
        // console.log(e.target.value)
        setCreateProd({
            ...createProd,
            categories: [...createProd.categories, e.target.value],
        })
    }

    function handleClickCategory(e) {
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
            {
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
        //  e.target.reset()
    }

    function handleDeleteCategory(e) {
        e.preventDefault();
        setCreateProd({
            ...createProd,
            categories: createProd.categories.filter(category => category !== e.target.name)
        });
    }

    let errorSubmit = error.stateName === true || error.stateMessage === true;

    return (
        <div>

            <div className='title-edit'>
                <button className='btn back' onClick={() => navigate(-1)}>
                    <span className="material-symbols-outlined">keyboard_backspace</span>
                </button>
                <h1 className='title-text'>Create Product</h1>
            </div>
            <div className='create'>
                <div className='form-create'>
                    <form onSubmit={handleSubmit} className='create_form'>
                        <div className='input_container'>
                        <label htmlFor='name'>Name: </label>
                            <span className='error-message'>{error.stateName ? error.messageName : ''}</span>
                            <input className={`input is-small is-hovered ${error.stateName ? 'is-danger' : 'is-success'}`} type="text" value={createProd.name} placeholder='CBD-Aceite n12...' name='name' onChange={handleInputChange} autoComplete='off'/>
                        </div>
                        <div className='input_container'>
                        <label htmlFor='stock'>Stock: </label>
                            <input className='input is-small is-hovered is-success' type="number" value={createProd.stock} placeholder='stock' name='stock' onChange={handleInputChange} />
                        </div>
                        <div className='input_container'>
                        <label htmlFor='price'>Price: </label>
                            <input className='input is-small is-hovered is-success' type="number" value={createProd.price} placeholder='50.3' step='0.01' name='price' onChange={handleInputChange} />
                        </div>
                        <div className='input_container'>
                        <label htmlFor='type'>Type: </label>
                            <input className='input is-small is-hovered is-success' type="text" value={createProd.type} placeholder='Oil...' name='type' onChange={handleInputChange} autoComplete='off'/>
                        </div>
                        <div className='input_container'>
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
                        </div>
                        <div className='input_container'>
                            <span className='error-message_textarea'>{error.stateMessage ? error.messageDescription : ''}</span>
                            <textarea className={`textarea is-small is-hovered ${error.stateMessage ? 'is-danger' : 'is-success'}`} name='description' value={createProd.description} type="text" placeholder="Description..." onChange={handleInputChange} />
                        </div>
                        <div className='input_container'>
                        <label htmlFor='thc'>Thc:</label>
                            <input className='input is-small is-hovered is-success' min="0" max="100" type="number" value={createProd.thc} placeholder='thc' name='thc' step='0.01' onChange={handleInputChange} />
                        </div>
                        <div className='input_container'>
                            <label htmlFor='cbd' >Cbd:</label>
                                <input className='input is-small is-hovered is-success' min="0" max="100" type="number" value={createProd.cbd} placeholder='cbd' name='cbd' step='0.01' onChange={handleInputChange} />
                        </div>
                        <div className='select is-small is-success'>
                            <select className='field' type='text' name='categories' onChange={handleSelectCategories} >
                                <option value="" disabled selected>Categories</option>
                                {
                                    state?.map((c, i) => (
                                        <option value={c.category} key={i}>{c.category}</option>
                                    ))
                                }
                            </select>
                        </div>
                            <div className='input_container'>
                                <input className='input is-small is-success' type="text" placeholder='New Category...' onChange={(e) => setNewCategory(e.target.value)} name='categories' />
                                <button className='btn_category' onClick={handleClickCategory}>Add</button>
                            </div>
                        <button className='btn_create' type='submit' disabled={errorSubmit}>Create</button>
                    </form>
                
                    <div className='mockup-product'>
                        <div className='img-create'>
                            <textarea className='img-create_title' defaultValue={createProd.name} id='name' />
                            {console.log(createProd.img)}
                            {
                                createProd.img !== '' ?
                                    <img src={createProd.img} alt="alt4" />
                                    : null
                            }
                            <textarea defaultValue={createProd.description} id='description' />
                            <h4>${createProd.price}</h4>

                        </div>
                        <div className="buttons-categories">
                            {createProd.categories?.map((categ, i) => <button key={i} name={categ} onClick={(e) => handleDeleteCategory(e)}>{categ}</button>)}
                        </div>
                    </div>
                </div>
                

            </div>
        </div>
    )
}


export default CreateProduct