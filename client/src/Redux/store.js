import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./authSlice"
import memesReducer from "./postsSlice"
const store = configureStore({
    reducer: {
      auth: authReducer,
      memes: memesReducer,
    },
  })
  
  export default store