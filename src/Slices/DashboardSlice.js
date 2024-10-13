import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const addProduct = createAsyncThunk("product", async (obj) => {
    console.log(obj)
    const res = await axios.post("http://localhost:4000/addproduct", obj)
    return res.data
})


export const getCollection = createAsyncThunk("getCollection", async () => {
    const res = await axios.get("http://localhost:4000/getcollection")
    return res.data
})

export const getUpdateProduct=createAsyncThunk("getUpdateProduct",async(id)=>{
    console.log(id,"iiiiiiiiiiiiiiiii")
    const res=await axios.post("http://localhost:4000/getUpdateProduct",{id})
    return res.data
})

export const updateProduct=createAsyncThunk("updateProduct",async({obj,id})=>{
    console.log(id,"iiiiiiiiiiiiiiiii")
    const res=await axios.post("http://localhost:4000/updateProduct",{obj,id})
    return res.data
})


export const dashboardDeleteProduct=createAsyncThunk("dashboardDeleteProduct",async(obj)=>{
    console.log(obj,"dashboardDeleteProduct")
    const res=await axios.post("http://localhost:4000/dashboardDeleteProduct",obj)
    return res.data
})

export const getAllUsers=createAsyncThunk("allusers",async()=>{
    const res=await axios.get("http://localhost:4000/getallusers")
    return res.data
})

export const deleteDashboardUser=createAsyncThunk("deleteuser",async(id)=>{
    console.log(id,"delete id")
    const res=await axios.post("http://localhost:4000/deleteDashboardUser",{id})
    return res.data
})



const dashboardSlice = createSlice({
    name: "store",
    initialState: {
        notification: {},
        getUsersMsg:{},
        deleteUserMsg:{},
        updateProductMsg:{},
        addProductMsg:{},
        index: 0,
        loading: false,
    },
    reducers: {
        dashboardPage: (state, action) => {
            state.index = action.payload
        },
        productPage: (state, action) => {
            state.index = action.payload
        },
        userPage: (state, action) => {
            state.index = action.payload
        },
        addProductPage: (state, action) => {
            state.index = action.payload
        },
        backtohomePage: (state, action) => {
            console.log(action.payload,"index")
            state.index = action.payload
        },
        emptyDashboardNotification:(state,action)=>{
            state.notification={}
        },
        emptyUpdateProductMsg:(state,action)=>{
            state.updateProductMsg={}
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(addProduct.fulfilled, (state, action) => {
                console.log(action.payload,"ppppppppppppppppp")
                state.addProductMsg=action.payload
            })
            .addCase(getCollection.fulfilled, (state, action) => {
                // console.log(action?.payload?.data?.array,"Get data")
                state.notification = action.payload
                state.loading = false
            })
            .addCase(getCollection.pending, (state, action) => {
                state.loading = true
            })
            .addCase(getUpdateProduct.fulfilled,(state,action)=>{
                state.notification=action.payload
            })
            .addCase(updateProduct.fulfilled,(state,action)=>{
                state.updateProductMsg=action.payload
            })
            .addCase(dashboardDeleteProduct.fulfilled,(state,action)=>{
                state.notification=action.payload
            })
            .addCase(getAllUsers.fulfilled,(state,action)=>{
                state.getUsersMsg=action.payload
            })
            .addCase(deleteDashboardUser.fulfilled,(state,action)=>{
                state.deleteUserMsg=action.payload
            })
    }
})

export const {dashboardPage,productPage,userPage,addProductPage,backtohomePage,emptyDashboardNotification,emptyUpdateProductMsg} = dashboardSlice.actions
export default dashboardSlice.reducer