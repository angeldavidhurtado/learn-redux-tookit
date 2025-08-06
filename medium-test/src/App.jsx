// lee el estado y ejecuta reducers
import { useSelector, useDispatch } from 'react-redux'

// importamos los reducers (funcionalidades) desde el slice
import {
  createProduct,
  readProducts,
  updateProduct,
  deleteProduct
} from './store/productsSlice'

import './App.css'

function App() {
  // lee el estado del slice cuyo valor mame es products
  const products = useSelector(state => state.products)
  // obtenemos el dispatcher
  const dispatch = useDispatch()

  const handleCreateProduct = () => {
    const newProduct = {
      id: String(Date.now()),
      name: 'Nuevo producto'
    }
    dispatch(createProduct(newProduct))
  }

  const handleReadProducts = () => {
    const newData = [
      { id: "1", name: "Producto 1" },
      { id: "2", name: "Producto 2" },
      { id: "3", name: "Producto 3" }
    ]
    dispatch(readProducts(newData))
  }

  const handleUpdateProduct = () => {
    const productToUpdate = {
      id: '1',
      name: 'Nuevo nombre'
    }
    dispatch(updateProduct(productToUpdate))
  }

  const handleDeleteProduct = () => {
    const idProduct = '2'
    dispatch(deleteProduct(idProduct))
  }


  return (
    <>
      {/*
      <h1>React + Redux Toolkit (Guía rápida)</h1>
      */}
      <ul>
        {products.map(product =>
          <li key={product.id}>{product.name}</li>
        )}
      </ul>
      <button onClick={handleCreateProduct}>Create</button>
      <button onClick={handleReadProducts}>Read</button>
      <button onClick={handleUpdateProduct}>Update</button>
      <button onClick={handleDeleteProduct}>Delete</button>
    </>
  )
}

export default App
