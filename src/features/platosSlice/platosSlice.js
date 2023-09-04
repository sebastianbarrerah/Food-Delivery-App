import { createSlice } from "@reduxjs/toolkit";


const initialState = ([])

const platosSlice = createSlice({
    name: "platos",
    initialState,
    reducers: {
        estadoPlatos: (state, action) => {
            state.push(action.payload)
            console.log(action.payload);
        
        }
    }
})

export default platosSlice.reducer
export const {estadoPlatos} = platosSlice.actions