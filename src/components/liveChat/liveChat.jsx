import React from 'react'
import './liveChat.scss'
import barraCel from "../../assets/imagenes/barraCelular.png"
import back from "../../assets/imagenes/Back.png"
import ProfileUser from "../../assets/imagenes/ProfileImg.png";
import liveChat from "../../assets/imagenes/LiveChat.png";
import send from "../../assets/imagenes/sendd.png";
import { useNavigate } from 'react-router-dom';

function LiveChat() {
  const navigate = useNavigate()
  return (
    <>
    <img className="dataMobile" src={barraCel} alt="" />
      <div className="title__adress">
      <img src={back} alt="" onClick={() => navigate(-1)}/>
        <span className="title__page">Chat with specialist</span>
      </div>
      
      <section className='section__message'>
      <div className='liveChat'>
        <article className='outMessage'>
            <span className='out__message'>Good day i have a problem</span>
            <img className='out__img' src={ProfileUser} alt="" />
        </article>
        <article className='inMessage'>
            <figure className='in__fig'>
            <img className='in__img' src={liveChat} alt="" />
            </figure>
            <span className='in__message'>Hello i listen to you what happened</span>
        </article>
      </div>

      <div className='sendMessage'>
        <input className='input' type="text" placeholder='Send message' />
        <figure className='fig'>
        <img className='img' src={send} alt="" />
        </figure>
       
      </div>

      </section>

     
    </>
  )
}

export default LiveChat