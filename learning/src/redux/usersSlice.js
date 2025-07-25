import { createSlice } from "@reduxjs/toolkit"

const usersSlice = createSlice({
	name: 'users',
	initialState: [],
	reducers: {
		fetchUsers: (state, action) => {
			/*
			console.log('state')
			console.log(state)
			console.log('action')
			console.log(action)
			console.log('payload')
			console.log(action.payload)
			*/
			return action.payload
		}
	}
})

export const { fetchUsers } = usersSlice.actions
export default usersSlice.reducer
