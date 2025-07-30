import { createSlice } from '@reduxjs/toolkit'

const usersSlice = createSlice({
	name: 'users',
	initialState: [],
	reducers: {
		fetchUsers: (state, action) => action.payload
	}
})

export default usersSlice.reducer
