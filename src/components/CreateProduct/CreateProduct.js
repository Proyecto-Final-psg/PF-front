import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { createProduct } from '../../Redux/Actions';
import { useNavigate, } from 'react-router-dom'
import { Validator } from './helpers/Validator';
import Form from './Form/Form';
import Mockup from './Mockup/Mockup';
import ButtonBack from './ButtonBack/ButtonBack';
import './CreateProduct.scss'

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
            navigate(-1)
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
        <>
            <div className='create'>
                <ButtonBack 
                    button={'Create product'}
                />
                <div className='form-create'>
                    <Form 
                        handleInputChange={handleInputChange}
                        onSubmit={handleSubmit}
                        category={handleSelectCategories}
                        newCategory={handleClickCategory}
                        setNewCategory={setNewCategory}
                        localState={createProd}
                        setLocalState={setCreateProd}
                        error={error}
                        errorSubmit={errorSubmit}
                        state={state}
                        button={'Create'}
                    />
                    <Mockup 
                        localState={createProd}
                        handleDeleteCategory={handleDeleteCategory}
                    />
                </div>
            </div>
        </>
    )
}


export default CreateProduct