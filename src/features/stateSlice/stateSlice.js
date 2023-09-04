import { createSlice } from "@reduxjs/toolkit";


const initialState = (false)

const stateSlice = createSlice({
    name: "online",
    initialState,
    reducers: {
        estadoOnline: (state, action) => {
            state = action.payload
            return state
        }
    }
})

export default stateSlice.reducer
export const {estadoOnline} = stateSlice.actions