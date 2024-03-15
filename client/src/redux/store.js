import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./slices/authSlice"
import memesReducer from "./slices/memesSlice"

export const store = configureStore({
    reducer: {
        auth: authReducer,
        memes: memesReducer
    }
})