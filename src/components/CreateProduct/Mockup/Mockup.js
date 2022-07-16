import React from 'react'
import './Mockup.scss'

const Mockup = ({localState, handleDeleteCategory}) => {
    return (
        <>
            <div className='mockup-product'>
                <div className='img-create'>
                    <textarea className='img-create_title' defaultValue={localState.name} id='name' />
                    {console.log(localState.img)}
                    {
                        localState.img !== '' ?
                            <img src={localState.img} alt="alt4" />
                            : null
                    }
                    <textarea defaultValue={localState.description} id='description' />
                    <h4>${localState.price}</h4>

                </div>
                <div className="buttons-categories">
                    {localState.categories?.map((categ, i) => <button className='btn_category' key={i} name={categ} onClick={(e) => handleDeleteCategory(e)}>{categ}</button>)}
                </div>
            </div>
        </>
    )
}

export default Mockup