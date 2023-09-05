import React, { useEffect, useState } from 'react'
import celularBarra from '../../assets/imagenes/barraCelular.png'
import atras from '../../assets/imagenes/Back.png'
import buscar from '../../assets/imagenes/ubicacion.png'
import principal from '../../assets/imagenes/confirmadoyTiempo.png'
import './detallesOrden.scss'
import { addDoc, collection, getDocs, or } from 'firebase/firestore'
import { db } from '../../Firebase/firebaseConfig'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'



const DetallesOrden = () => {
    const usuario = useSelector(state => state.users)
    console.log(usuario[0].nombre);
   
    const [ordenFinal, setordenFinal] = useState({})
    const [precio, setPrecio] = useState(0)
    const [cantidad, setCantidad] = useState(0)

    const datosCompra = {
        usuario: usuario[0].nombre,
        nombre: ordenFinal.nombre,
        cantidad: cantidad,
        precio: precio,
        idRestaurante: ordenFinal.idRestaurante
      }
    
    const allOrdenes = async () => {
        const traerOrdenes = await getDocs(collection(db, "ordenes"));
        traerOrdenes.forEach(async (doc) => {
            const data = doc.data()
            return data
        });
    }

    console.log(datosCompra);
    const llevarOrdenes = async (datosCompra) => {
        try {
          const docRef = await addDoc(collection(db, "ordenes"), datosCompra);
          console.log("Documento agregado con ID: ", docRef.id);
        } catch (error) {
          console.error(error.code);
        }
      };
      
      // Llamar a la función con los datos que deseas agregar
      llevarOrdenes(datosCompra);




        const location = useLocation()
        useEffect(() => {
          if (location.state.datosDetalles) {
            setordenFinal(location.state.datosDetalles)
        
          }
        }, [])
        
        useEffect(() => {
          if (location.state.precio) {
            setPrecio(location.state.precio)
          }
        }, [])
        useEffect(() => {
          if (location.state.cantidad) {
            setCantidad(location.state.cantidad)
       
          }
        }, [])
        
    allOrdenes()
  

    return (
        <section className="container__pay">
            <img src={celularBarra} className='celular' alt="Estado celular" />
            <img src={atras} className='atras' alt="Estado celular"  />
           
           <img src={principal} alt="" />
            <div className="container__compra">
                <h1>current orden</h1>
                <div className="food__found" >
                    <img className="img" src="" alt="" />
                    <span className='btn__plus'>
                        <button className='btn__contador' >+1</button>
                        
                        <button className='btn__contador' >-1</button>
                    </span>

                    <article className="data">
                        <span className="spanFood">fdgdfgdg</span>
                        <span className="spanPrice">
                           fghfghfg
                        </span>
                    </article>
                </div>
            </div>

            <div className='container__pagar'>
                <div className="total__pagar">
                    <h3 className='subtitulo'>Producto</h3>
                    <span> 6$</span>
                </div>
                <div className="total__pagar">
                    <h3 className='subtitulo'>Delivery</h3>
                    <span>10 $</span>
                </div>
                <hr />
                <div className='subtotal'>
                    <h3 className='total__pago'>Total</h3>
                    <span></span>
                </div>
            </div>
            <button className='button__location'>Order</button>

        </section>
    )
}


export default DetallesOrden;