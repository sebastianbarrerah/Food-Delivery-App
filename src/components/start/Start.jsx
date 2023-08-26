import React from 'react'
import "./start.scss"
import barraCelular1 from "../../assets/imagenes/barraCelular.png"
import logo from "../../assets/imagenes/Logo.png"

const Start = () => {
  return (
    <>
        <img src={barraCelular1} alt="barra celular" className='barra__celular'/>
        <img src={logo} alt="barra celular" className='logo__principal'/>
    </>
  )
}

export default Start;