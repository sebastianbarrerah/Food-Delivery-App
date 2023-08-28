import React from "react";
import barraCel from "../../assets/imagenes/barraCelular.png";
import searchIcono from "../../assets/imagenes/SearchGrey.png";
import loadingIcono from "../../assets/imagenes/cargandoGris.png";
import HomeIcono from "../../assets/imagenes/Home1.png"
import SearchIcono from "../../assets/imagenes/Search1.png"
import TimeIcono from "../../assets/imagenes/Orders1.png"
import ProfileIcono from "../../assets/imagenes/Profile1.png"
import "./search.scss";

function Search() {
  return (
    <>
      <img className="dataMobile" src={barraCel} alt="" />
      <div className="input__search">
        <img className="img" src={searchIcono} alt="" />
        <input className="input" type="text" placeholder="Search for a dish" />
      </div>
      <div className="recent__search">
        <h3 className="title__h3">Recent searches</h3>
        <article className="update__data">
          <img src={loadingIcono} alt="" />
          <span>Pizza</span>
        </article>

        <article className="update__data">
          <img src={loadingIcono} alt="" />
          <span>Burger</span>
        </article>

        <article className="update__data">
          <img src={loadingIcono} alt="" />
          <span>Sushi</span>
        </article>
      </div>

      <div className="footer__principal">
        <img src={HomeIcono} alt="" />
        <img src={SearchIcono} alt="" />
        <img src={TimeIcono} alt="" />
        <img src={ProfileIcono} alt="" />
      </div>
    </>
  );
}

export default Search;
