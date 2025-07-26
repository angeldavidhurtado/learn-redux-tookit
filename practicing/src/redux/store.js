import { configureStore } from '@reduxjs/toolkit'
import usersSlice from './usersSlice'
import productsReducer from './productsSlice'

const store = configureStore({
	reducer: {
		users: usersSlice,
		products: productsReducer
	}
})

export default store
