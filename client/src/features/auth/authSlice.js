import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginUserAPI, signOutAPI } from "./authAPI";

const initialState = {
    userInfo : {},
    success : false,
    error : null
}

export const loginAsyncSlice = createAsyncThunk('user/loginAPI',async(data)=>{
    const response = await loginUserAPI(data);
    return response.data;
})

export const signOut = createAction('user/signOutAPI',async(userId)=>{
    const response = await signOutAPI(userId);
    return response.data;
})

const authSlice = createSlice({
    name : "user",
    initialState,
    reducers : {},
    extraReducers : (builder) => {
        builder
        .addCase(loginAsyncSlice.pending,(state,action)=>{
            state.userInfo = {};
            state.success = false;
            state.error = null;
        })
        .addCase(loginAsyncSlice.fulfilled,(state,action)=>{
            console.log("SLICE action...",action);
            state.userInfo = action.payload.data;
            state.success = true;
            state.error = false;
        })
    }
})

export const isAuthenticated = (state) => state.auth.userInfo; 
export default authSlice;