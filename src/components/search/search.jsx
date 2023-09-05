import { useNavigate } from 'react-router-dom';
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
import '../searchLoaded/searchLoaded.scss';


function Search() {
 
  const datos = useSelector(state => state.restaurantes)
  console.log(datos)
  const [filtro, setFiltro] = useState([]);
  const navigate = useNavigate();

  const valorInput = (e) => {
    const datoBuscar = e.target.value;
    setFiltro(datoBuscar); // Actualiza el estado con el valor del input
  }

  const datoFiltrado = datos.filter((dato) => dato.nombre.toLowerCase().includes(filtro))
  console.log(datoFiltrado)

  return (
    <>
      <img className="dataMobile" src={barraCel} alt="" />
      <div className="input__search">
        <img className="img" src={searchIcono} alt="" />
        <input className="input" type="text" placeholder="Search for a dish" onChange={(e) => { valorInput(e) }} />
      </div>
      <div className="recent__search">

        {
          (filtro.length === 0) ? (
            datoFiltrado.map((element, index) => (
              <div key={index}>
                <h3 className="title__h3">Recent searches</h3>
                <article className="update__data">
                  <img src={loadingIcono} alt="" />
                  <span>{element.nombre}</span>
                </article>
              </div>
            ))

          ) :
            (
              datoFiltrado.map((element, index) => (
                <div className="food__found" key={index}>
                  <img className="img" src={element.imagen} alt="" />
                  <article className="data">
                    <span className="spanFood">{element.nombre}</span>
                    {/* <span className="spanPrice">45 lukas</span> */}
                  </article>
                </div>
              ))
            )
        }

      </div>



      <div className="footer__principal">
        <img src={HomeIcono} alt="" onClick={() => { navigate("/home") }} />
        <img src={SearchIcono} alt="" />
        <img src={TimeIcono} alt="" />
        <img src={ProfileIcono} alt="" onClick={() => { navigate("/profile") }}/>
      </div>
    </>
  );
}

export default Search;
