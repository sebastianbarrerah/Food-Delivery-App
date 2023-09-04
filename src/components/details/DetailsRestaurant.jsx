import React, { useEffect, useState } from 'react'
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
import { useNavigate, useLocation } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { dataPlatos } from '../../Firebase/Firestore/firestore'
import { resetPlatos } from '../../features/platosSlice/platosSlice'

// import posterRestaurante2 from'../../assets/imagenes/posterRestaurante2.png'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination } from 'swiper/modules';

const DetailsRestaurant = () => {

    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch() 
    
    const [infoRestaurante, setinfoRestaurante] = useState({})
    
    useEffect(() => {
        if (location.state) {
        setinfoRestaurante(location.state) 
    }
}, [])

useEffect(() => {    
    dispatch(resetPlatos())
    dispatch(dataPlatos());
}, [])

const datosDePlatos = useSelector(state => state.platos)
    

const nombreRestaurante = infoRestaurante.nombre; 

const platosFiltrados = datosDePlatos.filter(plato => plato.idRestaurante === nombreRestaurante)



    const handleClickPlato = (plato)=> {
        navigate("/platos" , {state:plato} , {restaurante: infoRestaurante})
    }
    
  return (
    <section className="container__restaurante">
        <img src={celularBarra} className='celular' alt="Estado celular" /> 
        <img src={atras} className='atras' alt="Estado celular" onClick={()=>{navigate('/home')}} /> 
        <figure className='figure__restaurante'>
            <img src={logoNombre} className='logoNombre' alt="logoNombre" /> 
            <img src={logoPanadero} className='logoNombre' alt="restaurante" /> 
        </figure>
        <div className="restaurantes0" >
                <img src={infoRestaurante.imagen} alt=""className='imagen__restaurante' />
                <div className="info__restaurantes0">
                    <h3 className='nombre__restaurante0'>{infoRestaurante.nombre}</h3>
                    <span className='precio__restaurante0'>{infoRestaurante.descripcion}</span>
                    <div className='detallesMenoresRestaurantes'>
                        <img src={star4} alt="" className='stars0'/>
                        <span className='horarios__restaurante0'>{infoRestaurante.horario}</span>
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
                {
                    platosFiltrados.map((plato, index)=>(
                        <div className='info__comidas' onClick={() => {handleClickPlato(plato)}} key={index}>
                        <img src={comida1} className='comidas' alt='comida'/>
                        <h4>{plato.nombre}</h4>   
                        <span>{plato.precio}</span>
                    </div>

                    ))
                }
              
                {/* <div className='info__comidas' onClick={handleClickPlato}>
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
                </div> */}
            </div>
    </section>

  )
}

export default DetailsRestaurant

