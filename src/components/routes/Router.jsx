import { BrowserRouter, Route, Routes } from "react-router-dom";
import Start from "../start/Start";

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Start/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;