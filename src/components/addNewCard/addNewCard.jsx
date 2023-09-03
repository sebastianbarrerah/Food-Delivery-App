import React from "react";
import "./addNewCard.scss";
import barraCel from "../../assets/imagenes/barraCelular.png";
import back from "../../assets/imagenes/Back.png";
import eyeIcono from "../../assets/imagenes/eye.png"

function AddNewCard() {
  return (
    <>
      <img className="dataMobile" src={barraCel} alt="" />
      <div className="title__adress">
        <img src={back} alt="" />
        <span className="title__page">Add new card</span>
      </div>

      <div className="newCard">
        <input className="input" type="text" placeholder="Card name" />
      </div>
      <div className="newCard">
        <input className="input" type="text" placeholder="Card number" />
        <img  src={eyeIcono} alt="" />
      </div>
      <div className="newCard__details">
      <input className="input__details" type="text" placeholder="Expires" />
      <input className="input__details" type="text" placeholder="CVV" />
      </div>

      <button className='btn__save' >Save</button>
    </>
  );
}

export default AddNewCard;
