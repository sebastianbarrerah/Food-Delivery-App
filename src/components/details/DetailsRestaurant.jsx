import React from 'react'
import celularBarra from'../../assets/imagenes/barraCelular.png'
import atras from'../../assets/imagenes/Back.png'
import restaurante from'../../assets/imagenes/restaurante1.png'
import logoPanadero from'../../assets/imagenes/logoPanadero.png'
import logoNombre from'../../assets/imagenes/LogoRES.png'
import star4 from'../../assets/imagenes/Stars4.png'
import './detailsRestaurant.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
const DetailsRestaurant = () => {

  return (
    <section className="container__restaurante">
        <img src={celularBarra} className='celular' alt="Estado celular" /> 
        <img src={atras} className='atras' alt="Estado celular" /> 
        <figure className='figure__restaurante'>
            <img src={logoNombre} className='logoNombre' alt="logoNombre" /> 
            <img src={logoPanadero} className='logoNombre' alt="restaurante" /> 
        </figure>
        <div className="restaurantes0" >
                <img src={restaurante} alt=""className='imagen__restaurante' />
                <div className="info__restaurantes0">
                    <h3 className='nombre__restaurante0'>Pardes Restaurant</h3>
                    <span className='precio__restaurante0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure cum, laboriosam magni ipsum enim ducimus expedita voluptatem impedit veniam inventore autem corporis, </span>
                    <div className='detallesMenoresRestaurantes'>
                        <img src={star4} alt="" className='stars0'/>
                        <span className='horarios__restaurante0'>15-20 min</span>
                    </div>
                </div>
            </div>
            <Swiper
                modules={[Pagination]}
                spaceBetween={"5"}
                className="mySwiper"
                loop={true} >
            <SwiperSlide className='slide' style={{ width: 'calc(100% - 90px)' }}>
                <img src={posterRestaurante1} alt="posterRestaurante1" />   
            </SwiperSlide>

            <SwiperSlide className='slide'>
                    <img src={posterRestaurante2} alt="posterRestaurante2" />
            </SwiperSlide>

        </Swiper>
    </section>

  )
}

export default DetailsRestaurant