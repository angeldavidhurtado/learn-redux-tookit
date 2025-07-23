import { configureStore } from "@reduxjs/toolkit";

const usersReducer = {}

const store = configureStore({
	reducer: {
		data: {
			users: usersReducer
		}
	}
})

export default store
