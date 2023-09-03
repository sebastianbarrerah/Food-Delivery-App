import { useNavigate } from 'react-router-dom'
import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


export const RoutesPrivates = () => {

    const usuarioConectado = useSelector(state => state.online)
    
    const navigate = useNavigate()

    const logOut = () => {
        if (!usuarioConectado) {
         return navigate('/Start')
        }
    }

    useEffect(() => {
      logOut()
    }, [])
    
    
  return (
    <div>routesPrivates</div>
  )
}

export default Outlet;