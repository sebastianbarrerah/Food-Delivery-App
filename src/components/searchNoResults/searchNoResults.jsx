import React from 'react'
import barraCel from "../../assets/imagenes/barraCelular.png";
import searchIcono from "../../assets/imagenes/SearchGrey.png";
import imgNoFound from "../../assets/imagenes/mujerconLampara.png";

function SearchNoResults() {
  return (
    <>
    <img className="dataMobile" src={barraCel} alt="" />
      <div className="input__search">
        <img className="img" src={searchIcono} alt="" />
        <input className="input" type="text" placeholder="Search for a dish" />
      </div>

      <div className='data__noInternet'>
      <img className='imgCheck' src={imgNoFound } alt="" />
      <span className='span__noInternet'>Nothing found</span>
      </div>
    </>
  )
}

export default SearchNoResults