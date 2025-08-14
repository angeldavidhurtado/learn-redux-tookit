import { configureStore } from '@reduxjs/toolkit'
import testsReducer from './testSlice'

const store = configureStore({
	reducer: {
		tests: testsReducer
	}
})

export default store
