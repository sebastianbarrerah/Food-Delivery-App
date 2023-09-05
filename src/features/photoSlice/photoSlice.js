import { createSlice } from "@reduxjs/toolkit";


const initialState = ({
    userPhoto : null, 
})

const photoSlice = createSlice({
    name: "photo",
    initialState,
    reducers: {
        setUserPhoto: (state, action) => {
            state.userPhoto = action.payload;
          },
        

    }

})

export default photoSlice.reducer
export const {setUserPhoto} = photoSlice.actions