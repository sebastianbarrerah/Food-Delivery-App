import React from 'react'
import celularBarra from'../../assets/imagenes/barraCelular.png'
import atras from'../../assets/imagenes/Back.png'
import restaurante from'../../assets/imagenes/restaurante1.png'
import logoPanadero from'../../assets/imagenes/logoPanadero.png'
import logoNombre from'../../assets/imagenes/LogoRES.png'
import star4 from'../../assets/imagenes/Stars4.png'
import './detailsRestaurant.scss'
import comida1 from'../../assets/imagenes/comida1.png'
import comida2 from'../../assets/imagenes/comida2.png'
import comida3 from'../../assets/imagenes/comida3.png'
import comida4 from'../../assets/imagenes/comida4.png'
import comida5 from'../../assets/imagenes/comida5.png'
import comida6 from'../../assets/imagenes/comida6.png'
import { useNavigate } from 'react-router'

// import posterRestaurante2 from'../../assets/imagenes/posterRestaurante2.png'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination } from 'swiper/modules';

const DetailsRestaurant = () => {

    const navigate = useNavigate()

    const handleClickPlato = ()=> {
        navigate("/platos")
    }
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

            <div className='container__restaurantes'>
                <button className='btn__restaurantes'>btn1</button>
                <button className='btn__restaurantes'>btn2</button>
                <button className='btn__restaurantes'>btn3</button>
                <button className='btn__restaurantes'>btn4</button>
            </div>

            <div className='container__comidas'>
                <div className='info__comidas' onClick={handleClickPlato}>
                    <img src={comida1} className='comidas' alt='comida'/>
                    <h4>nombre del plato</h4>   
                    <span>$ 25 38</span>
                </div>
                <div className='info__comidas' onClick={handleClickPlato}>
                    <img src={comida2} className='comidas' alt='comida'/>
                    <h4>nombre del plato</h4>  
                    <span>$ 25 38</span>
                </div>
                <div className='info__comidas' onClick={handleClickPlato}>
                    <img src={comida3} className='comidas' alt='comida'/>
                    <h4>nombre del plato</h4>
                    <span>$ 25 38</span>
                </div>
                <div className='info__comidas' onClick={handleClickPlato}>
                    <img src={comida4} className='comidas' alt='comida'/>
                    <h4>nombre del plato</h4>
                    <span>$ 25 38</span>
                </div>
                <div className='info__comidas' onClick={handleClickPlato}>
                    <img src={comida5} className='comidas' alt='comida'/>
                    <h4>nombre del plato</h4>
                    <span>$ 25 38</span>
                </div>
                <div className='info__comidas' onClick={handleClickPlato}>
                    <img src={comida6} className='comidas' alt='comida'/>
                    <h4>nombre del plato</h4>
                    <span>$ 25 38</span>
                </div>
            </div>
    </section>

  )
}

export default DetailsRestaurant