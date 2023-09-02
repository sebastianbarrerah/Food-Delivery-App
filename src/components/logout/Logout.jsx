import React from 'react'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../Firebase/firebaseConfig'
import { useDispatch } from 'react-redux';
import { estadoOnline } from '../../features/stateSlice/stateSlice';


const Logout = () => {

    const dispatch = useDispatch(); 
    const estadoNuevo = onAuthStateChanged(auth, (line) => {
        if (line) {
            // El usuario ha iniciado sesión
            console.log('CONECTADO: MENSAJE DEL ESTADO', line);
            dispatch(estadoOnline(true)); // Actualiza el estado con el usuario autenticado
        } else {
            // El usuario ha cerrado sesión o no está autenticado
            console.log('DESCONECTADO MENSAJE DEL ESTADO');
            dispatch(estadoOnline(false)); // Actualiza el estado para indicar que no hay usuario autenticado
        }
    })
    return(
        <></>
    )
};


export default Logout;