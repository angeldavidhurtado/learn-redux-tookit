import { useSelector } from 'react-redux'
import useCreateProduct from './store/fun'
import './App.css'

function App() {
  const tests = useSelector(state => state.tests)
  const handleCreateProduct = useCreateProduct()
  console.log(tests)

  return (
    <>
      <h1>Vite + React</h1>
      <button onClick={handleCreateProduct}>Crear</button>
    </>
  )
}

export default App
