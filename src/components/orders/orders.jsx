import React from 'react'
import barraCel from "../../assets/imagenes/barraCelular.png";
import HomeIcono from "../../assets/imagenes/Home1.png"
import SearchIcono from "../../assets/imagenes/Search.png"
import TimeIcono from "../../assets/imagenes/OrdersYellow.png"
import ProfileIcono from "../../assets/imagenes/Profile1.png"
import arrowRigth from "../../assets/imagenes/flechaDerecha.png"
import restaurantIcono from "../../assets/imagenes/iconoRestaurante.png"
import cafeIcono from "../../assets/imagenes/iconoCafe.png"
import './orders.scss'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function Orders() {
    const ordenesHechas = useSelector(state => state.orden)
    const restaurantes = useSelector(state => state.platos)

    const imagenesPorOrden = [];

    for (let i = 0; i < ordenesHechas.length; i++) {
      const filtroNombre = ordenesHechas[i].nombre;
    
      const imagenesFiltradas = restaurantes.filter(element => element.nombre === filtroNombre);

      imagenesPorOrden.push(imagenesFiltradas.map(restaurante => restaurante.image));
    }
    const navigate = useNavigate()

    const ordenPasada = (element) => {
        navigate("/orderDetails", { state: element });
      }
   
    return (
        <>
            <img className="dataMobile" src={barraCel} alt="" />
            <span className='title__orders'>All orders</span>
            {
                ordenesHechas.length === 0 ? (
                    <div className='orders'>
                        <div className='order'>
                            <img className='img' src={restaurantIcono} alt="" />
                            <article className='data'>
                                <span>Pardes restaurant</span>
                                <span className='price'>$ 132.00</span>
                            </article>
                            <article className='details'>
                                <span className='spanOrder'>Delivered</span>
                                <img src={arrowRigth} alt="" />
                            </article>
                        </div>

                        <div className='order'>
                            <img className='img' src={restaurantIcono} alt="" />
                            <article className='data'>
                                <span>Pardes restaurant</span>
                                <span className='price'>$ 132.00</span>
                            </article>
                            <article className='details'>
                                <span className='spanOrder'>Cancelled</span>
                                <img src={arrowRigth} alt="" />
                            </article>
                        </div>

                        <div className='order'>
                            <img className='img' src={cafeIcono} alt="" />
                            <article className='data'>
                                <span>Pardes restaurant</span>
                                <span className='price'>$ 132.00</span>
                            </article>
                            <article className='details'>
                                <span className='spanOrder'>Cancelled</span>
                                <img src={arrowRigth} alt="" />
                            </article>
                        </div>

                    </div>
                ) : (

                    ordenesHechas.map((element, index) => (
                        <div className="orders" onClick={() => {ordenPasada(element)}}>
                            <div className='order' key={index}>
                                <img className='img' src={imagenesPorOrden[index]} alt="" />
                                <article className='data'>
                                    <span>{element.nombre}</span>
                                    <span className='price'>{element.precio}$</span>
                                </article>
                                <article className='details'>
                                    <span className='spanOrder'>Delivered</span>
                                    <img src={arrowRigth} alt="" />
                                </article>
                            </div>
                        </div>

                    ))
                )
            }





            <div className="footer__principal">
                <img src={HomeIcono} alt="" onClick={() => navigate("/home")} />
                <img src={SearchIcono} alt="" onClick={() => navigate("/search")} />
                <img src={TimeIcono} alt="" />
                <img src={ProfileIcono} alt="" onClick={() => navigate("/profile")} />
            </div>
        </>

    )
}

export default Orders