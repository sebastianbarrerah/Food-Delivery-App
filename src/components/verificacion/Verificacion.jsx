import React from 'react'
import logo from'../../assets/imagenes/logo.png'
import celular from'../../assets/imagenes/barraCelular.png'
import numeros from'../../assets/imagenes/keyboard.png'
import verificacion from'../../assets/imagenes/verificacion.png'
import './verificacion.scss'


const Verificacion = () => {
  return (
    <section className='container__verificacion'>
        <div className='container__verificacion-1'>
            <img src={celular} alt="celuco1" className='celular'/>
            <img src={logo} alt="logo1" />
            <h1 className='titulo'>Verificacion</h1>
            <p className='texto'>Enter the four-digit code from SMS SMS not received. Send again?</p>
            {/* <input type="number" name="" id="" /> */}
            <img src={verificacion} alt="verificacion1" className='verificacion'/>
        </div>
     
        <img src={numeros} alt="numeros1" className='numeros'/>
   </section>
  )
}

export default Verificacion;