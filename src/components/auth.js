import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Firebase/firebaseConfig';
import { estadoOnline } from '../features/stateSlice/stateSlice';


const logout = () => {
    return async (dispatch) => {
      try {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            // El usuario ha iniciado sesión
            console.log('CONECTADO: MENSAJE DEL ESTADO', user);
            dispatch(estadoOnline(true)); // Actualiza el estado con el usuario autenticado
          } else {
            // El usuario ha cerrado sesión o no está autenticado
            console.log('DESCONECTADO MENSAJE DEL ESTADO');
            dispatch(estadoOnline(false)); // Actualiza el estado para indicar que no hay usuario autenticado
          }
        });
      } catch (error) {
        console.log(error.code);
      }
    };
  };
    
     


    export default logout;