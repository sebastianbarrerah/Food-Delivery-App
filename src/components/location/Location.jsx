import React from 'react'
import celularBarra from'../../assets/imagenes/barraCelular.png'
import mapa from'../../assets/imagenes/map.png'
import './location.scss'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import logout from '../auth.js'
import { signOut } from 'firebase/auth'
import { auth } from '../../Firebase/firebaseConfig'

const Location = () => {
  
  const navigate = useNavigate()

  const handelSend = () => { 
    navigate("/Home")
  }

  return (
    <section className='container__location'>
        <img src={celularBarra} className='cell5' alt="" /> 
      <div className="div__location">
        <span className='span__location'>
            Allow access to geo data on the device mark your address on the map
        </span>
        <img src={mapa} alt="" />
        <span>Where I am ?</span>
      </div>
  
      <button className='button__location' onClick={handelSend}>Confirm</button>
    </section>
  )
}

export default Location