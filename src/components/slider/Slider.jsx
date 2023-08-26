import './slider.scss'
import React, { useRef } from 'react'
import barraCelular from "../../assets/imagenes/barraCelular.png"
import mujerCelular from "../../assets/imagenes/mujerCelular.png"
import hombreCelular from "../../assets/imagenes/hombreCelular.png"
import mujerCelular2 from "../../assets/imagenes/mujer2Celular.png"

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Login from '../login/Login'

const Slider = () => {
    const swiperRef = useRef(null);    

    SwiperCore.use([Pagination]);

    const siguiente = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext(); 
        }
    }



    return (

        <Swiper
            ref={swiperRef} 
            pagination={{
                dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper">

            <SwiperSlide>
                <section className='slider__container'>
                    <img src={barraCelular} alt="barra celular" className='barra__celular1' />
                    <div className='slider__principal'>
                        <img src={mujerCelular} alt="Mujer con celular" />
                        <span className='descripcionSection'>Choose what to eat choosing from a variety of restaurants from the list</span>
                    </div>
                    <button className='btn__next' onClick={siguiente}>Next</button>
                </section>

            </SwiperSlide>

            <SwiperSlide>
            <section className='slider__container'>
                    <img src={barraCelular} alt="barra celular" className='barra__celular1' />
                    <div className='slider__principal'>
                        <img src={hombreCelular} alt="Mujer con celular" />
                        <span className='descripcionSection'>Choose where you want to deliver by indicating on the map</span>
                    </div>
                    <button className='btn__next' onClick={siguiente}>Next</button>
            </section>
            </SwiperSlide>

            <SwiperSlide>
            <section className='slider__container'>
                    <img src={barraCelular} alt="barra celular" className='barra__celular1' />
                    <div className='slider__principal'>
                        <img src={mujerCelular2} alt="Mujer con celular" />
                        <span className='descripcionSection'>We will deliver as soon as possible</span>
                    </div>
                    <button className='btn__next' onClick={siguiente}>Next</button>
            </section>
            </SwiperSlide>

            <SwiperSlide className="hide"> 
                <Login />
            </SwiperSlide>

        </Swiper>
    );
}

export default Slider