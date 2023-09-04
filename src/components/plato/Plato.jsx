import { useLocation } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import comida2 from'../../assets/imagenes/comida2.png'
import './plato.scss'
import atras from'../../assets/imagenes/Back.png'
import horas from'../../assets/imagenes/relojPequeñp.png'
import celularBarra from'../../assets/imagenes/barraCelular.png'
import { useNavigate } from 'react-router-dom'
import { set } from 'react-hook-form'
const Plato = () => {
    const [datosDetalles, setdatosDetalles] = useState({})
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        if (location.state){
            setdatosDetalles(location.state)
            console.log(datosDetalles, "detalles datos");
        }
    }, [])
    

  
  return (
    <section className='container__plato'>
        <div className='plato__container'>
         <img src={celularBarra} className='celular9' alt="Estado celular" onClick={()=>navigate('/home')}/> 
         <img src={comida2} className='plato__img' alt='comida' />
         <img src={atras} className='atras9' alt="Estado celular" /> 
         <div className='container__infoElegido'>
            <div className='elegido__desTitulo'>
                <h3 className="titulo__elelgido">{datosDetalles.nombre}</h3>
                <span className='descripcion__elelgido'>DESCRIPCION DE EL PLATO DE COMIDA ELEGIGO</span>
            </div>
            <img src={horas} alt="reloj" className="horas" />
            <span className='hora' >15 -20 min</span>
        </div>

            <h3 className='adicion'>Additional Ingredients</h3>
            <div className='ingredientes'>
                <input type="checkbox" name="" id=""  className="inputC"/>
                <span className='nombreIngrediente'>Tomates</span>
                <div>
                    <span className='cantidad'>+25</span>
                </div>
            </div>
            <div className='ingredientes'>
                <input type="checkbox" name="" id=""  className="inputC"/>
                <span className='nombreIngrediente'>Cebolla</span>
                <div>
                    <span className='cantidad'>+25</span>
                </div>
            </div>
            <div className='ingredientes'>
                <input type="checkbox" name="" id=""  className="inputC"/>
                <span className='nombreIngrediente'>Queso</span>
                <div>
                    <span className='cantidad'>+25</span>
                </div>
            </div>
            <div className='botones'>
                <button className='boton__can'> <button className='btn__adicion'>-</button> Buy <button className='btn__adicion'>+</button></button>
                <button className='boton__buy'>Add to cart</button>
            </div>

        </div>
    </section>
  )
}

export default Plato