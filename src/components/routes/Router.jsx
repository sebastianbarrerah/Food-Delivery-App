
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
import OrderAccepted from "../orderAccepted/orderAccepted";
import Orders from "../orders/orders";
import OrderDetails from "../ordersDetails/orderDetails";
import Support from "../support/support";
import LiveChat from "../liveChat/liveChat";
import Payment from "../payment/payment";
import AddNewCard from "../addNewCard/addNewCard";
import NoInternet from "../noInternet/noInternet";


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
                    <Route path="/ordenAceptada" element={<OrderAccepted/>}/>
                    <Route path="/ordenes" element={<Orders/>}/>
                    <Route path="/orderDetails" element={<OrderDetails />}/>
                    <Route path="/Support" element={<Support />}/>
                    <Route path="/liveChat" element={<LiveChat />}/>
                    <Route path="/liveChat" element={<LiveChat />}/>
                    <Route path="/payment" element={<Payment />}/>
                    <Route path="/addCard" element={<AddNewCard />}/>
                    <Route path="/NoInternet" element={<NoInternet />}/>

                </Route>
                
            </Routes>
        </BrowserRouter>
    )
}
export default Router;




