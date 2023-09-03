
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Start from "../start/Start";
import Slider from "../slider/Slider";
import Acount from "../acount/Acount";
import Location from "../location/Location";
import Home from "../home/Home";
import DetailsRestaurant from '../details/DetailsRestaurant';
import Plato from '../plato/Plato';
import Verificacion from '../verificacion/Verificacion';
import InitialSesion from '../iniatialSesion/initialSesion';
import Search from '../search/search';
// import { RoutesPrivates } from "./routesPrivates";

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Start/>}/>
                <Route path="/slider" element={<Slider/>}/>
                <Route path="/verificacion" element={<Verificacion/>}/>
                <Route path="/initialSesion" element={<InitialSesion/>}/>
                <Route path="/acount" element={<Acount/>}/>
                {/* <Route element={<RoutesPrivates/>}> */}
                    {/* Aqui van las rutas privadas */}
                {/* </Route> */}
                <Route path="/location" element={<Location/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/search" element={<Search />}/>
                <Route path="/restaurante/:restaurante" element={<DetailsRestaurant />}/>
                <Route path="/platos" element={<Plato />}/>
             
            </Routes>
        </BrowserRouter>
    )
}
export default Router;
