import { configureStore } from "@reduxjs/toolkit";
import stateReducer  from "../features/stateSlice/stateSlice";
import restaurantReducer from "../features/restaurantSlice/restaurantSlice";

export const store = configureStore({
    reducer:{
        online: stateReducer,
        restaurantes: restaurantReducer,
    },
})


