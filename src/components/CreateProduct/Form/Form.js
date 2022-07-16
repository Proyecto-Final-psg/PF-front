import React from 'react'
import { Widget } from "@uploadcare/react-widget";
import './Form.scss'

const Form = ({handleInputChange, onSubmit, newCategory, setNewCategory, category, localState, setLocalState, state, error, errorSubmit, button}) => {

    return (
        <>
            <form onSubmit={onSubmit} className='create_form'>
                <div className='input_container'>
                    <span className='error-message'>{errorSubmit === true ? error.name : ''}</span>
                    <label htmlFor='name'><span>*</span>Name: </label>
                    <input className={`input is-small is-hovered ${error.name ? 'is-danger' : 'is-success'}`} type="text" value={localState.name} placeholder='CBD-Aceite n12...' name='name' onChange={handleInputChange} autoComplete='off' />
                </div>
                <div className='input_container'>
                    <label htmlFor='stock'>Stock: </label>
                    <input className='input is-small is-hovered is-success' type="number" value={localState.stock} placeholder='stock' name='stock' onChange={handleInputChange} />
                </div>
                <div className='input_container'>
                    <span className='error-message'>{errorSubmit === true ? error.price : ''}</span>
                    <label htmlFor='price'><span>*</span>Price: </label>
                    <input className={`input is-small is-hovered ${error.price ? 'is-danger' : 'is-success'}`} type="number" value={localState.price} placeholder='0' step='0.01' name='price' onChange={handleInputChange} />
                </div>
                <div className='input_container'>
                    <span className='error-message'>{errorSubmit === true ? error.type : ''}</span>
                    <label htmlFor='type'><span>*</span>Type: </label>
                    <input className={`input is-small is-hovered ${error.type ? 'is-danger' : 'is-success'}`} type="text" value={localState.type} placeholder='Oil...' name='type' onChange={handleInputChange} autoComplete='off' />
                </div>
                <div className='input_container'>
                    {
                        localState.img.length === 0 &&
                        <span className='error-message'>{errorSubmit === true ? error.img : ''}</span>
                    }
                    <Widget
                        publicKey="269841dc43864e62c49d"
                        Clearable={true}
                        id="file"
                        name="photos"
                        onChange={(e) => {
                            console.log(e)
                            setLocalState({
                                ...localState,
                                img: e.originalUrl
                            })
                        }}
                    />
                </div>
                <div className='input_container'>
                    <span className='error-message'>{errorSubmit === true ? error.description : ''}</span>
                    <textarea className={`textarea is-small is-hovered ${error.description ? 'is-danger' : 'is-success'}`} name='description' value={localState.description} type="text" placeholder="Description..." onChange={handleInputChange} />
                </div>
                <div className='input_container'>
                    <span className='error-message'>{errorSubmit === true ? error.thc_cbd : ''}</span>
                    <label htmlFor='thc'><span>*</span>Thc:</label>
                    <input className={`input is-small is-hovered ${error.thc_cbd ? 'is-danger' : 'is-success'}`} min="0" max="100" type="number" value={localState.thc} placeholder='0' name='thc' step='0.01' onChange={handleInputChange} />
                </div>
                <div className='input_container'>
                    <span className='error-message'>{errorSubmit === true ? error.thc_cbd : ''}</span>
                    <label htmlFor='cbd' ><span>*</span>Cbd:</label>
                    <input className={`input is-small is-hovered ${error.thc_cbd ? 'is-danger' : 'is-success'}`} min="0" max="100" type="number" value={localState.cbd} placeholder='0' name='cbd' step='0.01' onChange={handleInputChange} />
                </div>
                <div className={`select is-small ${error.categories ? 'is-danger' : 'is-success'}`}>
                    <span className='error-message_category'>{errorSubmit === true ? error.categories : ''}</span>
                    <span>*</span>
                    <select className='field' type='text' name='categories' onChange={category} >
                        {<option value="" >Categories</option>}
                        {
                            state?.map((c, i) => (
                                <option value={c.category} key={i}>{c.category}</option>
                            ))
                        }
                    </select>
                </div>
                <div className='input_container'>
                    <input className='input is-small is-success' type="text" placeholder='New Category...' onChange={(e) => setNewCategory(e.target.value)} name='categories' />
                    <button className='btn_category' onClick={newCategory}>Add</button>
                </div>
                {console.log(error)}
                {console.log(Object.keys(error).length)}
                {/* {console.log(localState.name)} */}
                {
                    Object.keys(error).length || localState.name === '' ?
                    <button>asdasd</button>
                    :
                    <button className='btn_create' type='submit' >{button}</button>
                }
            </form>
        </>
    )
}

export default Form