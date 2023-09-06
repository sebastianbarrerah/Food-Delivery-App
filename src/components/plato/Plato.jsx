import { useLocation } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import comida2 from '../../assets/imagenes/comida2.png'
import './plato.scss'
import atras from '../../assets/imagenes/Back.png'
import horas from '../../assets/imagenes/relojPequeñp.png'
import celularBarra from '../../assets/imagenes/barraCelular.png'
import { useNavigate } from 'react-router-dom'

const Plato = () => {
    const [datosDetalles, setdatosDetalles] = useState({})
    const [ingredientesSeleccionados, setIngredientesSeleccionados] = useState([])
    const [contadorIngredientes, setcontadorIngredientes] = useState(0)
    const [contadorSumayResta, setcontadorSumayResta] = useState(0)

    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        if (location.state) {
            setdatosDetalles(location.state)
        }
    }, [])

    const suma = () => {
        setcontadorSumayResta(contadorSumayResta + 25)
    }
    const resta = () => {
        setcontadorSumayResta(contadorSumayResta - 25)
    }


    const handleCheckboxChange = (nombreIngrediente) => {

        if (ingredientesSeleccionados.includes(nombreIngrediente)) {
            // Si está en la lista, lo removemos
            setIngredientesSeleccionados(prevSeleccionados => prevSeleccionados.filter(item => item !== nombreIngrediente))
            setcontadorIngredientes(prevContador => prevContador - 1)
        } else {
            // Si no está en la lista, lo agregamos
            setIngredientesSeleccionados(prevSeleccionados => [...prevSeleccionados, nombreIngrediente])
            setcontadorIngredientes(prevContador => prevContador + 1)
        }
        console.log(ingredientesSeleccionados, "seleccionados");
    }
    const irPagar = () => {
        navigate('/pays', {
          state: {
            datosDetalles: datosDetalles,
            ingredientesSeleccionados: ingredientesSeleccionados,
            contadorSumayResta: contadorSumayResta,
          }
        });
      }

    return (
        <section className='container__plato'>
            <div className='plato__container'>
                <img src={celularBarra} className='celular9' alt="Estado celular" onClick={() => navigate(-1)} />
                <img src={datosDetalles.image} className='plato__img' alt='comida' />
                <img src={atras} className='atras9' alt="Estado celular" />
                <div className='container__infoElegido'>
                    <div className='elegido__desTitulo'>
                        <h3 className="titulo__elelgido">{datosDetalles.nombre}</h3>
                        <span className='descripcion__elelgido'>Deliciosa comida preparada con los mejores alimentos del mercado buscando siempre la mejor calidad!</span>
                    </div>
                    <img src={horas} alt="reloj" className="horas" />
                    <span className='hora' >15 -20 min</span>
                </div>

                <h3 className='adicion'>Additional Ingredients</h3>
                {["Tomates", "Jamon", "Queso"].map((ingrediente, index) => (
                    <div className='ingredientes' key={index}>
                        <input
                            type="checkbox"
                            name={ingrediente}
                            id={ingrediente}
                            className="inputC"
                            onChange={() => handleCheckboxChange(ingrediente)}
                            checked={ingredientesSeleccionados.includes(ingrediente)}
                        />
                        <span className='nombreIngrediente'>{ingrediente}</span>
                        <div>
                            <span className='cantidad'>+25</span>
                        </div>
                    </div>
                ))}
                <h4 className='contador__ingredientes'>ingredientes seleccionados: {contadorIngredientes} </h4>
                <div className='botones'>
                    <button className='boton__can'> <button className='btn__adicion' onClick={resta}>-</button> Buy <button className='btn__adicion' onClick={suma}>+</button></button>
                    <button className='boton__buy' onClick={irPagar}>Add to cart: $ {contadorSumayResta}</button>
                </div>
            </div>
        </section>
    )
}

export default Plato