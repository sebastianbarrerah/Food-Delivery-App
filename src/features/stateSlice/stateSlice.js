import { createSlice } from "@reduxjs/toolkit";


const initialState = (null)

const stateSlice = createSlice({
    name: "online",
    initialState,
    reducers: {
        estadoOnline: (state, action) => {
            state = action.payload
        }
    }
})

export default stateSlice.reducer
export const {estadoOnline} = stateSlice.actions