import React from "react";
import barraCel from "../../assets/imagenes/barraCelular.png"
import back from "../../assets/imagenes/Back.png"
import mapIcono from "../../assets/imagenes/ubiNegro.png"
import './adress.scss'

function Adress() {
  return (
    <>
      <img className="dataMobile" src={barraCel} alt="" />
      <div className="title__adress">
        <img src={back} alt="" />
        <span className="title__page">Manage adresses</span>
      </div>
      
      <div className="form__adress">
        <img className="img" src={mapIcono} alt="" />
        <form className="form">
          <label className="label">Adress 1</label>
          <input className="input" type="text" placeholder="882 Well St, New York" />
          <hr />
        </form>
      </div>

      <div className="form__adress">
        <img className="img" src={mapIcono} alt="" />
        <form className="form">
          <label className="label">Adress 2</label>
          <input className="input" type="text" placeholder="882 Well St, New York" />
          <hr />
        </form>
      </div>

      <button className='btn__adrees' >Specify on the map</button>
    </>
  );
}

export default Adress;
