import { useDispatch } from 'react-redux'
import React from 'react'
import './noInternet.scss'
import barraCel from "../../assets/imagenes/barraCelular.png"
import imgNoInternet from "../../assets/imagenes/sinInternet.png"
import { useNavigate } from 'react-router-dom'
import { resetUsers } from '../../features/usersSlice/usersSlice'

function NoInternet() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const refres = () => {
    dispatch(resetUsers())
    navigate('/')
  }
  
  return (
    <>
   <img className="dataMobile" src={barraCel} alt="" />
      <div className="title__noInternet">
        <span className="title__page">Oops</span>
      </div>
     
      <div className='data__noInternet'>
      <span className='span__noInternet'>No internet connection</span>
      <img className='imgCheck' src={imgNoInternet} alt="" />
      </div>
      <button className='btn__order' onClick={() => {refres()}}>Refresh</button>
      
   </>
  )}


export default NoInternet