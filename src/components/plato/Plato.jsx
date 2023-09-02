import React from 'react'
import comida2 from'../../assets/imagenes/comida2.png'
import './plato.scss'
import atras from'../../assets/imagenes/Back.png'
import horas from'../../assets/imagenes/relojPequeñp.png'
import celularBarra from'../../assets/imagenes/barraCelular.png'
const Plato = () => {
  return (
    <section className='container__plato'>
        <div className='plato__container'>
         <img src={celularBarra} className='celular9' alt="Estado celular" /> 
         <img src={comida2} className='plato__img' alt='comida' />
         <img src={atras} className='atras9' alt="Estado celular" /> 
         <div className='container__infoElegido'>
            <div className='elegido__desTitulo'>
                <h3 className="titulo__elelgido">Nombre del restaurante</h3>
                <span className='descripcion__elelgido'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto eveniet sed ipsum laboriosam voluptas nostrum! Repellat quas iusto odio eveniet!</span>
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
                <span className='nombreIngrediente'>Tomates</span>
                <div>
                    <span className='cantidad'>+25</span>
                </div>
            </div>
            <div className='ingredientes'>
                <input type="checkbox" name="" id=""  className="inputC"/>
                <span className='nombreIngrediente'>Tomates</span>
                <div>
                    <span className='cantidad'>+25</span>
                </div>
            </div>
            <div className='botones'>
                <button className='boton__can'>Buy</button>
                <button className='boton__buy'>Add to cart</button>
            </div>

        </div>
    </section>
  )
}

export default Plato