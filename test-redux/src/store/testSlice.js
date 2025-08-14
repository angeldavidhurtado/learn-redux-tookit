import { createSlice } from '@reduxjs/toolkit'

const productsSlice = createSlice({
  name: 'products',
  initialState: [
    { id: "1", name: "Producto 1" },
    { id: "2", name: "Producto 2" },
    { id: "3", name: "Producto 3" }
  ],
  reducers: {
    createProduct: (state, action) => {
      state.push(action.payload)
    },
    readProducts: (state, action) => {
      const newState = action.payload
      return newState
    },
    updateProduct: (state, action) => {
      const { id, name } = action.payload
      const product = state.find(product => product.id == id)
      product.name = name
    },
    deleteProduct: (state, action) => {
      const id = action.payload
      const newState = state.filter(product => product.id !== id)
      return newState
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
