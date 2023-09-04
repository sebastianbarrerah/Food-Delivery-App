import React, { useState } from "react";
import barraCel from "../../assets/imagenes/barraCelular.png"
import back from "../../assets/imagenes/Back.png"
import mapIcono from "../../assets/imagenes/ubiNegro.png"
import './adress.scss'
import { useNavigate } from "react-router-dom";

function Adress() {

  const navigate = useNavigate()
  const [valor, setValor] = useState("")
  
  const direccion = (e) => {
    setValor(e.target.value)
  };

  const traerDireccion = (valor) =>{
    console.log(valor)
    navigate('/home', {state:valor})
  }


  return (

    <>
      <img className="dataMobile" src={barraCel} alt="" />
      <div className="title__adress">
        <img src={back} alt="" onClick={()=>{traerDireccion(valor)}} />
        <span className="title__page">Manage adresses</span>
      </div>
      
      <div className="form__adress">
        <img className="img" src={mapIcono} alt="" />
        <form className="form" >
          <label className="label">Adress 1</label>
          <input className="input" type="text" placeholder="882 Well St, New York" value={valor} onChange={direccion}/>
          <hr />
        </form>
      </div>

      <div className="form__adress">
        <img className="img" src={mapIcono} alt="" />
        <form className="form">
          <label className="label">Adress 2</label>
          <input className="input" type="text" placeholder="Opcional" />
          <hr />
        </form>
      </div>

      <button className='btn__adrees' onClick={()=>{traerDireccion(valor)}} >Specify on the map</button>
    </>
  );
}

export default Adress;
