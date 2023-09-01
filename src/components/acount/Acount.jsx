import React from 'react'
import celularBarra from'../../assets/imagenes/barraCelular.png'
import { useForm, useWatch } from 'react-hook-form'
import './acount.scss'
import { Navigate, useNavigate } from 'react-router-dom'



const Acount = () => {
    const { register, handleSubmit, reset, formState: { errors }, watch} = useForm();
    
    const navigate = useNavigate()

    const onSubmit = data => {
        console.log(data)
    
        reset()
    }

    const handleIr = () => {
        navigate('/location')
    }


  return (

    <section className='container__create'>
        <img src={celularBarra} className='cell' alt="" /> 
    <h1 className='titulo__create'>Create account</h1>

        <form className='formulario__create' onSubmit={handleSubmit(onSubmit)}> 
            <div className='div__input'>
                <label className='label__input'>NAME</label>
                <input type="text" {...register("name")} className='input__formulario'/>
                <hr />
            </div>
            <div className='div__input'>
                <label className='label__input'>EMAIL</label>
                <input type="email" {...register("email")} className='input__formulario'/>
                <hr />
            </div>
            <div className='div__input'>
                <label className='label__input'>PASSWORD</label>
                <input type="password"  {...register("password")} className='input__formulario'/>
                <hr />
            </div>

            <button className='boton__create' onClick={handleIr}>Sing In</button>
        </form>
    </section>
  )
}

export default Acount;