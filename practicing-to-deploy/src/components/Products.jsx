import { useState, useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createProduct, deleteProduct, updateProduct } from '../redux/productsSlice'

function Products() {
	const [productToUpdate, setProductToUpdate] = useState({ id: null, name: null })
	const newNameProduct = useRef('')

	const handleCreateProduct = () => {
		const valueNewNameProduct = newNameProduct.current.value
		if (!valueNewNameProduct) return
		const newProduct = {
			id: String(Date.now()),
			name: valueNewNameProduct
		}
		dispatch(createProduct(newProduct))
		newNameProduct.current.value = ''
	}

	const handleUpdateProduct = () => {
		dispatch(updateProduct(productToUpdate))
		setProductToUpdate({ id: null, name: null })
	}

	const handleDeleteProduct = idProduct => {
		dispatch(deleteProduct(idProduct))
	}

	const products = useSelector(state => state.products)
	const dispatch = useDispatch()

	return (
		<>
			<h2>CRUD de productos</h2>
			<ul>
				{products.data.map(product =>
					<li key={product.id}>
						{
							productToUpdate.id === product.id
							?
							<div className="editProduct">
								<input
									type="text"
									value={productToUpdate.name}
									onChange={e => setProductToUpdate(
										{ ...productToUpdate, name: e.target.value }
									)}
									autoFocus={true}
								/>
								<button onClick={handleUpdateProduct}>Guardar</button>
							</div>
							:
							<div className="button">
								<span>{product.name}</span>
								<button onClick={() =>
									setProductToUpdate({ id: product.id, name: product.name })
								}>Editar</button>
								<button onClick={()=>handleDeleteProduct(product.id)}>Eliminar</button>
							</div>
						}
					</li>
				)}
			</ul>
			<input
				type="text"
				ref={newNameProduct}
			/>
			<button onClick={handleCreateProduct}>Agregar producto</button>
		</>
	)
}

export default Products
