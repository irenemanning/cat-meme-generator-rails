import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./authSlice"
import memesReducer from "./memesSlice"
const store = configureStore({
    reducer: {
      auth: authReducer,
      memes: memesReducer,
    },
  })
  
  export default store