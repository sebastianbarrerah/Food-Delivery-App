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


function Orders() {
  return (
    <>
     <img className="dataMobile" src={barraCel} alt="" />
     <span className='title__orders'>All orders</span>

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



     <div className="footer__principal">
        <img src={HomeIcono} alt="" />
        <img src={SearchIcono} alt="" />
        <img src={TimeIcono} alt="" />
        <img src={ProfileIcono} alt="" />
    </div>
    </>
   
  )
}

export default Orders