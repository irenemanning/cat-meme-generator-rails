import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const fetchUser = createAsyncThunk('auth/fetchUser', async (_, { dispatch, rejectWithValue }) => {
    try {
      dispatch(setLoading(true))
      const response = await fetch('/me')
      if (response.ok) {
        const user = await response.json()
        dispatch(setUser(user))
        return user
      } else {
        throw new Error('Failed to fetch user data')
      }
    } catch (error) {
      return rejectWithValue(error.message)
    } finally {
      dispatch(setLoading(false))
    }
})

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ username, password }, { dispatch }) => {
    try {
      dispatch(setLoading(true))
      const response = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      })
      if (!response.ok) {
        const errorData = await response.json()
        dispatch(setErrors(errorData.errors || ['An error occurred.']))
        throw new Error("Login failed")
      }
      const data = await response.json()
      dispatch(setUser(data))
      return data
    } catch (error) {
      console.error("Login failed:", error)
      throw error
    } finally {
      dispatch(setLoading(false))
    }
  }
)

export const signupUser = createAsyncThunk(
  'auth/signupUser',
  async (data, { dispatch }) => {
    try {
      dispatch(setLoading(true))
      const response = await fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user: data }),
      })
      if (!response.ok) {
        const errorData = await response.json()
        dispatch(setErrors(errorData.errors || ["An error occurred."]))
        throw new Error("Sign up failed")
      }
      const responseData = await response.json()
      dispatch(setUser(responseData))
      return responseData
    } catch (error) {
      console.error("Sign up failed:", error)
      throw error
    } finally {
      dispatch(setLoading(false))
    }
  }
)

export const logoutUser = createAsyncThunk('auth/logoutUser', async (_, { dispatch }) => {
    try {
        const response = await fetch("/logout", {
        method: "DELETE",
        })
        if (response.ok) {
        dispatch(setUser(null))
        return true
        } else {
        console.error("Logout failed:", response.status, response.statusText)
        return false
        }
    } catch (error) {
        console.error("Logout error:", error)
        return false
    }
})

const authSlice = createSlice({
    name: "auth",
    initialState: {
      user: null,
      isAuthenticated: false,
      isLoading: false,
      profileImageErrors: [],
      usernameErrors: [],
      passwordErrors: [],
      errors: [],
    },
    reducers: {
      setUser: (state, action) => {
        state.user = action.payload
        state.isAuthenticated = action.payload !== null
        state.errors = []
      },
      
      setLoading: (state, action) => {
          state.isLoading = action.payload
      },
      setErrors: (state, action) => {
        state.errors = action.payload
      }
    },
  })
  
  export const { setUser, setLoading, setErrors } = authSlice.actions
  export default authSlice.reducer