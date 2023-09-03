import { createSlice } from "@reduxjs/toolkit";


const initialState = ({})

const restaurantSlice = createSlice({
    name: "restaurantes",
    initialState,
    reducers: {
        estadoRestaurante: (state, action) => {
            state = action.payload
            return state
        }
    }
})

export default restaurantSlice.reducer
export const {estadoRestaurante} = restaurantSlice.actions