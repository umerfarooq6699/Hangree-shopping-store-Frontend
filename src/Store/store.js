import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../Slices/UserSlice";
import DashboardSlice from "../Slices/DashboardSlice";
import cartSlice from "../Slices/Cart"

const store=configureStore({
    reducer:{
        Ecommerce:userSlice,
        Dashboard:DashboardSlice,
        storeCart:cartSlice
    }
})

export default store