import { useNavigate } from 'react-router-dom'
import React from 'react'
import celularBarra from'../../assets/imagenes/barraCelular.png'
import restaurante1 from'../../assets/imagenes/restaurante1.png'
// import restaurante2 from'../../assets/imagenes/restaurante2.png'
// import restaurante3 from'../../assets/imagenes/restaurante3.png'
// import restaurante4 from'../../assets/imagenes/restaurante4.png'
// import star3 from'../../assets/imagenes/star3.png'
import star4 from'../../assets/imagenes/Stars4.png'
// import star5 from'../../assets/imagenes/star5.png'
// import burguer from'../../assets/imagenes/hamburguesa.png'
// import pizaa from'../../assets/imagenes/pizza.png'
import posterRestaurante1 from'../../assets/imagenes/poserRestaurante1.png'
import posterRestaurante2 from'../../assets/imagenes/posterRestaurante2.png'
import home from'../../assets/imagenes/Home.png'
import buscar from'../../assets/imagenes/ubicacion.png'
import orden from'../../assets/imagenes/Orders.png'
import perfil from'../../assets/imagenes/Profile.png'
import search from'../../assets/imagenes/search.png'
import './home.scss'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Navigate } from 'react-router-dom'


const Home = () => {
    const navigate = useNavigate()

    const clickDetalles = () => {
        navigate('/restaurant')
        console.log('click')
    
    }

  return (
    <section className='container__home'>
        <img src={celularBarra} className='cell' alt="Estado celular" /> 
        <div className='div__home1'>
            <img src={buscar} alt="buscar" className='buscar'/>
            <div className='div__home'>
                <span className='direccion__name'>DELIVER TO</span>
                <span className='direccion'>882 Well St, New-York</span>
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

        <span className='description__cafe'>Restaurants and cafes</span>

        <div className='botones__categorias'>
            <button className='boton__categoria'>All</button>
            <button className='boton__categoria'>All</button>
            <button className='boton__categoria'>All</button>
        </div>

        <div className="container__restaurantes">
            <div className="restaurantes">
                <img src={restaurante1} alt="" />
                <div className="info__restaurantes">
                    <h3 className='nombre__restaurante'>Pardes Restaurant</h3>
                    <img src={star4} alt="" className='stars'/>
                    <span className='horarios__restaurante'>Work time 09:30 - 23:00</span>
                    <span className='precio__restaurante'>Before you <strong>4$</strong> </span>
                </div>
            </div>

            <div className="restaurantes" onClick={clickDetalles}>
                <img src={restaurante1} alt="" />
                <div className="info__restaurantes">
                    <h3 className='nombre__restaurante'>Pardes Restaurant</h3>
                    <img src={star4} alt="" className='stars'/>
                    <span className='horarios__restaurante'>Work time 09:30 - 23:00</span>
                    <span className='precio__restaurante'>Before you <strong>4$</strong> </span>
                </div>
            </div>

            <div className="restaurantes">
                <img src={restaurante1} alt="" />
                <div className="info__restaurantes">
                    <h3 className='nombre__restaurante'>Pardes Restaurant</h3>
                    <img src={star4} alt="" className='stars'/>
                    <span className='horarios__restaurante'>Work time 09:30 - 23:00</span>
                    <span className='precio__restaurante'>Before you <strong>4$</strong> </span>
                </div>
            </div>

            <div className="restaurantes">
                <img src={restaurante1} alt="" />
                <div className="info__restaurantes">
                    <h3 className='nombre__restaurante'>Pardes Restaurant</h3>
                    <img src={star4} alt="" className='stars'/>
                    <span className='horarios__restaurante'>Work time 09:30 - 23:00</span>
                    <span className='precio__restaurante'>Before you <strong>4$</strong> </span>
                </div>
            </div>
        </div>

        <button className='button__home'>View card</button> 

        <footer className='footer__home'>
            <figure className='figure__home'>
                <img src={home} alt="" className='icono__figure'/>
                <img src={search} alt="" className='icono__figure'/>
                <img src={orden} alt="" className='icono__figure'/>
                <img src={perfil} alt="" className='icono__figure'/>
            </figure>
        </footer>

    </section>
  )
}

export default Home