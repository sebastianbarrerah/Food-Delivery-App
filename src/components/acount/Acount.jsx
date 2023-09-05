import React from 'react'
import celularBarra from'../../assets/imagenes/barraCelular.png'
import { useForm, useWatch } from 'react-hook-form'
import './acount.scss'
import { Navigate, useNavigate } from 'react-router-dom'
import { auth } from '../../Firebase/firebaseConfig'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import uploadFile from '../../serviceCloudinary/uploadFile'
import { useDispatch } from 'react-redux'
import { setUserPhoto } from '../../features/photoSlice/photoSlice'

const Acount = () => {

    const { register, handleSubmit} = useForm();
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const onSubmit= async (data) => {

        try {
            const photo = await uploadFile(data.photo[0]) 
            data.photo = photo; 
            if (photo) {
                dispatch(setUserPhoto(photo)); 
              }


            console.log(data)
            console.log(photo)
            console.log('cargo photo')

            
           } catch (error) {
            //alert
            console.log(error)
            alert('La imagen no fue cargada correctamente')
           }


        try {
             const email = data.email
             const password = data.password
             const name = data.name
             const photo = data.photo 
           
            const {user} = await createUserWithEmailAndPassword(auth ,email, password );
            console.log(user)

            const {accessToken, displayName, photoURL} = user.auth.currentUser;
            
            const dataUser = {
                displayName: name,
                foto: photo     
            }
            await updateProfile(auth.currentUser, dataUser)

           console.log('registro correcto')
           navigate('/initialSesion')
          } catch (error) {
            console.log('registro incorrecto', error.code)
            console.log('registro incorrecto', error.message)
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