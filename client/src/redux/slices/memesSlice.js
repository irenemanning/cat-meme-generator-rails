import { createSlice } from '@reduxjs/toolkit'

const memesSlice = createSlice({
    name: "memes",
    initialState: {
        entities: [],
        // filteredMemes: [],
        errors: [],
        isLoadingMemes: false
    },
    reducers: {
        setMemes: (state, action) => {
            state.entities = action.payload
        },
        setErrors: (state, action) => {
            state.errors = action.payload
        },
        setLoading: (state, action) => {
            state.isLoadingMemes = action.payload
        },
        memeAdded: (state, action) => {
            const { id, caption_one, caption_two, cmuser_id, cmuser: {username, profile_image} } = action.payload

            const newMeme = { id, caption_one, caption_two, cmuser_id, cmuser: {username, profile_image} }

            state.entities = [newMeme, ...state.entities]
            state.errors = []
            // state.filteredMemes = [...state.filteredMemes, newMeme]
        },
        memeUpdated(state, action) {
            const updatedPost = action.payload
            state.entities = state.entities.map(post => {
              return post.id === updatedPost.id ? updatedPost : post
            })
            state.errors = []
        },
        memeRemoved(state, action) {
            state.entities = state.entities.filter((post) => post.id !== action.payload)
        },
    }
})

export const { setMemes, memeAdded, memeRemoved, memeUpdated, setLoading, setErrors, setFilteredMemes } = memesSlice.actions
export default memesSlice.reducer