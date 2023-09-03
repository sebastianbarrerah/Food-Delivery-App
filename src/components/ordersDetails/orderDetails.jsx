import React from "react";
import "./ordersDetails.scss";
import barraCel from "../../assets/imagenes/barraCelular.png";
import back from "../../assets/imagenes/Back.png";
import HomeIcono from "../../assets/imagenes/Home1.png"
import SearchIcono from "../../assets/imagenes/Search.png"
import TimeIcono from "../../assets/imagenes/OrdersYellow.png"
import ProfileIcono from "../../assets/imagenes/Profile1.png"

function OrderDetails() {
  return (
    <>
      <img className="dataMobile" src={barraCel} alt="" />
      <div className="number__details">
        <img src={back} alt="" />
        <span className="title__page">26.11.2023</span>
      </div>
      <div className="food__details">
        <span className="quantity">1X</span>
        <span className="food">Meat Pizza (medium)</span>
        <span className="price">$35.50</span>
      </div>
      <div className="food__details">
        <span className="quantity">1X</span>
        <span className="food">Combined Pizza (small)</span>
        <span className="price">$30.99</span>
      </div>

      <div className="costProduction__details">
        <span>Production cost</span>
        <span>$66.49</span>
      </div>

      <div className="costDelivery__details">
      <span>Cost of delivery</span>
      <span>$8.00</span>
      </div>
      <hr className="line" />

      <div className="cost__total">
        <span>Total</span>
        <span>$74.49</span>
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

export default OrderDetails;
