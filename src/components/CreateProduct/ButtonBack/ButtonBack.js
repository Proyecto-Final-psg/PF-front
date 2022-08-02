import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './ButtonBack.scss'

const ButtonBack = ({button}) => {

    const navigate = useNavigate()

    return (
        <>
            <div className='title-edit'>
                <button className='btn back' onClick={() => navigate(-1)}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <h2 className='"title is-2"'>{`${button}`}</h2>
            </div>
        </>
    )
}

export default ButtonBack