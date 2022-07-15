import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { createProduct } from '../../Redux/Actions';
import './CreateProduct.scss'
import { useNavigate, } from 'react-router-dom'
import Form from './Form/Form';
import { Validator } from './helpers/Validator';


const CreateProduct = () => {
    const navigate = useNavigate()
    const state = useSelector(state => state.categories);
    const dispatch = useDispatch();
    const [newCategory, setNewCategory] = useState('')

    const [createProd, setCreateProd] = useState({
        name: '',
        stock: '',
        price: '',
        img: '',
        type: '',
        description: '',
        thc: '',
        cbd: '',
        categories: []
    })
//    console.log(createProd)

/*     const [error, setError] = useState({
        name: '',
        message: ''
    }) */

    const [error, setError] = useState({
        stateName: false,
        stateMessage: false,
        stateType: false,
        messageName: '',
        messageDescription: '',
        messageType: '',
    })

    const handleInputChange = (e) => {
        Validator(error, setError, e)
        setCreateProd({
            ...createProd,
            [e.target.name]: e.target.value,
        })
    }
    function handleSelectCategories(e) {
        setCreateProd({
            ...createProd,
            categories: [...createProd.categories, e.target.value],
        })
    }

    function handleClickCategory(e) {
        e.preventDefault()
        setCreateProd({
            ...createProd,
            categories: [...createProd.categories, newCategory],
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('submit')
        dispatch(createProduct(createProd))
        setCreateProd(
            {
                name: '',
                stock: '',
                price: '',
                img: '',
                type: '',
                description: '',
                thc: '',
                cbd: '',
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

    let errorSubmit = error.stateName === true || error.stateMessage === true || error.stateType === true;

    return (
        <div>

            <div className='create'>
                {/* <div className='title-edit'>
                    <button className='btn back' onClick={() => navigate(-1)}>
                        <span class="material-symbols-outlined">keyboard_backspace</span>
                    </button>
                    <h1 className='title-text'>Create Product</h1>
                </div> */}
                <div className='form-create'>
                    <Form 
                        handleInputChange={handleInputChange}
                        onSubmit={handleSubmit}
                        category={handleSelectCategories}
                        newCategory={handleClickCategory}
                        setNewCategory={setNewCategory}
                        createProd={createProd}
                        setCreateProd={setCreateProd}
                        error={error}
                        errorSubmit={errorSubmit}
                        state={state}
                    />
                
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
                            {createProd.categories?.map((categ, i) => <button className='btn_category' key={i} name={categ} onClick={(e) => handleDeleteCategory(e)}>{categ}</button>)}
                        </div>
                    </div>
                </div>
                

            </div>
        </div>
    )
}


export default CreateProduct