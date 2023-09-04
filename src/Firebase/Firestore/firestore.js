import { DocumentSnapshot, collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { estadoPlatos } from "../../features/platosSlice/platosSlice";


//Traer todos los documentos de restaurantes
export const traerRestaurantes = await getDocs(collection(db, "restaurantes"));
traerRestaurantes.forEach(async (doc) => {
    const data = doc.data()
    return data
});

//Traer todos los documentos de platos
export const dataPlatos =  () => {
    return  async (dispatch) => {
        const traerPlatos = await getDocs(collection(db, "platos"));
        
        try {
            traerPlatos.forEach((doc) => {
                const data = doc.data()
                dispatch(estadoPlatos(data))
                console.log(data);
            })
        } catch (error) {
            console.log(error);
        }
    }
}


  





























// //Traer todos los documentos del plato elegido
// export const traerPlato = async () => {
//     const docRef = doc(db, "platos", "platos1"); 
//     const docSnap = await getDoc(docRef);
//     if (docSnap.exists()) {
//         const idRestaurante = docSnap.data().restauranteId
//         const idActual = idRestaurante.id
//         console.log(idActual);
//         return docSnap.data()
//     } else {
//         console.log("No such document!");
//     }
// }


// // Acceder a un solo restaurante
// const docRef = doc(db, "restaurantes", "Pizza Hut");
// const docSnap = await getDoc(docRef);
// if (docSnap.exists()) {
//   console.log("Document data:", docSnap.data().Platos);
// } else {
//   // docSnap.data() will be undefined in this case
//   console.log("No such document!");
// }
