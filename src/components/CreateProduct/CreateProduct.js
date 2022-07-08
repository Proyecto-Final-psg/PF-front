import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { createProduct } from '../../Redux/Actions';
import './CreateProduct.scss'

const CreateProduct = () => {

    const state = useSelector( state => state.categories );
    const dispatch = useDispatch();

    const [ createProd, setCreateProd ] = useState({
        name:'',
        stock: 0,
        price: '',
        img: '',
        type: '',
        description: '',
        thc: '',
        cbd: '',
        categories: []
    })

    const handleInputChange = (e) => {
        setCreateProd({
            ...createProd,
            [e.target.name]: e.target.value
        })
    }
    console.log(createProd)
    
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch( createProduct(createProd) )
    }

    return (
        <div className='create'>
            <h1>Create Product</h1>

            <form onSubmit={handleSubmit} className='create_form'>
                <label htmlFor='name'>
                    <input type="text" value={createProd.name} placeholder='name' name='name' onChange={handleInputChange} />
                </label>
                <label htmlFor='stock'>
                    <input type="number" value={createProd.stock} placeholder='stock' name='stock' onChange={handleInputChange} />
                </label>
                <label htmlFor='price'>
                    <input type="number" value={createProd.price} placeholder='price' name='price' onChange={handleInputChange} />
                </label>
                <label htmlFor='type'>
                    <select className='select' type='text' name='type' onChange={handleInputChange} >
                        <option value="">type</option>
                    </select>
                </label>
                <textarea name='description' value={createProd.description} type="text" placeholder="description" onChange={handleInputChange} />
                <label htmlFor='thc'>
                    <input type="number" value={createProd.thc} placeholder='thc' name='thc' onChange={handleInputChange} />
                </label>
                <label htmlFor='cbd'>
                    <input type="number" value={createProd.cbd} placeholder='cbd' name='cbd' onChange={handleInputChange} />
                </label>
                <label htmlFor='categories'>
                    <select className='select' type='text' name='categories' onChange={handleInputChange} >
                        <option value="">categories</option>
                        {
                            state?.map( c => (
                                <option value={c} key={c}>{c}</option>
                            ) )
                        }
                    </select>
                </label>
                <button type='submit'>Crear</button>
            </form>
        </div>
    )
}


export default CreateProduct