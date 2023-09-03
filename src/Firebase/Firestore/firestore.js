import { DocumentSnapshot, collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";


//Traer todos los documentos del restaurante
export const traerRestaurantes = await getDocs(collection(db, "restaurantes"));
traerRestaurantes.forEach(async (doc) => {
    const data = doc.data()
    return data
});

//Traer todos los documentos del restaurante elegido
// export const traerRestaurante = async () => {
//     const docRef = doc(db, "restaurantes", "restaurante1"); 
//     const docSnap = await getDoc(docRef);
//     if (docSnap.exists()) {
//         console.log("Document data:", docSnap.data());
//     } else {
//         // docSnap.data() will be undefined in this case
//         console.log("No such document!");
//     }
// }
// export const nombreRestaurante  = async () => {
//     const docRef = doc(db, "restaurantes", "restaurante1");
//     console.log(docRef);
//     const nuevo = await getDoc(docRef);
//     if (nuevo.exists()) {
//         console.log("Document data:", nuevo.data().Platos);
//       } else {
//         // nuevo.data() will be undefined in this case
//         console.log("No such document!");
//       }
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



//Traer todos los documentos del plato elegido
export const traerPlato = async () => {
    const docRef = doc(db, "platos", "platos1"); 
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        const idRestaurante = docSnap.data().restauranteId
        const idActual = idRestaurante.id
        console.log(idActual);
        return docSnap.data()
    } else {
        console.log("No such document!");
    }
}









// const traerPlato = async () =>{
//     console.log();
//     const platoUnico = doc(db, "restaurantes", "pizza", "platos", "pizza1");    
//     console.log(platoUnico);

//     const docSnap = await getDoc(platoUnico);

//     if (docSnap.exists()) {
//         console.log(docSnap);
//     }

// }



// Acceder a un solo restaurante
// const docRef = doc(db, "restaurantes", "Pizza Hut");
// const docSnap = await getDoc(docRef);
// if (docSnap.exists()) {
//   console.log("Document data:", docSnap.data().Platos);
// } else {
//   // docSnap.data() will be undefined in this case
//   console.log("No such document!");
// }



// const querySnapshot2 = await getDocs(collection(db, "restaurantes", 'Pizza Hut'));
// querySnapshot.forEach((doc) => {
//   console.log(doc.id, "nombre del restaurante")
//   console.log(doc.data(), "datos del restaurante")
// });


// const ref = doc(db, "restaurantes", "Pizza Hut").withConverter(cityConverter);
// const docSnap = await getDoc(ref);
// if (docSnap.exists()) {
//   // Convert to City object
//   const city = docSnap.data();
//   // Use a City instance method
//   console.log(city.toString());
// } else {
//   console.log("No such document!");
// }

// const docRef = doc(db, "restaurantes", "Pizza Hut");
// const docSnap = await getDoc(docRef);

// if (docSnap.exists()) {
//   // Accede a la subcolección "platos" dentro de "Pizza Hut"
//   const platosCollectionRef = collection(docRef, "DetallePlato");
//     console.log(platosCollectionRef);
//   // Obtén los documentos de la subcolección "platos"
//   const platosQuerySnapshot = await getDocs(platosCollectionRef);

//   // Itera a través de los documentos de platos para encontrar la pizza de pollo
//   platosQuerySnapshot.forEach((platoDoc) => {
//     const platoData = platoDoc.data();
//     console.log(platoData);
//     // if (platoData.nombre === "Pizza de Pollo") {
//     //   // Accede a la descripción y el precio de la pizza de pollo
//     //   const descripcion = platoData.descripcion;
//     //   const precio = platoData.precio;

//     //   // Ahora puedes hacer lo que desees con la descripción y el precio
//     //   console.log("Descripción:", descripcion);
//     //   console.log("Precio:", precio);
//     // }
//   });
// } else {
//   console.log("No such document!");
// }


