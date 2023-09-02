import React, { useEffect, useState } from 'react'
import celularBarra from'../../assets/imagenes/barraCelular.png'
import { set, useForm, useWatch } from 'react-hook-form'
import './initialSesion.scss'
import { Navigate, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../Firebase/firebaseConfig'
import Swal from 'sweetalert2'
import { useDispatch, useSelector } from 'react-redux'
import logout from '../auth'






const InitialSesion = () => {
    const line = useSelector(state => state.online)
    const { register, handleSubmit, reset, formState: { errors }, watch} = useForm();
    
    const navigate = useNavigate()

    const onSubmit= async (data) => {
        try {
            const email= data.email; 
            const password = data.password; 
            const {user} = await signInWithEmailAndPassword(auth ,email, password);
            Swal.fire(
                "Excelente",
                `Bienvenido ${user.displayName}`,
                "success"
            );

           reset();
        } catch (error) {
            Swal.fire(
                "Ops!",
                `Error al iniciar sesion, intentalo de nuevo`,
                "error"
            );
            console.log(error.code)
        };
    }
          
    

    const desconectar = async() => {
        try {
            const salir = await signOut(auth);
            console.log(salir)
            Swal.fire(
                "Te has desconectado",
                `Hasta luego`,
                "success"
            );
            
        } catch (error) {
            Swal.fire(
                "Ops!",
                `Error al desconectar`,
                "error"
            );
            console.log(error.code)
        }
    }
    const dispatch = useDispatch()

        dispatch(logout(line))

 

  


  return (

    <section className='container__create1'>
        <img src={celularBarra} className='cell1' alt="" /> 
    <h1 className='titulo__create1'>Log in</h1>

        <form className='formulario__create1' onSubmit={handleSubmit(onSubmit)}> 
            <div className='div__input'>
                <label className='label__input1'>EMAIL</label>
                <input type="email" {...register("email", { 
                    required: true 
                    })} className='input__formulario1'/>
                <hr />
            </div>
                    <button onClick={desconectar}>desconectar usuario </button>
            <div className='div__input1'>
                <label className='label__input1'>PASSWORD</label>
                <input type="password"  {...register("password", { required: true })} className='input__formulario1'/>
                <hr />
            </div>
            <button className='boton__create2' >Log in </button>
           
           <button className='boton__create1' onClick={()=>{navigate('/acount')}}>Sing up</button>
        </form>
    </section>
  )
}

export default InitialSesion;

