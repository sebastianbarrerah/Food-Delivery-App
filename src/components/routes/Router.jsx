import { Navigate } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Start from "../start/Start";
import Slider from "../slider/Slider";
import Verificacion from "../verificacion/verificacion";
import Acount from "../acount/Acount";
import Location from "../location/Location";
import Home from "../home/Home";
import DetailsRestaurant from '../details/DetailsRestaurant';
import Plato from '../plato/Plato';

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Start/>}/>
                <Route path="/slider" element={<Slider/>}/>
                <Route path="/verificacion" element={<Verificacion/>}/>
                <Route path="/acount" element={<Acount/>}/>
                <Route path="/location" element={<Location/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/restaurant" element={<DetailsRestaurant />}/>
                <Route path="/platos" element={<Plato />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;