import { configureStore } from "@reduxjs/toolkit";
import stateReducer  from "../features/stateSlice/stateSlice";
import restaurantReducer from "../features/restaurantSlice/restaurantSlice";
import platosReducer from "../features/platosSlice/platosSlice";
import usersReducer from "../features/usersSlice/usersSlice";
import photoReducer from "../features/photoSlice/photoSlice";
import ordenReducer from "../features/ordenSlice/ordenSlice";


export const store = configureStore({
    reducer:{
        online: stateReducer,
        restaurantes: restaurantReducer,
        platos: platosReducer,
        users: usersReducer, 
        photo: photoReducer,
        orden: ordenReducer,
    },
})


