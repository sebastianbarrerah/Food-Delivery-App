import {  useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import barraCel from "../../assets/imagenes/barraCelular.png";
import searchIcono from "../../assets/imagenes/SearchGrey.png";
import loadingIcono from "../../assets/imagenes/cargandoGris.png";
import HomeIcono from "../../assets/imagenes/Home1.png"
import SearchIcono from "../../assets/imagenes/Search1.png"
import TimeIcono from "../../assets/imagenes/Orders1.png"
import ProfileIcono from "../../assets/imagenes/Profile1.png"
import "./search.scss";
import { useSelector } from 'react-redux';


function Search() {
  const datos = useSelector(state => state.restaurantes )
  const [filtro, setFiltro] = useState([]);

  const valorInput = ({target}) => {
    const datoBuscar = target.value; 
    setFiltro(datoBuscar)
  
    const restaurantesFiltrados = datos.filter(dato => {
      // Filtra los datos en función del valor ingresado en el input
      return dato.nombre.toLowerCase().includes(filtro.toLowerCase());
    });
    setFiltro(restaurantesFiltrados)
  
  }

  //  console.log(filtro);



  const navigate = useNavigate();


  return (
    <>
      <img className="dataMobile" src={barraCel} alt="" />
      <div className="input__search">
        <img className="img" src={searchIcono} alt="" />
        <input className="input" type="text" placeholder="Search for a dish" onChange={(e) => {valorInput(e)}}/>
      </div>
      <div className="recent__search">
        {/* {
          filtro.map((element, index) => (
            <div key={index}>
              <h3 className="title__h3">Recent searches</h3>
              <article className="update__data">
                <img src={loadingIcono} alt="" />
                <span>{element.nombre}</span>
              </article>
            </div>
          ))
        } */}

      </div>

      <div className="footer__principal">
        <img src={HomeIcono} alt="" onClick={() => {navigate("/home")}}/>
        <img src={SearchIcono} alt="" />
        <img src={TimeIcono} alt="" />
        <img src={ProfileIcono} alt="" />
      </div>
    </>
  );
}

export default Search;
