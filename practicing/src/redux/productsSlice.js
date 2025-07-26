import { createSlice } from '@reduxjs/toolkit'

const productsSlice = createSlice({
	name: 'products',
	initialState: {
		data: []
	},
	reducers: {
		createProduct: (state, action) => {},
		readProducts: (state, action) => {
			// console.log(action.payload)
			// console.log(state.data)
			state.data = action.payload
		},
		updateProduc: (state, action) => {},
		deleteProduc: (state, action) => {}
	}
})

export const {
	createProduct,
	readProducts,
	updateProduc,
	deleteProduc
} = productsSlice.actions
export default productsSlice.reducer
