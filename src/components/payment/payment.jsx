import React from 'react'
import './payment.scss'
import barraCel from "../../assets/imagenes/barraCelular.png"
import back from "../../assets/imagenes/Back.png"
import cardIcono from "../../assets/imagenes/visa.png"
import paypalIcono from "../../assets/imagenes/paypal.png"
import eyeIcono from "../../assets/imagenes/eye.png"

function Payment() {
  return (
   <>
    <img className="dataMobile" src={barraCel} alt="" />
      <div className="title__adress">
        <img src={back} alt="" />
        <span className="title__page">Payment method</span>
      </div>

      <div className='payment__card'>
        <img src={cardIcono} alt="" />
        <input className='input' type="text" placeholder='1111 2222 3333 4444'/>
        <img  src={eyeIcono} alt="" />
      </div>

      <div className='payment__card'>
        <img src={paypalIcono} alt="" />
        <input className='input' type="text" placeholder='example@gmail.com'/>
        <img src={eyeIcono} alt="" />
      </div>
      <button className='add__card'>Add new card</button>
   </>
  )
}

export default Payment