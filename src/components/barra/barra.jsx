import React from 'react'
import back from "../../assets/imagenes/back.png"
import "./barra.scss"

import { useNavigate } from 'react-router-dom'

const barra = ({text, location}) => {
  const navigate = useNavigate()

  const handleClickBack = () => {
    navigate(`/${location}`)
}
  return (
    <div className='barra'>
      <img src={back} alt="Icon for go back" onClick={handleClickBack}/>
      <p>{text}</p>
    </div>
  )
}

export default barra 