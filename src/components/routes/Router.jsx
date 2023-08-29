import { BrowserRouter, Route, Routes } from "react-router-dom";
import Adress from "../adress/adress";
import Search from "../search/search";
import SearchLoaded from "../searchLoaded/searchLoaded";
import Orders from "../orders/orders";
import OrderDetails from "../ordersDetails/orderDetails";
import Profile from "../profile/profile";
import ProfileEdit from "../profileEdit/profileEdit";
import OrderAccepted from "../orderAccepted/orderAccepted";
import NoInternet from "../noInternet/noInternet";

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<NoInternet/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;