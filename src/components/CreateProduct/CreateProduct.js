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

    const [createProd, setCreateProd] = useState({
        name: '',
        stock: 0,
        price: 0,
        img: '',
        type: '',
        description: '',
        thc: 0,
        cbd: 0,
        categories: ''
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
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createProduct(createProd)) 
        e.target.reset()
    }

    return (
        <div>
            <div className='create'>
                <div className='form-create'>
                    <h1>Create Product</h1>
                    <form onSubmit={handleSubmit} className='create_form'>
                        <label htmlFor='name'>
                            {
                                <span className='error-message'>{error.stateName ? error.messageName : ''}</span>
                            }
                            <input className='field' type="text" value={createProd.name} placeholder='name' name='name' onChange={handleInputChange} />
                        </label>
                        <label htmlFor='stock'>
                            <input className='field' type="number" value={createProd.stock} placeholder='stock' name='stock' onChange={handleInputChange} />
                        </label>
                        <label htmlFor='price'>
                            <input className='field' type="number" value={createProd.price} placeholder='price' name='price' step='0.01' onChange={handleInputChange} />
                        </label>
                        <label htmlFor='type'>
                            <select className='field' type='text' name='type' onChange={handleInputChange} >
                                <option value="">type</option>
                            </select>
                        </label>
                        <Widget
                            publicKey="269841dc43864e62c49d"
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
                        <textarea className='field' name='description' value={createProd.description} type="text" placeholder="description" onChange={handleInputChange} />
                        <label htmlFor='thc'>
                            <input className='field' type="number" value={createProd.thc} placeholder='thc' name='thc' step='0.01' onChange={handleInputChange} />
                        </label>
                        <label htmlFor='cbd'>
                            <input className='field' type="number" value={createProd.cbd} placeholder='cbd' name='cbd' step='0.01' onChange={handleInputChange} />
                        </label>
                        <label htmlFor='categories'>
                            <select className='field' type='text' name='categories' onChange={handleInputChange} >
                                <option value="">categories</option>
                                {
                                    state?.map((c, i) => (
                                        <option value={c.category} key={i}>{c.category}</option>
                                    ))
                                }
                            </select>
                        </label>
                        <button type='submit'>Crear</button>
                    </form>

                </div>

                <div className='img-create'>
                    <textarea defaultValue={createProd.name} id='name' />

                    <textarea defaultValue={createProd.description} id='description' />

                    <h4>${createProd.price}</h4>

                </div>
            </div>
        </div>
    )
}


export default CreateProduct