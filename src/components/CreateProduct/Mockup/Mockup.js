import React from 'react'
import './Mockup.scss'

const Mockup = ({localState, handleDeleteCategory}) => {
    return (
        <>
            <div className='mockup-product'>
                <div className='img-create'>
                   <p className='img-create_title'>{localState.name}</p>
                   <div className='img-mockup-container'>
                        {
                            localState.img !== '' ?
                                <img className='img-mockup' src={localState.img} alt="alt4" />
                                : null
                        }
                   </div>
                    <div className='description-mockup'>
                        <p className='p-mockup'>{localState.description}</p> 
                    </div>
                   
                   {localState.price && <h4>${localState.price}</h4>} 

                </div>
            </div>
        </>
    )
}

export default Mockup