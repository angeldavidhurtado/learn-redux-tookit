import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../redux/usersSlice'

const UsersLists = () => {
	const users = useSelector(state => state.users)
	const dispatch = useDispatch()

	useEffect(() => {
		axios
			.get('https://jsonplaceholder.typicode.com/users')
			.then(res => {
				console.log(res)
				dispatch(fetchUsers(res.data))
			})
			.catch(err => console.log(err))
	}, [dispatch])

	return <>
		<h2>Lista de Usuario de JSON Placeholder</h2>
		<ul>
			{users.map(user =>
				<li key={user.id}>
					{user.name}
				</li>
			)}
		</ul>
	</>
}

export default UsersLists
