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
import Support from "../support/support";
import LiveChat from "../liveChat/liveChat";
import SearchNoResults from "../searchNoResults/searchNoResults";
import Payment from "../payment/payment";
import AddNewCard from "../addNewCard/addNewCard";

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AddNewCard/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;