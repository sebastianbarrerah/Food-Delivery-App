import React from "react";
import './profile.scss'
import barraCel from "../../assets/imagenes/barraCelular.png";
import HomeIcono from "../../assets/imagenes/Home1.png";
import SearchIcono from "../../assets/imagenes/Search.png";
import TimeIcono from "../../assets/imagenes/Orders1.png";
import ProfileIcono from "../../assets/imagenes/ProfileYellow.png";
import ProfileUser from "../../assets/imagenes/ProfileImg.png";
import ProfileGrey from "../../assets/imagenes/Account.png"
import arrowRigth from "../../assets/imagenes/flechaDerecha.png"
import alarm from "../../assets/imagenes/AlarmGrey.png"
import switcher from "../../assets/imagenes/Switcher.png"
import coin from "../../assets/imagenes/Coin.png"
import language from "../../assets/imagenes/language.png"
import location from "../../assets/imagenes/Location.png"
import faq from "../../assets/imagenes/FAQ.png"
import Call from "../../assets/imagenes/Call.png"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../../Firebase/firebaseConfig";
import logout from "../auth";


function Profile() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const datosPerfil = useSelector(state => state.users)

  const userPhoto = useSelector(state => state.photo.userPhoto);
  // console.log(userPhoto)

  const cerrarSesion = async () => {
    try {
      await signOut(auth); 
      console.log('Usuario desconectado');
      dispatch(logout(false));
    } catch (error) {
      console.log('Error al desconectar:', error.code);
    }
  };


  return (
    <>
      <img className="dataMobile" src={barraCel} alt="" />

      <div className="profile__User">
      {/* <img className="imgProfile" src={datosPerfil[0].foto} alt="" /> */}
        <img className="imgProfile" src={userPhoto} alt="" />
        <span className="spanProfile">{
    (datosPerfil[0].nombre === "") ? (
      datosPerfil[0].numero
    ) :
      datosPerfil[0].nombre
  }</span>
      </div>

      <div className="profile__data">
        <div className="settings" onClick={() => { navigate('/profileEdit') }}>
          <img className="img" src={ProfileGrey} alt="" />
          <span className="span">Account edit</span>
          <img className="imgArrow" src={arrowRigth} alt="" />
        </div>
        <div className="settings">
          <img className="img" src={alarm} alt="" />
          <span className="span">Account edit</span>
          <img className="imgArrow" src={switcher} alt="" />
        </div>
        <div className="settings">
          <img className="img" src={coin} alt="" />
          <span className="span">Payment</span>
          <img className="imgArrow" src={arrowRigth} alt="" />
        </div>
        <div className="settings">
          <img className="img" src={language} alt="" />
          <span className="span">Language</span>
          <span className="spanLanguage">ENG</span>
        </div>
        <div className="settings">
          <img className="img" src={location} alt="" />
          <span className="span">Location</span>
          <img className="imgArrow" src={arrowRigth} alt="" />
        </div>
        <div className="settings">
          <img className="img" src={faq} alt="" />
          <span className="span">FAQ</span>
          <img className="imgArrow" src={arrowRigth} alt="" />
        </div>

        <div className="settings2" onClick={() => { cerrarSesion() }}>
        
          <span className="span__cerrar">Cerrar Sesion</span>
        </div>
      </div>

      <div className="footer__profile">
        <img src={HomeIcono} alt="" onClick={()=>{navigate('/home')}}/>
        <img src={SearchIcono} alt="" onClick={()=>{navigate('/search')}}/>
        <img src={TimeIcono} alt="" />
        <img src={ProfileIcono} alt="" />
      </div>
    </> 
  );
}

export default Profile;
