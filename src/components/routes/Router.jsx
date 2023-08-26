import { BrowserRouter, Route, Routes } from "react-router-dom";
import Start from "../start/Start";
import Slider from "../slider/Slider";

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Start/>}/>
                <Route path="/slider" element={<Slider/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;