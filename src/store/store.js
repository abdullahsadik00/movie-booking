import { configureStore } from "@reduxjs/toolkit";
import { bookingReducer } from "./reducer/BookingReducer";

export const store = configureStore({
    reducer:{
        bookingReducer
    }
})