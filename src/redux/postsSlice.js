import { createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
	name: 'posts',
	initialState: [],
	reducers: {
		fetchPosts: (state, action) => action.payload
	}
})

export const { fetchPosts } = postsSlice.actions
export default postsSlice.reducer
