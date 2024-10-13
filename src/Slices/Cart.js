import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const checkoutLogin=createAsyncThunk("checkout",async(token)=>{
    console.log(token,"CCCCCCCCCC")
    const res=await axios.post("http://localhost:4000/checkLogin",{},{
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
    return res.data
})

const cartSlice=createSlice({
    name:"store",
    initialState:{
        sidebarCategory:false,
        cartArray:[],
        notification:{}
    },
    reducers:{
        barsDispatch:(state,action)=>{
            state.sidebarCategory=true
        },
        sidebarCategoryFalse:(state,action)=>{
            state.sidebarCategory=false
        },
        addtocart:(state,action)=>{
            const existingItem=state.cartArray.find((e,i)=>action.payload.name === e.name)
            if(existingItem){
                state.cartArray=state.cartArray.map((e,i)=>{
                    if(action.payload.name === e.name){
                        return {...e,quantity:e.quantity+1}
                    }else{
                        return e
                    }
                })
            }else{
                state.cartArray.push(action.payload)
            }
            console.log(existingItem,"existingItem")
        },
        quantityDecrement:(state,action)=>{
            state.cartArray=state.cartArray.map((e,i)=>{
                if(e.quantity===1){
                    return {...e,quantity:1}
                }else{
                    if(e.name === action.payload){
                        return {...e,quantity:e.quantity-1}
                    }else{
                        return e
                    }
                }
            })
        },
        quantityIncrement:(state,action)=>{
            state.cartArray=state.cartArray.map((e,i)=>{
                if(e.name === action.payload){
                    return {...e,quantity:e.quantity+1}
                }else{
                    return e
                }
            })
        },
        inputQuantity:(state,action)=>{
            console.log(action.payload,"INPUT")
            state.cartArray=state.cartArray.map((e,i)=>{
                if(e.name === action.payload.Name){
                    return {...e,quantity:Number(action.payload.Value)}
                }else {
                    return e
                }
            })
        },
        deleteProduct:(state,action)=>{
            state.cartArray=state.cartArray.filter((e,i)=>{
                return i != action.payload
            })
        },
        cartNotificationEmpty:(state,action)=>{
            state.notification={}
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(checkoutLogin.fulfilled,(state,action)=>{
            // console.log(action.payload,"kljjjjjjj")
            state.notification=action.payload
        })
    }
})

export const {barsDispatch,sidebarCategoryFalse,addtocart,quantityIncrement,quantityDecrement,deleteProduct,inputQuantity,cartNotificationEmpty}=cartSlice.actions
export default cartSlice.reducer