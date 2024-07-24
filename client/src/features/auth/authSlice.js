import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginUserAPI, signOutAPI } from "./authAPI";

const initialState = {
    patientInfo : {},
    success : false,
    error : null,
    token : null
}

export const loginAsyncSlice = createAsyncThunk('user/loginAPI',async(data)=>{
    const response = await loginUserAPI(data);
    return response.data;
})

export const signOutAsync = createAction('user/signOutAPI',async(userId)=>{
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
            state.patientInfo = {};
            state.token = null;
            state.success = false;
            state.error = null;
        })
        .addCase(loginAsyncSlice.fulfilled,(state,action)=>{
            state.patientInfo = action.payload.data;
            state.token = action.payload.token;
            state.success = true;
            state.error = false;
        })
        .addCase(signOutAsync,(state)=>{
            Object.assign(state,initialState);
        })
    }
})

export const isAuthenticated = (state) => state.auth.patientInfo;
export const authorisedToken = (state) => state.auth.token;

export default authSlice.reducer;