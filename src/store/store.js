import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../modules/auth/states/authSlice";
import { roomSlice } from "../modules/rooms/states/roomSlice";


export const store = configureStore({
    reducer: {
        auth: authReducer,
        rooms: roomSlice
    }
})