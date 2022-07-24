import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getProductById, editProduct } from '../../Redux/Actions'
import { validator } from '../CreateProduct/helpers/validator'
import Form from '../CreateProduct/Form/Form'
import Mockup from '../CreateProduct/Mockup/Mockup'
import ButtonBack from '../CreateProduct/ButtonBack/ButtonBack'
import './EditCard.scss'

export function EditCard() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { id } = useParams()
    const product = useSelector(store => store.product)
    const categories = useSelector(state => state.categories);
    // const [newCategory, setNewCategory] = useState('')
    const [error, setError] = useState({
        stateName: false,
        stateMessage: false,
        stateType: false,
        messageName: '',
        messageDescription: '',
        messageType: ''
    })

    const [editedProduct, setEditProduct] = useState({
        name: product.name,
        stock: product.stock,
        price: product.price,
        img: product.img,
        type: product.type,
        description: product.description,
        thc: product.thc,
        cbd: product.cbd,
        categories: product.categories
    })

    const handleInputChange = (e) => {
       
        setEditProduct({
            ...editedProduct,
            [e.target.name]: e.target.value
        })
        setError(validator({
            ...editedProduct,
            [e.target.name]: e.target.value,
        }))
    }

    function handleSelectCategories(e) {
        setEditProduct({
            ...editedProduct,
            categories: [...editedProduct.categories, e.target.value],
        })
        setError(validator({
            ...editedProduct,
            categories: [...editedProduct.categories, e.target.value],
        }))
    }

    function handleClickCategory(e) {
        e.preventDefault()
        let categoryFound = editedProduct.categories.find(a => a === e.target.value)
        setEditProduct({
            ...editedProduct,
            categories: categoryFound ? [...editedProduct.categories] : [...editedProduct.categories, e.target.value],
        })
    }

    function handleDeleteCategory(e) {
        e.preventDefault();
        setEditProduct({
            ...editedProduct,
            categories: editedProduct.categories.filter(category => category !== e.target.name)
        });
    }

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(editProduct(id, editedProduct))
        setEditProduct({
            name: '',
            stock: 0,
            price: 0,
            type: '',
            description: '',
            thc: 0,
            cbd: 0,
            categories: []
        });
        navigate(-2)
    }



    useEffect(() => {
        dispatch(getProductById(id))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(()=>{
        return () => {setEditProduct(null)}
    },[])

    let errorSubmit = error.stateName === true || error.stateMessage === true || error.stateType === true;

    return (
        <>
            <div className='create'>
                <ButtonBack 
                    button={'Edit product'}
                />
                <div className='form-create'>
                    <Form
                        handleInputChange={handleInputChange}
                        onSubmit={handleSubmit}
                        category={handleSelectCategories}
                        newCategory={handleClickCategory}
                        // setNewCategory={setNewCategory}
                        localState={editedProduct}
                        setLocalState={setEditProduct}
                        handleDeleteCategory={handleDeleteCategory}
                        error={error}
                        errorSubmit={errorSubmit}
                        state={categories}
                        button={'Modify'}
                    />
                    <Mockup 
                        localState={editedProduct}
                        handleDeleteCategory={handleDeleteCategory}
                    />
                </div>
            </div>
        </>
    )
}