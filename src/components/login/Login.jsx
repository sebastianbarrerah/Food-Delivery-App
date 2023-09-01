import React from 'react'
import logo from'../../assets/imagenes/logo.png'
import telefono from'../../assets/imagenes/telefono.png'
import linea from'../../assets/imagenes/linea-amarilla.png'
import celular from'../../assets/imagenes/barraCelular.png'
import './login.scss'

const Login = () => {
  return (
    <section className='container__login'>
      <img src={celular} alt="celuco" className='cel'/>
      <img src={logo} alt="logo" />
      <h3>Sing in</h3>
      <p>Login or create an account with your phone number to start ordering</p>
      <div className='div__inputs'>
        <img src={telefono} alt="" />
        <select name="" id="">
          <option value="colombia">+ 57</option>  
          <option value="venezuela">+ 58</option>
          <option value="ecuador">+56</option>
          <option value="usa">+ 1</option>
          <option value="españa"> + 2</option>
          <option value="alemania">+ 15</option>🇧🇴 🇦🇲
        </select>
        <input type="text" inputmode="tel"/>
      </div>
      <img src={linea} alt="linea" />
      <div className='advertencia'>
        <span className='derechos__autor'>By clicking the button next you accept</span>
        <span className='derechos__autor'>Terms of use</span>
      </div>
      <button className='btn__next1' >login</button>
    </section>
  )
}

export default Login