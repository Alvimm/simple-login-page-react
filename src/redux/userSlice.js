import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name:'user',
    initialState:{
        user: null,
        isLogged: false,
    },
    reducers:{
        login: (state, action)=>{
            state.user = action.payload
            state.isLogged = true
        },
        logout: (state) =>{
            state.user = null
            state.isLogged = false
        }
    }
})

export const {login, logout} = userSlice.actions
export const selectUser = state => state.user.user
export default userSlice.reducer