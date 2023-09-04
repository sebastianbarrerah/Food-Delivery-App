import { configureStore } from "@reduxjs/toolkit";
import stateReducer  from "../features/stateSlice/stateSlice";
import restaurantReducer from "../features/restaurantSlice/restaurantSlice";
import platosReducer from "../features/platosSlice/platosSlice";

export const store = configureStore({
    reducer:{
        online: stateReducer,
        restaurantes: restaurantReducer,
        platos: platosReducer,
    },
})


