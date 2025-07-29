import { createSlice } from '@reduxjs/toolkit'

const productsSlice = createSlice({
	name: 'products',
	initialState: {
		data: []
	},
	reducers: {
		createProduct: (state, action) => {
			/*
			const s = JSON.parse(JSON.stringify(state))
			console.log(s)
			*/
			state.data.push(action.payload)
		},
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
