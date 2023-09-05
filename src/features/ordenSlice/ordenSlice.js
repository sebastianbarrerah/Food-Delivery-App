import { createSlice } from "@reduxjs/toolkit";


const initialState = ([])

const ordenSlice = createSlice({
    name: "orden",
    initialState,
    reducers: {
        mostrarOrden: (state) => {
            return state
        },
        agregarOrden: (state, action) => {
            state.push(action.payload)
        },
        eliminarOrden: (state) => {
            state = []
        }
        

    }

})

export default ordenSlice.reducer
export const {mostrarOrden, agregarOrden, eliminarOrden} = ordenSlice.actions