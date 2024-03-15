import { createSlice } from '@reduxjs/toolkit'


const authSlice = createSlice({
    name: "auth",
    initialState: {
      user: null,
      isAuthenticated: false,
      isLoading: false,
      errors: [],
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
            state.isAuthenticated = action.payload !== null
            state.errors = []
        },
        userUpdated: (state, action) => {
            state.user = action.payload
            state.errors = []
            state.usernameErrors = []
            state.passwordErrors = []
        },
        userRemoved: (state) => {
            state.user = null
            state.isAuthenticated = false
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload
        },
        setErrors: (state, action) => {
            state.errors = action.payload
        }
    },
  })
  
  export const { setUser, userUpdated, userRemoved, setLoading, setErrors } = authSlice.actions
  export default authSlice.reducer