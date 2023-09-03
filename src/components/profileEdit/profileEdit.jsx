import React from "react";
import './profileEdit.scss'
import barraCel from "../../assets/imagenes/barraCelular.png";
import ProfileUser from "../../assets/imagenes/ProfileImg.png";
import back from "../../assets/imagenes/Back.png"
import edit from "../../assets/imagenes/Edit.png"

function ProfileEdit() {
  return (
    <>
      <img className="dataMobile" src={barraCel} alt="" />
      <div className="title__profile">
        <img src={back} alt="" />
        <span className="title__page">Manage adresses</span>
      </div>

      <div className="profile__User">
        <img className="imgProfile" src={ProfileUser} alt="" />
      </div>

      <div className="profile__data">
        <div className="settings">
            <span className="span__edit">Jenny Wilson</span>
            <img className="imgArrow" src={edit} alt="" />
        </div>
        <div className="settings">
            <span className="span__edit">jennywilson@gmail.com</span>
            <img className="imgArrow" src={edit} alt="" />
        </div>
        <div className="settings">
            <span className="span__edit">+1 903 354 43 43</span>
            <img className="imgArrow" src={edit} alt="" />
        </div>
        <div className="settings">
            <span className="span__edit">03.05.1995</span>
            <img className="imgArrow" src={edit} alt="" />
        </div>
       
    </div>
    <button className='btn__save' >Save</button>
    </>
  );
}

export default ProfileEdit;
