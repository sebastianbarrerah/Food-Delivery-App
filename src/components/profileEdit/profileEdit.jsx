import { useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import './profileEdit.scss'
import barraCel from "../../assets/imagenes/barraCelular.png";
import ProfileUser from "../../assets/imagenes/ProfileImg.png";
import back from "../../assets/imagenes/Back.png"
import edit from "../../assets/imagenes/Edit.png"
import { useDispatch, useSelector } from "react-redux";
import { set, useForm } from 'react-hook-form';
import { editUsers } from '../../features/usersSlice/usersSlice';
import { getAuth, updateCurrentUser, updateProfile } from 'firebase/auth';


function ProfileEdit() {

  const navigate = useNavigate()
  const datosPerfil = useSelector(state => state.users)
  const [editando, seteditando] = useState(false)
  const { register, handleSubmit, watch, reset } = useForm()
  const dispatch = useDispatch()

  const onSubmit = async (data) => {
    seteditando(false);
    reset();
  
    const nuevosDatos = {
      displayName: data.nombre,
      // photoURL: data.foto,
      phoneNumber: data.numero,
    };
  
    const auth = getAuth();
    const user = auth.currentUser;
  
    try {
      await updateProfile(user, nuevosDatos);
      console.log('Usuario actualizado exitosamente');
    } catch (error) {
      console.error('Error al actualizar usuario:', error);
    }
  };

  const clickEditar = () => {
    seteditando(true)

  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <img className="dataMobile" src={barraCel} alt="" />
        <div className="title__profile">
          <img src={back} alt="" onClick={() => { navigate("/NoInternet") }} />
          <span className="title__page">Manage adresses</span>
        </div>
        {/* FOTO */}
        <div className="profile__User">
          <img className="imgProfile" src={datosPerfil[0].foto} alt="" />
          <input className='input' style={{ display: editando ? "block" : "none" }} type="file" name='foto'{...register("foto")} />
        </div>
        {/* NOMBRE */}
        <div className="profile__data">
          <div className="settings">
            <span className="span__edit">{datosPerfil[0].nombre}</span>
            <input className='input' style={{ display: editando ? "block" : "none" }} type="text" name='nombre'{...register("nombre")} />
            <img className="imgArrow" src={edit} alt=""
              onClick={() => { clickEditar() }}
            />
          </div>
          {/* EMAIL */}
          <div className="settings">
            <span className="span__edit">{datosPerfil[0].email}</span>
            {datosPerfil[0].email === null ? <input className='input' style={{ display: editando ? "block" : "none" }} type="email" name='email' /> : null}
         
            <img className="imgArrow" src={edit} alt="" onClick={() => { clickEditar() }} />
          </div>
          {/* NUMERO */}
          <div className="settings">
            <span className="span__edit">  {datosPerfil[0].numero === null ? "No registró número celular" : datosPerfil[0].numero}</span>
            {datosPerfil[0].numero === null ? <input className='input' style={{ display: editando ? "block" : "none" }} type="number" name='numero' placeholder='+57...'{...register("numero")} /> : null}
            
            <img className="imgArrow" src={edit} alt="" onClick={() => { clickEditar() }} />
          </div>

          <div className="settings">
            <span className="span__edit">******</span>
            <img className="imgArrow" src={edit} alt="" onClick={() => { clickEditar() }} />
          </div>

        </div>
        <button className='btn__save' >Save</button>
      </form>
    </>
  );
}

export default ProfileEdit;