import { createSlice } from '@reduxjs/toolkit'

const productsSlice = createSlice({
	name: 'products',
	initialState: {
		data: [{name: 'jj', id: 99}]
	},
	reducers: {
		createProduct: (state, action) => {},
		readProducts: (state, action) => {
			// console.log(action.payload)
			// console.log(state)
			/*
			const clone = JSON.parse(JSON.stringify(state));
  		console.log(clone); // Aquí sí ves: { data: [...] }
			*/
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
