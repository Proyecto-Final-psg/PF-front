import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getProductById, editProduct } from '../../Redux/Actions'
import { validator } from '../CreateProduct/helpers/Validator'
import Form from '../CreateProduct/Form/Form'
import Mockup from '../CreateProduct/Mockup/Mockup'
import ButtonBack from '../CreateProduct/ButtonBack/ButtonBack'
import swal from 'sweetalert'
import './EditCard.scss'

export function EditCard() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { id } = useParams()
    const product = useSelector(store => store.product)
    const categories = useSelector(state => state.categories);
    const [newCategory, setNewCategory] = useState('')
    const [error, setError] = useState({})

    const [editedProduct, setEditProduct] = useState({
        name: product.name,
        stock: product.stock,
        price: product.price,
        img: product.img,
        type: product.type,
        description: product.description,
        thc: product.thc !== null ? product.thc : 0,
        cbd: product.cbd !== null ? product.cbd : 0,
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
        let categoryFound = editedProduct.categories.find(a => a === e.target.value)
        if(!categoryFound) {
            setEditProduct({
            ...editedProduct,
            categories: [...editedProduct.categories, e.target.value],
            })
            setError(validator({
            ...editedProduct,
            categories: [...editedProduct.categories, e.target.value],
          }))
        }
    }

    function handleClickCategory(e) {
        e.preventDefault()
        let categoryFound = editedProduct.categories.find(a => a === newCategory)
        if(!categoryFound){
            setEditProduct({
            ...editedProduct,
            categories: [...editedProduct.categories, newCategory],
        })
        }
        
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
            stock: '',
            price: '',
            img: '',
            type: '',
            description: '',
            thc: '',
            cbd: '',
            categories: []
        }); 
        swal({
            title: `Product edited succesfully!`,
            icon: "success",
            button: 'Ok'
        }).then(function (isConfirm) {
            if (isConfirm) {
                navigate('/home')
            }
        })
    }



    useEffect(() => {
        dispatch(getProductById(id))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        return () => { setEditProduct(null) }
    }, [])

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
                        localState={editedProduct}
                        setLocalState={setEditProduct}
                        handleDeleteCategory={handleDeleteCategory}
                        setNewCategory={setNewCategory}
                        error={error}
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