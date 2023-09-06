import { createSlice } from "@reduxjs/toolkit";


const initialState = ([])

const platosSlice = createSlice({
    name: "platos",
    initialState,
    reducers: {
        estadoPlatos: (state, action) => {
            state.push(action.payload)
        },
        resetPlatos: (state) => {
            return [];
        }
    }

})

export default platosSlice.reducer
export const {estadoPlatos, resetPlatos} = platosSlice.actions