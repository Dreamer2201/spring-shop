import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../slises/userSlise';


export const store = configureStore({
    reducer: {
        user: userReducer
    }
})