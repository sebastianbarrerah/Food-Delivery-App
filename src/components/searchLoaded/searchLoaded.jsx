import React from "react";
import barraCel from "../../assets/imagenes/barraCelular.png";
import searchIcono from "../../assets/imagenes/SearchGrey.png";
import trashIcono from "../../assets/imagenes/TrashGrey.png";
import HomeIcono from "../../assets/imagenes/Home1.png";
import SearchIcono from "../../assets/imagenes/Search1.png";
import TimeIcono from "../../assets/imagenes/Orders1.png";
import ProfileIcono from "../../assets/imagenes/Profile1.png";
import Comida1 from "../../assets/imagenes/comidaPizza1.png";
import Comida2 from "../../assets/imagenes/pizza1.png";
import Comida3 from "../../assets/imagenes/pizza2.png";
import Comida4 from "../../assets/imagenes/pizza3.png";

import "./searchLoaded.scss";

function SearchLoaded() {
  return (
    <>
      <img className="dataMobile" src={barraCel} alt="" />
      <div className="input__search">
        <img className="img" src={searchIcono} alt="" />
        <input className="input" type="text" placeholder="Search for a dish" />
        <img className="img" src={trashIcono} alt="" />
      </div>

      <div className="sectionFood__found">
        <div className="food__found">
          <img className="img" src={Comida1} alt="" />
          <article className="data">
            <span className="spanFood">Meat Pizza</span>
            <span className="spanPrice">$ 29.00</span>
          </article>
        </div>
        <div className="food__found">
          <img className="img" src={Comida2} alt="" />
          <article className="data">
            <span className="spanFood">Combined pizza</span>
            <span className="spanPrice">$ 31.00</span>
          </article>
        </div>
        <div className="food__found">
          <img className="img" src={Comida3} alt="" />
          <article className="data">
            <span className="spanFood">Pizza with meat and mushrooms</span>
            <span className="spanPrice">$ 26.00</span>
          </article>
        </div>
        <div className="food__found">
          <img className="img" src={Comida4} alt="" />
          <article className="data">
            <span className="spanFood">Hawaiian pizza</span>
            <span className="spanPrice">$ 35.00</span>
          </article>
        </div>
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

export default SearchLoaded;
