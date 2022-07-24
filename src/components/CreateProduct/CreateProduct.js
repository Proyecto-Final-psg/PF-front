
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { createProduct } from '../../Redux/Actions';
import { validator } from './helpers/Validator';
import Form from './Form/Form';
import Mockup from './Mockup/Mockup';
import ButtonBack from './ButtonBack/ButtonBack';
import './CreateProduct.scss'

const CreateProduct = () => {
    
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
    
    const [error, setError] = useState({})

    const handleInputChange = (e) => {
        setCreateProd({
            ...createProd,
            [e.target.name]: e.target.value,
        })
        setError(validator({
            ...createProd,
            [e.target.name]: e.target.value,
        }))
    }
    function handleSelectCategories(e) {
        setCreateProd({
            ...createProd,
            categories: [...createProd.categories, e.target.value],
        })
        setError(validator({
            ...createProd,
            categories: [...createProd.categories, e.target.value],
        }))
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
            
    }

    function handleDeleteCategory(e) {
        e.preventDefault();
        setCreateProd({
            ...createProd,
            categories: createProd.categories.filter(category => category !== e.target.name)
        });
    }

    const errorSubmit = Object.keys(error).length > 0 ? true : false;

    return (
        <>
            <div className='create'>
                <ButtonBack button={'Create product'}/>
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
                        handleDeleteCategory={handleDeleteCategory}
                    />
                    <Mockup 
                        localState={createProd}
                    />
                </div>
            </div>
        </>
    )
}


export default CreateProduct