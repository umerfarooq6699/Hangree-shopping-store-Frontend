import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const signup=createAsyncThunk("signup",async(obj)=>{
    console.log(obj,"export")
    const res=await axios.post("http://localhost:4000/signupdata",obj)
    return res.data
})

export const signin=createAsyncThunk("signin",async(obj)=>{
    console.log(obj,"signin object")
    const res=await axios.post("http://localhost:4000/signindata",obj)
    return res.data
})

export const changePassword=createAsyncThunk("changepassword",async({obj,token})=>{
    // console.log(obj,token,"kkkkkkkkkkkkkk")
    const res=await axios.post("http://localhost:4000/changePassword",obj,{
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
    return res.data
}) 

const userSlice = createSlice({
    name: "hangree-store",
    initialState: {
        notification:{},
        client:{}
    },
    reducers: {
        emptyNotification:(state,action)=>{
            state.notification={}
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(signup.fulfilled,(state,action)=>{
            console.log(action.payload.message,"payload ")
            state.notification=action.payload
        })
        .addCase(signin.fulfilled,(state,action)=>{
            console.log(action.payload.message,"payload ")
            state.notification=action.payload
            if(state.notification.data){
                state.client=action.payload.data.user
                localStorage.setItem("User",JSON.stringify(action.payload.data.user))
                localStorage.setItem("Token",(action.payload.data.token))
            }
        })
        .addCase(changePassword.fulfilled,(state,action)=>{
            // console.log(action.payload,"mmmmmmmmmmmmmmmmmmmmmmmmmm")
            state.notification=action.payload
        })
    }
})

export const {emptyNotification}=userSlice.actions
export default userSlice.reducer