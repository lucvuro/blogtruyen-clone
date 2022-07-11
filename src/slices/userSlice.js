import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "users",
    initialState: null,
    reducers: {
        setUser: (state,action) => {
            state = action.payload
            return state
        },
        resetUser: (state,action) => {
            state = {}
        }
    }
})

const {reducer,actions} = userSlice;
export const {setUser,resetUser} = actions;
export default reducer;