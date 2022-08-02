import React from 'react'
import { Widget } from "@uploadcare/react-widget";
import './Form.scss'

const Form = ({ handleInputChange, onSubmit, newCategory, setNewCategory, category, localState, setLocalState, state, error, button, handleDeleteCategory }) => {

    return (
        <div className='form-create-container' data-aos='fade-right'>

            <form onSubmit={onSubmit} className='create_form'>

                <div className='left-container-create'>
                    <div className='input_container'>
                        <label htmlFor='name'><span>*</span>Name: </label>
                        <input required className={error.name ? 'input is-hovered is-danger' : 'input is-hovered is-success'} type="text"  maxLength="18" value={localState.name}  name='name' onChange={handleInputChange} autoComplete='off' />
                        {error.name && <p className="help">{error.name}</p>}
                    </div>
                    <div className='input_container'>
                        <label htmlFor='type'><span>*</span>Type: </label>
                        <input required className={error.type ? 'input is-hovered is-danger' : 'input is-hovered is-success'} type="text" value={localState.type}  name='type' onChange={handleInputChange} autoComplete='off' />
                        {error.type && <p className="help">{error.type}</p>}
                    </div>
                    <div className='input_container'>
                        <textarea required className={error.description ? 'textarea is-hovered is-danger' : 'textarea is-hovered is-success'} name='description' value={localState.description} type="text" onChange={handleInputChange} />
                        {error.description && <p className="help">{error.description}</p>}
                    </div>

                    <div>
                        <div className='input_container'>
                            <label htmlFor='stock'>Stock: </label>
                            <input required className='input is-hovered is-success' type="number" value={localState.stock}  min="0" name='stock' onChange={handleInputChange} />
                        </div>
                        <div className='input_container'>
                            <label htmlFor='price'><span>*</span>Price: </label>
                            <input  required className={error.price ? 'input is-hovered is-danger' : 'input is-hovered is-success'} type="number"  value={localState.price}  min='0'   name='price' onChange={handleInputChange} />
                            {error.price && <p className="help">{error.price}</p>}
                        </div>
                    </div>
                    <div className="thc-container">
                        <div className='input_container'>
                            <label htmlFor='thc'><span>*</span>Thc:</label>
                            <div className='input-mg-thc'>
                                <input className={error.thc_cbd ? 'input is-hovered is-danger' : 'input is-hovered is-success'} min="0" max="100" type="number" value={localState.thc}  name='thc' step='0.1' onChange={handleInputChange} />
                                .mg
                            </div>

                            {error.thc_cbd && <p className="help">{error.thc_cbd}</p>}
                        </div>
                        <div className='input_container'>
                            <label htmlFor='cbd' ><span>*</span>Cbd:</label>
                            <div className='input-mg-thc'>
                                <input className={error.thc_cbd ? 'input is-hovered is-danger' : 'input is-hovered is-success'} min="0" max="100" type="number" value={localState.cbd} name='cbd' step='0.1' onChange={handleInputChange} />
                                .mg
                            </div>
                            {error.thc_cbd && <p className="help">{error.thc_cbd}</p>}
                        </div>
                    </div>
                    <div className='input_container'>
                        <Widget
                            publicKey="269841dc43864e62c49d"
                            Clearable={true}
                            id="file"
                            name="photos"
                            multiple
                            onFileSelect={async (group) => {
                                const files = await Promise.all(group.files());
                                const urls = files.map((file) => file.cdnUrl);
                                setLocalState({
                                    ...localState,
                                    img: urls.toString()
                                })
                                //console.log(urls);
                            }}
                        />
                        {/* { localState.img.length === 0 && <p className="help">{error.img}</p> } */}
                    </div>
                    <div className={error.categories ? 'select is-danger' : 'select is-success'}>
                        <span>*</span>
                        <select className='field' defaultValue={'1'} required type='text' name='categories' onChange={category} >
                            {<option value="1" disabled >Categories</option>}
                            {
                                state?.map((c, i) => (
                                    <option value={c.category} key={i}>{c.category}</option>
                                ))
                            }
                        </select>
                        {error.categories && <p className="help">{error.categories}</p>}
                    </div>
                    <div className='new-category'>
                        <input className='input is-hovered is-success' type="text" placeholder='New Category...' maxLength="10" onChange={(e) => setNewCategory(e.target.value)} name='categories' />
                        <button className='btn_category' onClick={newCategory}>
                             <span className="material-symbols-outlined">add_circle</span>
                        </button>
                    </div>
                    <div className='buttons-submit-categories'>
                        <div className="buttons-categories">
                            {localState.categories?.map((categ, i) => <button className='btn_category' key={i} name={categ} onClick={(e) => handleDeleteCategory(e)}>{categ}</button>)}
                        </div>
                    </div>
                    {
                        Object.keys(error).length || localState.categories.length === 0 ?
                            <button className='btn btn-success' disabled style={{justifyContent:"center"}}>
                                {button}
                                {/* <span class="material-symbols-outlined">add_circle</span> */}
                            </button>
                            :
                            <button className='btn_not_create' type='submit' style={{justifyContent:"center"}} >
                                {button}
                                {/* <span class="material-symbols-outlined">add_circle</span> */}
                            </button>
                    }
                </div>

            </form>
        </div>
    )
}

export default Form