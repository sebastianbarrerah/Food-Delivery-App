import { useLocation, useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import celularBarra from'../../assets/imagenes/barraCelular.png'
import restaurante1 from'../../assets/imagenes/restaurante1.png'
// import restaurante2 from'../../assets/imagenes/restaurante2.png'
// import restaurante3 from'../../assets/imagenes/restaurante3.png'
// import restaurante4 from'../../assets/imagenes/restaurante4.png'
import star3 from'../../assets/imagenes/Stars3.png'
import star4 from'../../assets/imagenes/Stars4.png'
import star5 from'../../assets/imagenes/Stars5.png'
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
import { useFormState } from 'react-hook-form'
import { dataPlatos, traerRestaurantes } from '../../Firebase/Firestore/firestore'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../Firebase/firebaseConfig'
import { useDispatch, useSelector } from 'react-redux'
import { estadoRestaurante } from '../../features/restaurantSlice/restaurantSlice'
import logout from '../auth'
import { signOut } from 'firebase/auth'
import { auth } from '../../Firebase/firebaseConfig'
import {categoria} from './categoria'


const Home = () => {
  const [ubicacion, setUbicacion] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const location = useLocation();
    const [restaurantes, setRestaurantes] = useState([]);
    const [filtroCategoria, setFiltroCategoria] = useState([]);

    useEffect(() => {
      if (location.state) {
      setUbicacion(location.state) 
    }
  }, [])


//   useEffect(() => {    
//     dispatch(dataPlatos());
// }, [dispatch])

    const clickDetalles = (restaurant) => {
        console.log();
        navigate(`/restaurante/${restaurant.nombre}`, {state:restaurant})
    }
    
 
    useEffect(() => {
        const fetchRestaurantes = async () => {
          try {
            const querySnapshot = await getDocs(collection(db, 'restaurantes'));
            const restaurantesData = [];
    
            querySnapshot.forEach((doc) => {
              const data = doc.data();
              restaurantesData.push({
                id: doc.id,
                nombre: data.nombre,
                horario: data.horario,
                imagen: data.imagen,
                categoria: data.categoria, 
                tipoRestaurante : data.tipoRestaurante,
                descripcion: data.descripcion,  
                tipoCategoria : data.tipoCategoria, 
                // Agrega más campos según tu estructura de datos
              });
              
            });
            
            setRestaurantes(restaurantesData);
            dispatch(estadoRestaurante(restaurantesData))
          } catch (error) {
            console.error('Error al obtener restaurantes:', error);
          }
        };
    
        fetchRestaurantes();
    }, []);

    const salir = async () => {
      try {
        await signOut(auth); 
        console.log('Usuario desconectado');
        dispatch(logout(false));
      } catch (error) {
        console.log('Error al desconectar:', error.code);
      }
    };

// console.log(restaurantes)
// console.log(categoria)

const filtrarCategoria = (categoria) => {
  setFiltroCategoria(categoria)
}

console.log(filtroCategoria)

const restaurantesFiltrados = restaurantes.filter((restaurant) => restaurant.tipoCategoria === filtroCategoria);

  console.log(restaurantesFiltrados)


  return (
    <section className='container__home'>
        <img src={celularBarra} className='cell' alt="Estado celular" /> 
        <div className='div__home1'>
            <img src={buscar} alt="buscar" className='buscar' onClick={()=>{navigate('/adress')}}/>
            <div className='div__home'>
                <span className='direccion__name'>DELIVER TO</span>
                <span className='direccion'>{ubicacion}</span>
            </div>
            <button onClick={salir}>desconectar</button>

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
            {
                categoria.map((element, index) => (
                    <button className='boton__categoria' key={index} onClick={()=>{filtrarCategoria(element.label)}}>{element.label}</button>
                ))
            }
        </div>

        <div className="container__restaurantes">
        
     {
     restaurantes.map((restaurant, index)=>(
     <div className="restaurantes" onClick={() => {clickDetalles(restaurant)}} key={index}>
        <figure className='fig__imgRestaurantes'>
        <img src={restaurant.imagen} alt="" className='img__Restaurantes'/>
        </figure>
        
         <div className="restaurante__restaurantes">
             <h3 className='nombre__restaurante'>{restaurant.nombre}</h3>

             {restaurant.categoria === 3 ? (
          <img src={star3} alt="" className='stars' />
        ) : restaurant.categoria === 4 ? (
          <img src={star4} alt="" className='stars' />
        ) :  (
          <img src={star5} alt="" className='stars' />
        )}

             {/* <img src={star4} alt="" className='stars'/> */}
             <span className='horarios__restaurante'>{restaurant.horario}</span>
             <span className='precio__restaurante'>Before you <strong>4$</strong> </span>
         </div>
     </div>   ))
     }

                                   
        </div>

        <button className='button__home'>View card</button> 

        <footer className='footer__home'>
            <figure className='figure__home'>
                <img src={home} alt="" className='icono__figure' onClick={()=>{navigate('/home')}}/>
                <img src={search} alt="" className='icono__figure' onClick={()=>{navigate('/search')}}/>
                <img src={orden} alt="" className='icono__figure'/>
                <img src={perfil} alt="" className='icono__figure' onClick={()=>{navigate('/profile')}}/>
            </figure>
        </footer>

    </section>
  )
}

export default Home