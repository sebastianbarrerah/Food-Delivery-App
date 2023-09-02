import { configureStore } from "@reduxjs/toolkit";
import stateReducer  from "../features/stateSlice/stateSlice";

export const store = configureStore({
    reducer:{
        online: stateReducer,
    },
})

