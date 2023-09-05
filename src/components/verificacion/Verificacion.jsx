import React, { useEffect, useState } from 'react'
import logo from'../../assets/imagenes/logo.png'
import celular from'../../assets/imagenes/barraCelular.png'
import numeros from'../../assets/imagenes/keyboard.png'
import verificacion from'../../assets/imagenes/verificacion.png'
import './verificacion.scss'
import { PhoneAuthProvider } from "firebase/auth";
import { auth } from '../../Firebase/firebaseConfig'
import { signInWithCredential } from 'firebase/auth';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import logout from '../auth.js'
import { useDispatch } from 'react-redux'

const Verificacion = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [verificationCode, setVerificationCode] = useState("");
  
  const verifyCode = async () => {
    try {
      const credential = PhoneAuthProvider.credential(
        window.confirmationResult.verificationId,
        verificationCode
      );
      const userCredential = await signInWithCredential(auth, credential);
      const user = userCredential.user;
   
      Swal.fire(
        "Excelente",
        `Usuario autenticado`,
        "success"
      );
      logout(dispatch)();
      navigate('/location')
  
      console.log("Usuario autenticado:", user);
    
    } catch (error) {
 
      console.error("Error al verificar el código:", error.code);
      Swal.fire(
        "Ops!",
        `Usuario no autenticado, intentalo de nuevo`,
        "error"
      );
    }
  };
  
  return (
    <section className='container__verificacion'>
        <div className='container__verificacion-1'>
            <img src={celular} alt="celuco1" className='celular'/>
            <img src={logo} alt="logo1" />
            <h1 className='titulo'>Verificacion</h1>
            <p className='texto'>Enter the four-digit code from SMS SMS not received. Send again?</p>
            <input type="number" name="" id="" value={verificationCode}  onChange={(e) => setVerificationCode(e.target.value)}/>
            <img src={verificacion} alt="verificacion1" className='verificacion'/>
            <button onClick={verifyCode} className='btn__next1'>Next</button>
        </div>
     
        <img src={numeros} alt="numeros1" className='numeros'/>
   </section>
  )
}

export default Verificacion;