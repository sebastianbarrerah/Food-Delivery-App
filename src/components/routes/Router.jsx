import { BrowserRouter, Route, Routes } from "react-router-dom";
import Adress from "../adress/adress";
import Search from "../search/search";
import SearchLoaded from "../searchLoaded/searchLoaded";

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SearchLoaded/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;