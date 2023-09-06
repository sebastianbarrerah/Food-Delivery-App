import { createSlice } from "@reduxjs/toolkit";

const initialState = ([])

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addUsers: (state, action) => {
            state.push(action.payload)
        },
        editUsers: (state, action) => {
            [...state,
            action.payload
            ]
        },
        resetUsers: (state) => {
            return [];
        }

    }

})

export default usersSlice.reducer
export const { addUsers, editUsers, resetUsers } = usersSlice.actions