
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { createProduct } from '../../Redux/Actions';
import { validator } from './helpers/Validator';
import Form from './Form/Form';
import Mockup from './Mockup/Mockup';
import ButtonBack from './ButtonBack/ButtonBack';
import swal from 'sweetalert'
import './CreateProduct.scss'

const CreateProduct = () => {

    const state = useSelector(state => state.categories);
    const navigate = useNavigate()
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
        let categoryFound = createProd.categories.find(a => a === e.target.value)
        if(!categoryFound){
           setCreateProd({
            ...createProd,
            categories: [...createProd.categories, e.target.value],
            })
            setError(validator({
                ...createProd,
                categories: [...createProd.categories, e.target.value],
            })) 
        }
        
    }

    function handleClickCategory(e) {
        e.preventDefault()
        let categoryFound = createProd.categories.find(a => a === newCategory)
        if(!categoryFound) {
            setCreateProd({
            ...createProd,
            categories: [...createProd.categories, newCategory],
            })
        }
        
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
        swal({
            title: `Product created succesfully!`,
            icon: "success",
            button: 'Ok'
        }).then(function (isConfirm) {
            if (isConfirm) {
                navigate('/home')
            }
        })
    }

    function handleDeleteCategory(e) {
        e.preventDefault();
        setCreateProd({
            ...createProd,
            categories: createProd.categories.filter(category => category !== e.target.name)
        });
    }

    return (
        <>
            <div className='create'>
                <ButtonBack button={'Create product'} />
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