import React, { useEffect, useState } from "react";
import "./ordersDetails.scss";
import barraCel from "../../assets/imagenes/barraCelular.png";
import back from "../../assets/imagenes/Back.png";
import HomeIcono from "../../assets/imagenes/Home1.png"
import SearchIcono from "../../assets/imagenes/Search.png"
import TimeIcono from "../../assets/imagenes/OrdersYellow.png"
import ProfileIcono from "../../assets/imagenes/Profile1.png"
import { useLocation, useNavigate } from "react-router-dom";

function OrderDetails() {
  const navigate = useNavigate()
  const location = useLocation();
  const [todo, settodo] = useState([])
  useEffect(() => {

    if (location.state ) {
      settodo(location.state)
      
    }
  }, [])
  

  
  return (
    <>
      <img className="dataMobile" src={barraCel} alt="" />
      <div className="number__details">
      <img src={back} alt="" onClick={() => navigate(-1)}/>
        <span className="title__page">26.11.2023</span>
      </div>
      <div className="food__details">
        <span className="quantity">1X</span>
        <span className="food">{todo.nombre}</span>
        <span className="price">{todo.precio}$</span>
      </div>

      <div className="costProduction__details">
        <span>Production cost</span>
        <span>{todo.total}$</span>
      </div>

      <div className="costDelivery__details">
      <span>Cost of delivery</span>
      <span>10$</span>
      </div>
      <hr className="line" />

      <div className="cost__total">
        <span>Total</span>
        <span>{todo.total + 10 }</span>
      </div>

      <div className="footer__principal">
                <img src={HomeIcono} alt="" onClick={() => navigate("/home")} />
                <img src={SearchIcono} alt="" onClick={() => navigate("/search")} />
                <img src={TimeIcono} alt="" />
                <img src={ProfileIcono} alt="" onClick={() => navigate("/profile")} />
            </div>
    </>
  );
}

export default OrderDetails;
