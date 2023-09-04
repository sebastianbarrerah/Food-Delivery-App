import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const RoutesPrivates = () => {
    const usuarioConectado = useSelector(state => state.online);

    return (
        <div>
            {usuarioConectado ? (
                // Renderizar las rutas privadas aquí si el usuario está conectado
                <Outlet />
            ) : (
                // Redirigir al usuario a otra página si no está conectado
                <Navigate to="/" replace={true} />
                // Utiliza el prop 'replace' para reemplazar la entrada en la pila de historial
            )}
        </div>
    );
};

export default RoutesPrivates;