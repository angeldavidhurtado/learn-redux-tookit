import { useEffect } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { readProducts } from '../redux/productsSlice'

function Products() {
	const products = useSelector(state => state.products)
	const dispatch = useDispatch()

	useEffect(() => {
		axios
			.get('http://localhost:3001/products')
			.then(res => {
				dispatch(readProducts(res.data))
			})
			.catch(err => console.error(err))
	}, [dispatch])

	return (
		<>
			<h2>Hola mundo</h2>
			<ul>
				{products.data.map(product =>
					<li key={product.id}>
						{product.name}
					</li>
				)}
			</ul>
		</>
	)
}

export default Products
