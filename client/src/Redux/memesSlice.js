import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"


export const fetchMemes = createAsyncThunk(
  'memes/fetchMemes',
  async (_, { dispatch, rejectWithValue }) => {
    dispatch(setLoading(true))
    try {
      const response = await fetch('/memes')
      if (!response.ok) {
        throw new Error('Failed to fetch memes')
      }
      const memes = await response.json()
      dispatch(setMemes(memes))
      return memes
    } catch (error) {
      return rejectWithValue(error.message)
    } finally {
      dispatch(setLoading(false))
    }
  }
)

export const createMeme = createAsyncThunk(
  'memes/createMeme',
  async (data, { dispatch, rejectWithValue }) => {
    dispatch(setLoading(true))
    try {
      const response = await fetch('/memes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      if (!response.ok) {
        const errorData = await response.json()
        dispatch(setErrors(errorData.errors || ['An error occurred.']))
        throw new Error('Meme creation failed')
      }
      const meme = await response.json()
      dispatch(memeAdded(meme))
      return meme
    } catch (error) {
      console.error('Meme creation failed:', error)
      return rejectWithValue(error.message)
    } finally {
      dispatch(setLoading(false))
    }
  }
)

const memesSlice = createSlice({
  name: 'memes',
  initialState: {
    entities: [],
    isLoadingMemes: false,
    errors: [],
  },
  reducers: {
    setMemes: (state, action) => {
      state.entities = action.payload
    },
    memeAdded: (state, action) => {
      const { id, caption_one, caption_two, image, user_id, user } = action.payload
      const newMeme = {
        id,
        caption_one,
        caption_two,
        image,
        user_id,
        user: {
          username: user?.username || 'Unknown',
          profile_image: user?.profile_image || 'default.jpg'
        }
      }
      state.entities = [newMeme, ...state.entities]
      state.errors = []
    },
    memeUpdated: (state, action) => {
      const updatedMeme = action.payload
      state.entities = state.entities.map(meme =>
        meme.id === updatedMeme.id ? updatedMeme : meme
      )
      state.errors = []
    },
    memeRemoved: (state, action) => {
      state.entities = state.entities.filter(meme => meme.id !== action.payload)
    },
    setLoading: (state, action) => {
      state.isLoadingMemes = action.payload
    },
    setErrors: (state, action) => {
      state.errors = action.payload
    },
  },
})

export const { setMemes, memeAdded, memeRemoved, memeUpdated, setLoading, setErrors } = memesSlice.actions
export default memesSlice.reducer