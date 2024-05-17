import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const memesSlice = createSlice({
    name: "memes",
    initialState: {
      entities: [],
      isLoadingMemes: false,
      errors: []
    },
    reducers: {
      setMemes: (state, action) => {
        state.entities = action.payload
      },
      memeAdded: (state, action) => {
        const { id, caption_one, caption_2, img, user_id, user: {username, profile_image} } = action.payload
        const newMeme = { id, caption_one, caption_2, img, user_id, user: {username, profile_image} }
        state.entities = [newMeme, ...state.entities]
        state.errors = []
        // state.filteredMemes = [...state.filteredMemes, newMeme]
      },
      memeUpdated(state, action) {
        const updatedMeme = action.payload
        state.entities = state.entities.map(meme => {
          return meme.id === updatedMeme.id ? updatedMeme : meme
        })
        state.errors = []
      },
      memeRemoved(state, action) {
        state.entities = state.entities.filter((meme) => meme.id !== action.payload)
      },
      setLoading: (state, action) => {
        state.isLoadingMemes = action.payload
      },
      setErrors: (state, action) => {
        state.errors = action.payload
      }
    },
  })
  
  export const { setMemes, memeAdded, memeRemoved, memeUpdated, setLoading, setErrors } = memesSlice.actions
  export default memesSlice.reducer