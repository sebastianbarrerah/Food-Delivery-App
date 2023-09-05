
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
import RoutesPrivates from "./RoutesPrivates";
import Adress from "../adress/adress";
import Profile from "../profile/profile";
import ProfileEdit from "../profileEdit/profileEdit";
import Pay from "../pay/pay";
import DetallesOrden from "../detallesOrden/detallesOrden";


const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Start/>}/>
                <Route path="/slider" element={<Slider/>}/>
                <Route path="/verificacion" element={<Verificacion/>}/>
                <Route path="/initialSesion" element={<InitialSesion/>}/>
                <Route path="/acount" element={<Acount/>}/>   
                <Route path="/detallesOrden" element={<DetallesOrden />}/>
                <Route element={<RoutesPrivates/>}>
                    <Route path="/location" element={<Location/>}/>
                    <Route path="/home" element={<Home/>}/>            
                    <Route path="/search" element={<Search />}/>
                    <Route path="/restaurante/:restaurante" element={<DetailsRestaurant />}/>
                    <Route path="/pays" element={<Pay/>}/>
                    <Route path="/platos" element={<Plato />}/>
                    <Route path="/adress" element={<Adress />}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/profileEdit" element={<ProfileEdit/>}/>
                </Route>
                
            </Routes>
        </BrowserRouter>
    )
}
export default Router;

