import React from 'react'
import './orderAccepted.scss'
import barraCel from "../../assets/imagenes/barraCelular.png"
import back from "../../assets/imagenes/Back.png"
import imgCheck from "../../assets/imagenes/hombreConCheck.png"
import { useNavigate } from 'react-router-dom'

function OrderAccepted() {
  const navigate = useNavigate()
  return (
   <>
   <img className="dataMobile" src={barraCel} alt="" />
      <div className="title__adress">
        <img src={back} alt="" onClick={() => navigate('/home')}/>
        <span className="title__page">Order is accepted</span>
      </div>
      <div className='image'>
      <img className='imgCheck' src={imgCheck} alt="" />
      </div>
      <button className='btn__order' onClick={() => navigate('/ordenes')}>Follow order</button>
      
   </>
  )
}

export default OrderAccepted