import { createSlice } from '@reduxjs/toolkit'

const productsSlice = createSlice({
	name: 'products',
	initialState: {
		data: [
			{
				id: "1",
				name: "Producto 1"
			},
			{
				id: "2",
				name: "Producto 2"
			},
			{
				id: "3",
				name: "Producto 3"
			}
		]
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
		updateProduct: (state, action) => {
			const { id, name } = action.payload
			const product = state.data.find(product => product.id == id)
			product.name = name
		},
		deleteProduct: (state, action) => {
			const id = action.payload
			state.data = state.data.filter(product => product.id !== id)
		}
	}
})

export const {
	createProduct,
	readProducts,
	updateProduct,
	deleteProduct
} = productsSlice.actions
export default productsSlice.reducer
