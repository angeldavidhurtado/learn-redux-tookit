import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../redux/usersSlice'

const UsersLists = () => {
	const users = useSelector(state => {
		/*
		console.log('useSelector')
		console.log(state)
		*/
		return state.users
	})
	/*
	console.log('users')
	console.log(users)
	*/
	const dispatch = useDispatch()

	useEffect(() => {
		axios
			.get('https://jsonplaceholder.typicode.com/users')
			.then(res => {
				const action = fetchUsers(res.data)
				/*
				console.log('action')
				console.log(action)
				*/
				dispatch(action)
			})
			.catch(err => console.log(err))
	}, [dispatch])

	return (
		<>
			<h2>Lista de Usuario de JSON Placeholder</h2>
			<ul>
				{users.map(user =>
					<li key={user.id}>
						{user.name}
					</li>
				)}
			</ul>
		</>
	)
}

export default UsersLists
