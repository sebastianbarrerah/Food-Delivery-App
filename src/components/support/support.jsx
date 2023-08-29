import React from 'react'
import barraCel from "../../assets/imagenes/barraCelular.png"
import back from "../../assets/imagenes/Back.png"
import imgSupport from "../../assets/imagenes/mujerHablando.png"
import Call from "../../assets/imagenes/Call.png"
import Chat from "../../assets/imagenes/LiveChat.png"
import Email from "../../assets/imagenes/Email.png"
import arrowRigth from "../../assets/imagenes/flechaDerecha.png"

function Support() {
  return (
    <>
     <img className="dataMobile" src={barraCel} alt="" />
      <div className="title__adress">
        <img src={back} alt="" />
        <span className="title__page">Support</span>
      </div>
      <div className='image'>
      <img className='imgCheck' src={imgSupport} alt="" />
      </div>

      <div className="profile__data">
        <div className="settings">
            <img className="img" src={Call} alt="" />
            <span className="span">Call</span>
            <img className="imgArrow" src={arrowRigth} alt="" />
        </div>
        <div className="settings">
            <img className="img" src={Chat} alt="" />
            <span className="span">Live chat</span>
            <img className="imgArrow" src={arrowRigth} alt="" />
        </div>
        <div className="settings">
            <img className="img" src={Email} alt="" />
            <span className="span">Send email</span>
            <span className="spanLanguage">example@gmail.com</span>
        </div>
    </div>
    <br />
    </>
  )
}

export default Support