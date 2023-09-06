import React, { useEffect, useState } from 'react'
import celularBarra from '../../assets/imagenes/barraCelular.png'
import atras from '../../assets/imagenes/Back.png'
import buscar from '../../assets/imagenes/ubicacion.png'
import derecha from '../../assets/imagenes/flechaDerecha.png'
import pizza from '../../assets/imagenes/pizza1.png'
import './pay.scss'
import { useLocation, useNavigate } from 'react-router-dom'


const Pay = () => {
    const navigate = useNavigate()
    const [datosPedido, setDatosPedido] = useState({})
    const [seleccionados, setSeleccionados] = useState([])
    const [contador, setContador] = useState(0)
    const [cantidad, setCantidad] = useState(0)
    const [notasDelUsuario, setNotasDelUsuario] = useState('')

    const location = useLocation()
    useEffect(() => {
        if (location.state.datosDetalles) {
            setDatosPedido(location.state.datosDetalles);
        }
    }, []);

    useEffect(() => {
        if (location.state.ingredientesSeleccionados) {
            setSeleccionados(location.state.ingredientesSeleccionados);
        }
    }, []);

    useEffect(() => {
        if (location.state.contadorSumayResta) {
            setContador(location.state.contadorSumayResta);
        }
    }, []);

    let multiplicacion = cantidad * datosPedido.precio;

    const notaUsuario = (e) => {
        const notaPedido = e.target.value;
        setNotasDelUsuario(notaPedido);
    
    }

    const totalVariables = multiplicacion + contador + 10;


    return (
        <section className="container__pay">
            <img src={celularBarra} className='celular' alt="Estado celular" />
            <img src={atras} className='atras' alt="Estado celular" onClick={() => navigate(-1)} />
            <div className="ubicacion__pay">
                <span className='title__pay'>New Order</span>
                <span className='deliverTo'>Deliver to</span>
                <div className="logo__ubicacion">
                    <div>
                        <img src={buscar} alt="" className='iconoUbicacion' />
                        <span>882 Well St, New-York</span>
                    </div>
                    <img src={derecha} alt="" className='flechaDerecha' />
                </div>
            </div>
            <div className='titulo__slice'>
                <h2 className='titulo__delivery'>Payment</h2>
               
            </div>
            <div className="container__compra">
                <div className="food__found" >
                    <img className="img" src={datosPedido.image} alt="" />
                    <span className='btn__plus'>
                        <button className='btn__contador' onClick={() => setCantidad(cantidad - 1)}>-1</button>
                       
                         {cantidad <= - 0 ? 0 : cantidad} 

                         <button className='btn__contador' onClick={() => setCantidad(cantidad + 1)}>+1</button>
                    </span>

                    <article className="data">
                        <span className="spanFood">{datosPedido.nombre}</span>
                        <span className="spanPrice">
                           {datosPedido.precio}
                        </span>
                    </article>
                </div>
            </div>


            <div className='notas'>
                <h2 className='title__note'>Note</h2>
                <input type="text" className='input__note' placeholder='Write a note' onChange={(e) => {notaUsuario(e)}}/>
            </div>
            <div className='container__pagar'>
                <div className="total__pagar">
                    <h3 className='subtitulo'>Producto</h3>
                    <span> {cantidad * datosPedido.precio <= - 0 ? "agrega cantidades" : cantidad * datosPedido.precio } $</span>
                </div>
                <div className="total__pagar">
                    <h3 className='subtitulo'>Adiciones</h3>
                    <span> {contador}$</span>
                </div>
                <div className="total__pagar">
                    <h3 className='subtitulo'>Delivery</h3>
                    <span>10 $</span>
                </div>
                <hr />
                <div className='subtotal'>
                    <h3 className='total__pago'>Total</h3>
                    <span>{`${totalVariables}$`}</span>
                </div>
            </div>
            <button className='button__location4' onClick={() => navigate('/detallesOrden'
                , { state: { datosDetalles: datosPedido, precio: multiplicacion + 10, cantidad: cantidad, notas: notasDelUsuario, total: totalVariables} }
            )}>Order</button>

        </section>
    )
}

export default Pay;

