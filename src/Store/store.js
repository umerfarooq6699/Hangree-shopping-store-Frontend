import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../Slices/UserSlice";

const store=configureStore({
    reducer:{
        Ecommerce:userSlice
    }
})

export default store