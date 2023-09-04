import React from 'react'
import logo from '../../assets/imagenes/logo.png'
import telefono from '../../assets/imagenes/telefono.png'
import linea from '../../assets/imagenes/linea-amarilla.png'
import celular from '../../assets/imagenes/barraCelular.png'
import './login.scss'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
import { auth } from '../../Firebase/firebaseConfig'
import { RecaptchaVerifier, signInWithPhoneNumber, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useDispatch } from 'react-redux'
import logout from '../auth'


const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm()

  //Función que genera el recaptcha
  const generateRecaptcha = () => {
    try {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptch-container', {
        'size': 'invisible',
        'callback': () => { },
      });
      return window.recaptchaVerifier;
    } catch (error) {
      console.log(error, "error, este es primero");
      return null;
    }
  };

  const sendSms = async (number, recaptchaVerifier) => {
    try {
      const response = await signInWithPhoneNumber(auth, `+57${number}`, recaptchaVerifier);
      window.confirmationResult = response;
      Swal.fire(
        "Excelente",
        `Te enviaremos un mensaje para confirmar a ${number}`,
        "success"
      );
      navigate('/verificacion');
      
      
    } catch (error) {
      console.log(error.code);
      Swal.fire(
        "Ops!",
        `Ocurrió un error al realizar tu solicitud, intentalo de nuevo`,
        "error"
      );
    }
  };


  const onSubmit = (data) => {
    generateRecaptcha(data.phone);
    const appVerifier = window.recaptchaVerifier;
    const newPhone = data.phone;
    sendSms(newPhone, appVerifier);
  }

  const loginGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider()
        const dataGoogle = await signInWithPopup(auth, provider)
        Swal.fire(
          "Excelente",
          `Usuario autenticado`,
          "success"
        );
  
        console.log(dataGoogle);
        navigate('/location')
        // dispatch(logout(dataGoogle));
        logout(dispatch)();
    } catch (error) {
      Swal.fire(
        "Ops!",
        `Ocurrió un error al realizar tu solicitud, intentalo de nuevo`,
        "error"
      );
      console.log(error.code);
    }
  }

  return (
    <section className='container__login'>
      <img src={celular} alt="celuco" className='cel' />
      <img src={logo} alt="logo" />
      <h3>Sing in</h3>
      <p className='parrafo'>Login or create an account with your phone number to start ordering</p>

      <form onSubmit={handleSubmit(onSubmit)} className="form__autenticacion">
        <div className='div__inputs'>
          <img src={telefono} alt="" />
          <select name="" id="">
            <option value="colombia">+ 57</option>
            <option value="venezuela">+ 58</option>
            <option value="ecuador">+56</option>
            <option value="usa">+ 1</option>
            <option value="españa"> + 2</option>
            <option value="alemania">+ 15</option>🇧🇴 🇦🇲
          </select>
          <input type="number" className='input__numero' {...register("phone")} />
        </div>
        <img src={linea} alt="linea" />
        <div className='advertencia'>
          <span className='derechos__autor'>By clicking the button next you accept</span>
          <span className='derechos__autor'>Terms of use</span>
        </div>

      <div className='btn__autenticacion'>
      <button type="submit" className='btn__next1'>login</button>
      <button  className='btn__next1' type="button" onClick={loginGoogle}>Iniciar sesión con Google</button>
      <button onClick={()=>navigate('/initialSesion')} className='btn__next1' type="button">Iniciar sesión con email y contraseña</button>
      </div>

      </form>
      <div id="recaptch-container"></div>
    </section>
  )
}

export default Login