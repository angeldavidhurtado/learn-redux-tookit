import { useSelector, useDispatch } from 'react-redux'
import { createProduct } from './testSlice'

function useCreateProduct() {
  const tests = useSelector(state => state.tests)
  const dispatch = useDispatch()
	const handleCreate = () => {
		const newProduct = {
			id: String(Date.now()),
			name: 'Nuevo producto'
		}
		dispatch(createProduct(newProduct))
	}
	return handleCreate
}

export default useCreateProduct
