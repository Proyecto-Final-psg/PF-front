import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper';
import './Mockup.scss'

const Mockup = ({ localState }) => {
    return (
        <>
            <div className='mockup-product' data-aos='fade-left'>
                <div className='img-create'>
                    <p className='img-create_title'>{localState.name}</p>
                    <div className='img-mockup-container'>
                        <Swiper className='mySwiper'
                            modules={[Navigation, Pagination, A11y]}
                            navigation
                            pagination={{ clickable: true }}
                            scrollbar={{ draggable: true }}>
                            {
                                localState.img.length ?
                                    localState.img.split(',').map((c,i) => (
                                        <SwiperSlide key={i}>
                                            <img className='img-mockup' src={c} alt="Product pic" />
                                        </SwiperSlide>
                                    ))
                                    : null
                            }
                        </Swiper>
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