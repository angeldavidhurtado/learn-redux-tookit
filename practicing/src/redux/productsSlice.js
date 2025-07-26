import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
	name: 'products',
	initialState: {},
	reducers: {
		createProduct: (state, action) => {},
		readProducts: (state, action) => {},
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
