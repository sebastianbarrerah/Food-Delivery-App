import React from 'react'
import celularBarra from'../../assets/imagenes/barraCelular.png'
import { useForm, useWatch } from 'react-hook-form'
import './acount.scss'
import { Navigate, useNavigate } from 'react-router-dom'
import { auth } from '../../Firebase/firebaseConfig'
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Acount = () => {

    const { register, handleSubmit} = useForm();
    const navigate = useNavigate()

    const onSubmit= async (data) => {
        try {
            const email= data.email; 
            const password = data.password; 
            const {user} = await createUserWithEmailAndPassword(auth ,email, password);
            console.log(user)
           
           console.log('registro correcto')
          } catch (error) {
            console.log('registro incorrecto', error.code)
          }
    }


  return (

    <section className='container__create'>
        <img src={celularBarra} className='cell' alt="" /> 
    <h1 className='titulo__create'>Create account</h1>

        <form className='formulario__create' onSubmit={handleSubmit(onSubmit)}> 
            <div className='div__input'>
                <label className='label__input'>PHOTO</label>
                <input type="file" {...register("photo")} className='input__formulario'/>
                <hr />
            </div>

            <div className='div__input'>
                <label className='label__input'>NAME</label>
                <input type="text" {...register("name",{ required: true })} className='input__formulario'/>
                <hr />
            </div>
            <div className='div__input'>
                <label className='label__input'>EMAIL</label>
                <input type="email" {...register("email",  { required: true })} className='input__formulario'/>
                <hr />
            </div>
            <div className='div__input'>
                <label className='label__input'>PASSWORD</label>
                <input type="password"  {...register("password",  { required: true })} className='input__formulario'/>
                <hr />
            </div>

            <button type='submit' className='boton__create' >Sing In</button>
        </form>
    </section>
  )
}

export default Acount;